/* Display-only localization hooks; loaded after upstream scripts, before loadGame. */
(() => {
    'use strict';
    const pack = window.IMR_ZH_CN;
    // This upstream helper only builds display prefixes. Localize it before
    // callers concatenate rank/building names, including the special Meta- form.
    if (typeof window.getScalingName === 'function') {
        const scalingName = window.getScalingName;
        window.getScalingName = function (...args) {
            const label = scalingName.apply(this, args);
            const translated = pack.scalingLabels?.[label.trim().replace(/-$/, '')];
            return translated ? translated + ' ' : label;
        };
    }
    // Overflow messages put the value in a separate <b> node. Keep its markup
    // intact while placing the Chinese operation on both sides of the value.
    if (typeof window.overflowFormat === 'function') {
        const overflowFormat = window.overflowFormat;
        window.overflowFormat = function (...args) {
            return overflowFormat.apply(this, args).replace(/^(rooted|raised) by (.*)$/, (_, operation, value) =>
                operation === 'rooted' ? `开 ${value} 次方根` : `变为原来的 ${value} 次方`);
        };
    }

    const normalize = text => text.replace(/\s+/g, ' ').trim();
    // Upstream String.prototype.corrupt(false) returns a boxed String.
    // Unbox display text, including strings created in a different realm.
    const displayString = value => value !== null && typeof value === 'object'
        && Object.prototype.toString.call(value) === '[object String]' ? String(value) : value;
    const escape = text => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const cache = new Map();
    const templateIndex = new Map();
    const missing = new Set();
    // setupHTML and popup hooks can visit output already localized by Element.
    // Keep translated text (including retained abbreviations) stable on that pass.
    const localized = new Set(Object.values(pack.exact).map(normalize));
    const localizedTemplates = pack.templates.map(([, target]) => new RegExp('^' + normalize(target)
        .split(/(\{\d+\})/).map(part => /^\{\d+\}$/.test(part) ? '.+?' : escape(part)).join('') + '$'));
    for (const [source, target] of pack.templates) {
        const captures = [];
        const pattern = normalize(source).split(/(\{\d+\})/).map(part => {
            if (/^\{\d+\}$/.test(part)) { captures.push(part); return '(.+?)'; }
            return escape(part);
        }).join('');
        const key = (source.match(/^[A-Za-z]+/) || ['*'])[0].toLowerCase();
        const list = templateIndex.get(key) || [];
        list.push({ regex: new RegExp('^' + pattern + '$', 'i'), target, captures, specificity: source.replace(/\{\d+\}/g, '').length });
        templateIndex.set(key, list);
    }
    // Specific sentences must win over generic labels such as 'Tier {0}'.
    for (const list of templateIndex.values()) list.sort((a,b) => b.specificity-a.specificity);
    const phrases = new Map(pack.phrases);
    const ambiguous = new Set(['ON','OFF','On','Off','Yes','No','Up','Down','Top','Bottom','Stronger']);
    for (const [source,target] of pack.phrases) {
        if (!ambiguous.has(source) && !phrases.has(source.toLowerCase())) phrases.set(source.toLowerCase(), target);
    }
    const phrasePattern = new RegExp('(?<![A-Za-z0-9_])(?:' + [...phrases.keys()].sort((a,b) => b.length-a.length).map(escape).join('|') + ')(?![A-Za-z0-9_])', 'g');
    function translate(text) {
        text = displayString(text);
        if (typeof text !== 'string' || !/[A-Za-z]/.test(text)) return text;
        if (cache.has(text)) return cache.get(text);
        const source = normalize(text);
        if (localized.has(source) || (/[\u3400-\u9fff]/.test(source) && localizedTemplates.some(pattern => pattern.test(source)))) return text;
        let result = pack.exact[source];
        if (result === undefined) {
            const key = (source.match(/^[A-Za-z]+/) || ['*'])[0].toLowerCase();
            const candidates = [...(templateIndex.get(key) || []), ...(key === '*' ? [] : templateIndex.get('*') || [])];
            for (const item of candidates) {
                const match = source.match(item.regex);
                if (!match) continue;
                const values = new Map(item.captures.map((p,i) => [p, match[i+1]]));
                result = item.target.replace(/\{\d+\}/g, p => translate(values.get(p) ?? p));
                break;
            }
        }
        if (result === undefined) {
            result = source.replace(phrasePattern, word => phrases.get(word));
            if (missing.size < 512 && result === source && /[A-Za-z]{3} [A-Za-z]{3}/.test(source)) missing.add(source);
        }
        const output = text.match(/^\s*/)[0] + result + text.match(/\s*$/)[0];
        if (cache.size >= 2048) cache.clear();
        cache.set(text, output);
        return output;
    }
    // Split only markup, keeping ids, classes, URLs and inline handlers intact.
    // Attribute values may themselves contain '>' (comparisons and tooltip HTML).
    const tokenPattern = /<!--[\s\S]*?-->|<(?:[^>"']|"[^"]*"|'[^']*')*>/g;
    const textAttributes = ['tooltip-html','title','placeholder','aria-label'];
    // Consume all attributes, including entire quoted values, so apparent
    // title="..." text inside an onclick handler can never be translated.
    const attributePattern = /\s+([^\s=/>]+)\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/g;
    function html(value) {
        value = displayString(value);
        if (typeof value !== 'string') return value;
        let result = '', cursor = 0, skip = false;
        for (const token of value.matchAll(tokenPattern)) {
            result += skip ? value.slice(cursor, token.index) : translate(value.slice(cursor, token.index));
            const tag = token[0];
            if (skip || /^<!--/.test(tag)) {
                result += tag;
                if (/^<\/(script|style)\b/i.test(tag)) skip = false;
                cursor = token.index + tag.length;
                continue;
            }
            if (/^<(script|style)\b/i.test(tag)) skip = true;
            result += tag.replace(attributePattern, (attribute,name,quoted,a,b,c) => {
                if (!textAttributes.includes(name.toLowerCase())) return attribute;
                const quote = c === undefined ? quoted[0] : '"';
                const translated = html(a ?? b ?? c).replace(quote === '"' ? /"/g : /'/g, quote === '"' ? '&quot;' : '&#39;');
                return attribute.slice(0, attribute.length - quoted.length) + quote + translated + quote;
            });
            cursor = token.index + tag.length;
        }
        return result + (skip ? value.slice(cursor) : translate(value.slice(cursor)));
    }
    function subtree(root) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
            const node = walker.currentNode;
            if (node.parentElement?.closest('script,style,textarea,input,[data-no-translate]')) continue;
            const result = translate(node.nodeValue);
            if (result !== node.nodeValue) node.nodeValue = result;
        }
        const nodes = root.querySelectorAll?.('[tooltip-html],[title],[placeholder],[aria-label]') || [];
        for (const node of nodes) for (const name of ['tooltip-html','title','placeholder','aria-label']) {
            if (node.hasAttribute(name)) node.setAttribute(name, html(node.getAttribute(name)));
        }
    }
    for (const name of ['setHTML','addHTML','setTxt']) {
        const original = Element.prototype[name];
        Element.prototype[name] = function (value) { return original.call(this, name === 'setTxt' ? translate(value) : html(value)); };
    }
    const setAttr = Element.prototype.setAttr;
    Element.prototype.setAttr = function (name, value) {
        return setAttr.call(this, name, ['tooltip-html','title','placeholder','aria-label'].includes(name) ? html(value) : value);
    };
    for (const name of ['createPopup','createConfirm','createPrompt']) {
        const original = window[name];
        window[name] = function (text, ...args) {
            if (name === 'createPopup' && typeof args[1] === 'string') args[1] = translate(args[1]);
            const result = original.call(this, html(text), ...args);
            subtree(document.getElementById('popups'));
            return result;
        };
    }
    for (const name of ['alert','confirm','prompt']) {
        const original = window[name];
        window[name] = function (text, ...args) { return original.call(this, translate(text), ...args); };
    }
    const setup = window.setupHTML;
    window.setupHTML = function (...args) { const result = setup.apply(this,args); subtree(document.body); return result; };
    window.IMR_I18N = Object.freeze({ translate, html, subtree, missing, language: 'zh-CN' });
    document.addEventListener('DOMContentLoaded', () => {
        document.documentElement.lang = 'zh-CN';
        document.title = '质量增量重制版 · v0.8-beta';
        subtree(document.body);
    }, { once: true });
})();
