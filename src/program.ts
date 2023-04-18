import { program } from 'commander';
import chalk from 'chalk';
import { COLORS } from './colors.js';

program
  .name('CLightsaber')
  .description('CLightsaber is a CLI tool to generate lightsabers')
  .argument('[color]', 'Color of lightsaber', 'blue');

program.addHelpText(
  'after',
  `
  Optional colors:
  ${COLORS.map(color => `${chalk[color](color)}`).join(' ')}

  Or you can use <random> to get a random color

  Example of usage:
   $ cliightsaber red
  `
);

program.showHelpAfterError('There was a disturbance in the force.');
program.showSuggestionAfterError();

program.parse(process.argv);

export default program;
