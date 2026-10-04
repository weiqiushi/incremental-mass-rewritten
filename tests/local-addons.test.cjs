const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const run = (context, file) => vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });

function translationContext() {
    const nodes = new Map();
    const context = vm.createContext({
        Element: class {
            setHTML(value) { this.html = value; }
            addHTML(value) { this.html = (this.html || '') + value; }
            setTxt(value) { this.text = value; }
            setAttr(name, value) { (this.attrs ||= {})[name] = value; }
        },
        NodeFilter: { SHOW_TEXT: 4 },
        document: {
            addEventListener() {},
            createTreeWalker() { return { nextNode() { return false; } }; },
            getElementById(id) { return nodes.get(id) || {}; },
        },
        setupHTML() {}, createPopup() {}, createConfirm() {}, createPrompt() {},
        alert() {}, confirm() {}, prompt() {},
    });
    context.window = context;
    run(context, 'local/lang/zh-CN.js');
    run(context, 'local/localization.js');
    return context;
}

function speedContext() {
    const elapsed = [];
    const context = vm.createContext({
        document: { addEventListener() {}, getElementById() { return null; } },
        getPlayerData() { return { options: { font: 'Verdana' } }; },
        updateOptionsHTML() {},
    });
    context.window = context;
    // The same calls used by upstream loop and simulateTime, with deterministic dt.
    vm.runInContext(`
        var player;
        function loadPlayer(data) {
            player = {options: {...getPlayerData().options, ...data.options}};
        }
        function calc(dt) { record(dt); return dt; }
        function loop() { return calc(0.05); }
    `, context);
    context.record = dt => elapsed.push(dt);
    run(context, 'local/time-speed.js');
    context.loadPlayer({ options: {} });
    return { context, elapsed };
}

test('Chinese text retains numeric payloads and resolves specific sentences first', () => {
    const { IMR_I18N: { translate } } = translationContext();
    assert.equal(translate('Tier 6\'s reward is boosted based on dark matters. Currently:'), '暗物质增强阶层 6 的奖励。当前效果：');
    assert.equal(translate('Which multiples Frequency gain by'), '它使频率获取乘以');
    assert.equal(translate('  Requirement: 5.0000e123 g  '), '  需求： 5.0000e123 g  ');
    assert.equal(translate('Protons Powers'), '质子能量');
    assert.equal(translate('qol8 unl1 qu2 FSS_base'), 'qol8 unl1 qu2 FSS_base');
    assert.equal(translate('1.0000e1,000,000 uni'), '1.0000e1,000,000 uni');
});

test('HTML translation preserves handlers, identifiers, styles, URLs and scripts', () => {
    const { IMR_I18N: { html } } = translationContext();
    const markup = '<button id="mass_btn" class="Mass" onclick="buy(\'Mass\', 2)" style="width: 123px" title="Mass" data-key="Mass">Mass <b>1.23e45</b></button><a href="/Mass">Save</a><script>const label = "Mass";</script>';
    assert.equal(html(markup), '<button id="mass_btn" class="Mass" onclick="buy(\'Mass\', 2)" style="width: 123px" title="质量" data-key="Mass">质量 <b>1.23e45</b></button><a href="/Mass">保存</a><script>const label = "Mass";</script>');
    const tooltip = '<div tooltip-html="Mass &lt; <b>1e100</b>" onclick="if (x > 1) buy()">Save</div>';
    assert.equal(html(tooltip), '<div tooltip-html="质量 &lt; <b>1e100</b>" onclick="if (x > 1) buy()">保存</div>');
    const embedded = `<button onclick="show('title=Mass')" title = 'Mass'>Mass</button><script>let s = '<b title="Mass">Mass</b>';</script><!-- title="Mass" -->`;
    assert.equal(html(embedded), `<button onclick="show('title=Mass')" title = '质量'>质量</button><script>let s = '<b title="Mass">Mass</b>';</script><!-- title="Mass" -->`);
});

