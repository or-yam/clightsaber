import { program } from 'commander';

program
  .name('CLightsaber')
  .description('CLightsaber is a CLI tool to generate lightsabers')
  .argument('[color]', 'Color of lightsaber', 'blue');

program.parse(process.argv);

export default program;
