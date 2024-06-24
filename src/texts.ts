import { styleText } from 'util';
import { COLORS } from './colors.js';

export const header = 'CLightsaber';
export const title = styleText('yellowBright', '\n a long time ago \n in a galaxy far, far away... \n');
export const helpText = `
      Optional colors:
      ${COLORS.map((color) => `${styleText(color, color)}`).join(' ')}

      Or you can use <random> to get a random color

      Example of usage:
       $ cliightsaber red
      `;