test('upstream Element output methods are translated without modifying state attributes', () => {
    const context = translationContext();
    const element = new context.Element();
    element.setHTML('<b>Mass</b>');
    element.addHTML(' Save');
    element.setTxt('Quantum Foam');
    element.setAttr('id', 'Mass');
    element.setAttr('tooltip-html', '<b>Mass</b>');
    assert.equal(element.html, '<b>质量</b> 保存');
    assert.equal(element.text, '量子泡沫');
    assert.equal(element.attrs.id, 'Mass');
    assert.equal(element.attrs['tooltip-html'], '<b>质量</b>');
});

test('real upstream corruption markup translates boxed strings and preserves active markup', () => {
    const context = translationContext();
    const corrupt = fs.readFileSync(path.join(root, 'js/saves.js'), 'utf8')
        .split('\n').find(line => line.startsWith('String.prototype.corrupt ='));
    assert.ok(corrupt);
    vm.runInContext(corrupt, context);
    const source = 'Atomic Power’s effect is <b>25.000%</b> exponentially stronger.';
    context.source = source;
    const boxed = vm.runInContext('source.corrupt(false)', context);
    assert.equal(typeof boxed, 'object');
    const element = new context.Element();
    element.setHTML(boxed);
    assert.equal(element.html, '原子能量的效果 <b>25.000%</b> 获得指数增强。');
    assert.equal(context.IMR_I18N.translate(new String('Quantum Foam')), '量子泡沫');
    element.setHTML(vm.runInContext('source.corrupt(true)', context));
    assert.match(element.html, /^<strike>原子能量的效果 <b>25\.000%<\/b> 获得指数增强。<\/strike>/);
    assert.match(element.html, /class='corrupted_text'/);
    assert.ok(!element.html.includes('Atomic Power'));
});

test('upstream chroma and primordium descriptions translate punctuation and optional effects', () => {
    const context = translationContext();
    context.player = { dark: { unl: false } };
    context.format = value => String(value);
    context.hasPrestige = () => false;
    const trees = new Set();
    context.hasTree = id => trees.has(id);
    run(context, 'js/quantum/chroma.js');
    run(context, 'js/quantum/primordium.js');
    const chroma = vm.runInContext('CHROMA.effDesc[1]', context);
    const particles = vm.runInContext('PRIM.particle.effDesc', context);
    const number = { toString: () => '1.2013', softcapHTML: () => '' };
    const { html } = context.IMR_I18N;
    assert.equal(html(chroma([number])), '使五重阶层之前的所有需求降低至原来的 1/1.2013。');
    context.player.dark.unl = true;
    assert.equal(html(chroma([number])), '使五重阶层之前、奇异折算之前的所有需求降低至原来的 1/1.2013。');
    number.softcapHTML = () => '<span class="soft">(softcapped)</span>';
    const capped = html(chroma([number]));
    assert.ok(capped.includes('1/1.2013<span class="soft">'));
    assert.ok(!capped.includes('Makes'));
    for (const unlocked of [false, true]) {
        if (unlocked) { trees.add('prim2'); trees.add('prim3'); }
        assert.equal(html(particles[5](['0.2466', '2.4660'])), '费米子获取的底数增加 0.2466'
            + (unlocked ? ' /<br> 费米子获得 2.4660 个免费阶层' : ' '));
        assert.equal(html(particles[6](['12,597,408', '1.5000'])), '所有辐射波获取乘以 12,597,408'
            + (unlocked ? ' /<br> 所有辐射波效果增强 1.5000 倍' : ''));
    }
});

