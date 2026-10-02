/* A saved 1–10x clock setting, without editing upstream saves.js or loop(). */
(() => {
    'use strict';
    const clamp = value => typeof value === 'number' && Number.isFinite(value)
        ? Math.max(1, Math.min(10, Math.floor(value))) : 1;
    const playerData = window.getPlayerData;
    window.getPlayerData = function (...args) {
        const data = playerData.apply(this, args);
        data.options.timeMultiplier = 1;
        return data;
    };
    const loadPlayer = window.loadPlayer;
    window.loadPlayer = function (...args) {
        const result = loadPlayer.apply(this, args);
        player.options.timeMultiplier = clamp(player.options.timeMultiplier);
        return result;
    };
    window.changeTimeMultiplier = function (delta) {
        player.options.timeMultiplier = clamp(clamp(player.options.timeMultiplier) + delta);
        updateSpeed();
    };
    // loop is the only entry whose dt is wall-clock time; offline simulateTime
    // calls calc directly, so historical offline time is not multiplied again.
    const loop = window.loop;
    const calc = window.calc;
    let liveFrame = false;
    window.loop = function (...args) {
        liveFrame = true;
        try { return loop.apply(this, args); }
        finally { liveFrame = false; }
    };
    window.calc = function (dt, ...args) {
        const elapsed = Math.max(0, dt);
        return calc.call(this, liveFrame ? elapsed * clamp(player.options.timeMultiplier) : elapsed, ...args);
    };
    function updateSpeed() {
        const output = document.getElementById('time_multiplier');
        if (output && typeof player !== 'undefined') output.textContent = clamp(player.options.timeMultiplier);
    }
    const options = window.updateOptionsHTML;
    window.updateOptionsHTML = function (...args) { const result = options.apply(this,args); updateSpeed(); return result; };
    document.addEventListener('DOMContentLoaded', () => {
        const parent = document.getElementById('confirm_table');
        const heading = parent.previousElementSibling.previousElementSibling;
        const control = document.createElement('div');
        control.className = 'local-time-speed';
        control.innerHTML = '时间倍率：<span id="time_multiplier">1</span>/10 <button class="btn" onclick="changeTimeMultiplier(-1)">-1</button><button class="btn" onclick="changeTimeMultiplier(1)">+1</button><br><br>';
        heading.before(control);
    }, { once: true });
})();
