// GET MODULE CORE
import { MODULE } from './_module.mjs';

// DEFINE MODULE CLASS
export class MIDICMA {
	static renderActorSheet5e = (app, element, options) => {
		let $element = $(element);
		let $ac = $element.find('.attribute.armor');
		let attributes = (options?.actor?.system?.attributes ?? options?.actor?.data?.attributes) ?? false;

		// Check if Player is using Callenge Mode Armor Setting from Midi
		if (game.settings?.get('midi-qol', 'ConfigSettings')?.optionalRules?.challengeModeArmor ?? false) {
			if (app.options.classes.includes('tidy5e')) $ac = $element.find('.header-attribute.ac-display');
		
			if (attributes?.ac?.EC ?? false) {
				let $challengeArmor = $(`<ul id="${MODULE.ID}-display">
					<li><label>AC</label> <span class="attribute-value">${attributes.ac.value}</span></li>
					<li><label>EC</label> <span class="attribute-value">${attributes.ac.EC}</span></li>
					<li><label>AR</label> <span class="attribute-value">${attributes.ac.AR}</span></li>
					<li><label>Spell Save</label> <span class="attribute-value">${attributes.spelldc}</span></li>
				</ul>`);
				
				// Generate Tooltip On Actor Sheet Load
				$ac.find('.attribute-value.attributable').trigger('mouseover');

				// And New UI
				$ac.prepend($challengeArmor);
			}
		}
	}
}