test('glyph Max matches the UI while claims subtract owned glyphs and preserve passive targets', () => {
    const Decimal = require('../js/break_eternity.js');
    const context = vm.createContext({
        Decimal, E: value => new Decimal(value),
        player: { chal: { active: 0 }, dark: { run: { active: true, gmode: 1, gamount: 420,
            glyphs: Array.from({ length: 6 }, () => new Decimal(0)), upg: [] } } },
        tmp: { dark: { rayEff: {}, mass_glyph_eff: [], mass_glyph_gain: [], mg_passive: [] },
            c16: { in: false }, matters: { FSS_eff: [1, 1] }, glyph_upg_eff: [] },
        OURO: { evo: 0 }, CHALS: { inChal: () => false },
        hasPrestige: () => false, hasElement: (id, layer) => id === 7 && layer === 1,
        appleEffect: () => 1,
    });
    context.window = context;
    run(context, 'js/darkness/dark_run.js');
    vm.runInContext('DARK_RUN.mass_glyph_gain = Array.from({length: 6}, () => () => E(729));', context);
    const runState = context.player.dark.run;
    const gain = () => { context.updateDarkRunTemp(); return context.tmp.dark.mass_glyph_gain[0].toNumber(); };
    assert.equal(gain(), 729);
    runState.gmode = 0;
    assert.equal(gain(), 420);
    runState.glyphs[0] = new Decimal(700);
    assert.equal(gain(), 29);
    runState.gmode = 1;
    assert.equal(gain(), 29);
    runState.glyphs[0] = new Decimal(750);
    assert.equal(gain(), 0);
    runState.glyphs[0] = new Decimal(0);
    runState.active = false;
    assert.equal(gain(), 0);
    assert.equal(context.tmp.dark.mg_passive[0].toNumber(), 729);
    assert.equal(runState.gmode, 1);
    assert.equal(runState.gamount, 420);
});

test('all translation templates retain every dynamic placeholder', () => {
    const context = translationContext();
    for (const [source, target] of context.IMR_ZH_CN.templates) {
        const tokens = source.match(/\{\d+\}/g) || [];
        assert.deepEqual((target.match(/\{\d+\}/g) || []).sort(), [...tokens].sort(), source);
        const expanded = source.replace(/\{(\d+)\}/g, (_, id) => `17029.${id}500`);
        const translated = context.IMR_I18N.translate(expanded);
        for (const token of tokens) {
            const payload = token.replace(/\{(\d+)\}/, (_, id) => `17029.${id}500`);
            assert.ok(translated.includes(payload), `${source}: lost ${payload}`);
        }
    }
});

test('an already translated catalogue is stable under repeated display hooks', () => {
    const context = translationContext();
    for (const source of Object.keys(context.IMR_ZH_CN.exact)) {
        const first = context.IMR_I18N.translate(source);
        assert.equal(context.IMR_I18N.translate(first), first, source);
    }
});

test('fresh and old saves default to 1x, settings survive a JSON save round trip', () => {
    const { context } = speedContext();
    assert.equal(context.getPlayerData().options.timeMultiplier, 1);
    assert.equal(context.player.options.timeMultiplier, 1);
    context.changeTimeMultiplier(6);
    const save = JSON.parse(JSON.stringify(context.player));
    context.loadPlayer(save);
    assert.equal(context.player.options.timeMultiplier, 7);
    context.loadPlayer({ options: { font: 'Roboto' } });
    assert.equal(context.player.options.timeMultiplier, 1);
    assert.equal(context.player.options.font, 'Roboto');
});

test('invalid imported settings are normalized and the controls stay in 1–10', () => {
    const { context } = speedContext();
    for (const [input, expected] of [[0, 1], [-3, 1], [11, 10], [5.9, 5], [null, 1], ['5', 1], [NaN, 1], [Infinity, 1]]) {
        context.loadPlayer({ options: { timeMultiplier: input } });
        assert.equal(context.player.options.timeMultiplier, expected);
    }
    context.changeTimeMultiplier(50);
    assert.equal(context.player.options.timeMultiplier, 10);
    context.changeTimeMultiplier(-50);
    assert.equal(context.player.options.timeMultiplier, 1);
});

test('only live elapsed time is accelerated; direct offline simulation is unchanged', () => {
    const { context, elapsed } = speedContext();
    assert.equal(context.loop(), 0.05);
    context.changeTimeMultiplier(4);
    assert.equal(context.loop(), 0.25);
    assert.equal(context.calc(120), 120);
    assert.equal(context.calc(-2), 0);
    assert.deepEqual(elapsed, [0.05, 0.25, 120, 0]);
});

test('a failed live tick cannot accidentally accelerate subsequent offline calculations', () => {
    const { context } = speedContext();
    context.changeTimeMultiplier(9);
    context.record = () => { throw new Error('tick failed'); };
    assert.throws(() => context.loop(), /tick failed/);
    context.record = () => {};
    assert.equal(context.calc(120), 120);
});
