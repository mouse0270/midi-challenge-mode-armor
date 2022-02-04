// GET MODULE CORE
import { MODULE } from './_module.mjs';

// IMPORT SETTINGS -> Settings Register on Hooks.Setup
import './_settings.mjs';

import { MIDICMA } from './module.mjs';

/* ─────────────── ⋆⋅☆⋅⋆ ─────────────── */
// 🧙 DEVELOPER MODE HOOKS -> devModeReady
/* ─────────────── ⋆⋅☆⋅⋆ ─────────────── */
Hooks.once('devModeReady', ({ registerPackageDebugFlag }) => {
    registerPackageDebugFlag(MODULE.ID, 'level', {
		choiceLabelOverrides: {
			0: 'NONE',
			1: 'ERROR',
			2: 'WARN',
			3: 'DEBUG',
			4: 'INFO',
			5: 'ALL'
		}
	});
});

/* ─────────────── ⋆⋅☆⋅⋆ ─────────────── */
// FOUNDRY HOOKS -> TESTING
/* ─────────────── ⋆⋅☆⋅⋆ ─────────────── */
Hooks.on('renderActorSheet5e', MIDICMA.renderActorSheet5e);