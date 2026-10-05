const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const Decimal = require('../js/break_eternity.js');
const root = path.resolve(__dirname, '..');
const run = (context, file) => vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });

function context() {
    const E = x => new Decimal(x);
    const names = ['rank', 'tier', 'tetr', 'pent', 'hex'];
    const c = vm.createContext({
        Decimal,
        player: {
            atom: { elements: [[1, 218]], muonic_el: [10, 11, 40] },
            ranks: Object.fromEntries(names.map(name => [name, E(1e10)])),
            stars: { points: E('ee20') },
            dark: { matters: { amt: Array.from({ length: 14 }, () => E('e20')) } },
        },
        tmp: {
            c16: { in: false }, rip: { in: false }, star_unl: true,
            elements: { deCorrupt: [], effect: {} },
            matters: { reduction: 0, amt_0: E('e20'), exponent: 2, FSS_eff: [E(2), E(1)] },
            dark: { abEff: { mexp: E(1) } },
        },
        MUONIC_ELEM: { upgs: [] }, OURO: { evo: 0 }, RANKS: { names },
        hasPrestige: () => false, hasBeyondRank: () => false, hasTree: () => false,
        hasCharger: id => id === 0, glyphUpgEff: () => E(1),
    });
    run(c, 'js/saves.js');
    run(c, 'js/main.js');
    run(c, 'js/darkness/c16.js');
    // Isolate the first charger's matter multiplier from the other upgrades.
    c.hasCharger = id => id === 0;
    run(c, 'js/elemental.js');
    run(c, 'js/stars.js');
    run(c, 'js/darkness/matter.js');
    return c;
}

test('C16 suppresses corrupted owned elements in both save formats and restores them on exit', () => {
    for (const elements of [[40, 46, 162, 187], [[1, 218]]]) {
        const c = context();
        c.player.atom.elements = elements;
        assert.equal(c.hasElement(162), true);
        c.tmp.c16.in = true;
        for (const id of [40, 162, 187]) assert.equal(c.hasElement(id), false);
        assert.equal(c.hasElement(46), true);
        assert.equal(c.hasElement(40, 1), true, 'muonic elements have a separate layer');
        c.tmp.elements.deCorrupt = [187];
        assert.equal(c.hasElement(187), true);
        assert.equal(c.hasElement(162), false);
        c.tmp.elements.deCorrupt.push(162);
        assert.equal(c.hasElement(162), true);
        c.tmp.c16.in = false;
        assert.equal(c.hasElement(40), true);
        assert.equal(c.hasElement(999), false);
    }
});

test('muonic element 11 restores the FSS exponent in C16; evolved matters keep their multiplier', () => {
    const c = context();
    c.hasElement = (id, layer) => id === 11 && layer === 1;
    c.tmp.c16.in = true;
    c.tmp.matters.reduction = 1;
    const gain = () => vm.runInContext('MATTERS.gain(12)', c);
    assert.ok(gain().eq('e20'), 'FSS squares the e10 matter reward');
    c.hasElement = () => false;
    assert.ok(gain().eq('e10'), 'FSS stays corrupted before muonic element 11');
    c.tmp.c16.in = false;
    c.tmp.matters.reduction = 0;
    c.tmp.matters.FSS_eff[0] = new Decimal(1);
    const normal = gain();
    c.tmp.matters.FSS_eff[0] = new Decimal(2);
    assert.ok(gain().eq(normal.pow(2)), 'normal matters retain their FSS exponent');
    c.tmp.matters.reduction = 2;
    c.tmp.matters.FSS_eff[0] = new Decimal(1);
    const evolved = gain();
    c.tmp.matters.FSS_eff[0] = new Decimal(2);
    assert.ok(gain().eq(evolved.mul(2)), 'evolved matter balance is unchanged');
});

test('element 46 keeps its reduced star reward while C16 disables the normal mass multiplier', () => {
    const c = context();
    c.tmp.c16.in = true;
    c.tmp.rip.in = true;
    const stars = vm.runInContext('STARS.effect()', c);
    c.tmp.stars = { effect: stars };
    assert.ok(stars[0].eq(1));
    assert.ok(stars[1].eq(1), 'element 162 remains corrupted');
    assert.ok(vm.runInContext('STARS.effect(true)[0]', c).gt('e100'));
    assert.ok(vm.runInContext('ELEMENTS.upgs[46].effect()', c).gt(1));
    c.tmp.c16.in = false;
    const ordinary = vm.runInContext('STARS.effect()', c);
    assert.ok(vm.runInContext('STARS.effect(true)[0]', c).eq(ordinary[0]));
    c.tmp.stars.effect = ordinary;
    assert.ok(vm.runInContext('ELEMENTS.upgs[46].effect()', c).eq(ordinary[0].add(1).pow(0.02)));
    c.tmp.star_unl = false;
    delete c.tmp.stars;
    assert.ok(vm.runInContext('ELEMENTS.upgs[46].effect()', c).eq(1), 'fresh saves need no star cache');
});
