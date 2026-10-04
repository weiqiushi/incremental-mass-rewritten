/* Narrow upstream bug fixes, kept separate to ease syncing the original game. */
(() => {
    'use strict';
    const updateDarkRunTemp = window.updateDarkRunTemp;
    window.updateDarkRunTemp = function (...args) {
        const result = updateDarkRunTemp.apply(this, args);
        // Max ON displays infinity; only Max OFF should limit the claim amount.
        // Recompute from uncapped targets after the inverted check loses excess.
        for (let i = 0; i < MASS_GLYPHS_LEN; i++) {
            const target = player.dark.run.active ? DARK_RUN.mass_glyph_gain[i]() : E(0);
            let gain = Decimal.max(0, target.sub(player.dark.run.glyphs[i]));
            if (player.dark.run.gmode === 0) gain = Decimal.min(player.dark.run.gamount, gain);
            tmp.dark.mass_glyph_gain[i] = gain;
        }
        return result;
    };
})();
