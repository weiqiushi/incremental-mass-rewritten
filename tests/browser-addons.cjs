/* Optional real-browser checks. Install Playwright separately; see docs/LOCALIZATION.md. */
const assert = require('node:assert/strict');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
    try {
        const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        await page.route('http{,s}://**/*', route => route.abort());
        await page.addInitScript(() => {
            const interval = window.setInterval;
            window.__testIntervals = [];
            window.setInterval = (...args) => {
                const id = interval(...args);
                window.__testIntervals.push(id);
                return id;
            };
        });
        const ready = async () => {
            await page.waitForFunction(() => typeof player !== 'undefined' && tmp.start);
            await page.evaluate(() => window.__testIntervals.forEach(clearInterval));
        };
        await page.goto(pathToFileURL(path.resolve(__dirname, '../index.html')).href);
        await ready();
        assert.equal(await page.evaluate(() => player.options.timeMultiplier), 1);
        assert.equal(await page.evaluate(() => document.documentElement.lang), 'zh-CN');
        assert.equal(await page.evaluate(async () => {
            await document.fonts.load('14px "IMR Chinese Subset"');
            return document.fonts.check('14px "IMR Chinese Subset"');
        }), true);
        await page.evaluate(() => { goToTab('options'); updateTemp(); updateHTML(); });
        const row = page.locator('.local-time-speed');
        assert.match(await row.innerText(), /时间倍率：1\/10/);
        assert.equal(await row.evaluate(node => node.nextElementSibling.textContent), '确认窗口设置');
        for (let i = 0; i < 12; i++) await row.getByRole('button', { name: '+1', exact: true }).click();
        assert.equal(await page.evaluate(() => player.options.timeMultiplier), 10);
        assert.equal(await page.locator('#time_multiplier').innerText(), '10');
        await page.evaluate(() => { player.offline.active = false; save(); });
        await page.reload();
        await ready();
        assert.equal(await page.evaluate(() => player.options.timeMultiplier), 10);
        await page.evaluate(() => { goToTab('options'); updateTemp(); updateHTML(); });
        for (let i = 0; i < 12; i++) await row.getByRole('button', { name: '-1', exact: true }).click();
        assert.equal(await page.evaluate(() => player.options.timeMultiplier), 1);

        // Use the actual import dialog with an upstream-format save without our field.
        const oldSave = await page.evaluate(() => {
            const data = JSON.parse(JSON.stringify(player));
            delete data.options.timeMultiplier;
            data.offline.current = Date.now();
            return btoa(JSON.stringify(data));
        });
        await page.locator('#tab_div-options').getByRole('button', { name: '导入存档', exact: true }).click();
        const popup = page.locator('#popups .popup');
        assert.match(await popup.innerText(), /存档/);
        await popup.locator('input').fill(oldSave);
        await Promise.all([
            page.waitForEvent('load'),
            popup.getByRole('button', { name: '确定', exact: true }).click(),
        ]);
        await ready();
        assert.equal(await page.evaluate(() => player.options.timeMultiplier), 1);

        // Real production: one wall-clock second at 5x must equal five seconds at 1x.
        const measurements = await page.evaluate(() => {
            const originalNow = Date.now;
            const fakeNow = originalNow();
            Date.now = () => fakeNow;
            try {
                const baseline = JSON.parse(JSON.stringify(player));
                const live = multiplier => {
                    loadPlayer(JSON.parse(JSON.stringify(baseline)));
                    player.mass = E(0);
                    player.time = 0;
                    player.options.timeMultiplier = multiplier;
                    for (let i = 0; i < 5; i++) updateTemp();
                    date = fakeNow - 1000;
                    loop();
                    return { mass: player.mass.toNumber(), time: player.time };
                };
                const one = live(1), five = live(5), ten = live(10);
                loadPlayer(JSON.parse(JSON.stringify(baseline)));
                player.mass = E(0);
                player.time = 0;
                player.options.timeMultiplier = 10;
                for (let i = 0; i < 5; i++) updateTemp();
                simulateTime(5);
                const offline = { mass: player.mass.toNumber(), time: player.time };
                return { one, five, ten, offline };
            } finally { Date.now = originalNow; }
        });
        assert.ok(Math.abs(measurements.five.mass / measurements.one.mass - 5) < 1e-9);
        assert.ok(Math.abs(measurements.ten.mass / measurements.one.mass - 10) < 1e-9);
        assert.equal(measurements.five.time, 5);
        assert.ok(Math.abs(measurements.offline.mass - measurements.five.mass) < 1e-9);
        assert.ok(Math.abs(measurements.offline.time - 5) < 1e-9);

        // Popup event handlers survive translation and invoke the original callbacks.
        await page.evaluate(() => {
            document.getElementById('popups').replaceChildren();
            window.__confirmWorked = false;
            createConfirm('Do you want to exit?', 'addon-test', () => { window.__confirmWorked = true; });
        });
        await page.locator('#popups').getByRole('button', { name: '是', exact: true }).click();
        assert.equal(await page.evaluate(() => window.__confirmWorked), true);
        await page.evaluate(() => { goToTab('options'); updateTemp(); updateHTML(); });
        await page.screenshot({ path: process.env.IMR_SCREENSHOT || '/tmp/imr-options-verified.png' });
        assert.deepEqual(errors, []);
        console.log('Browser checks passed:', JSON.stringify(measurements));
    } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
