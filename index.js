#!/usr/bin/env node
import { program } from 'commander';
import cliProgress from 'cli-progress';
import chalk from 'chalk';
// import chalkAnimation from 'chalk-animation';

const colorsOptions = new Set(['red', 'green', 'blue', 'yellow', 'cyan', 'magenta', 'white']);

program
  .name('CLightsaber')
  .description('CLightsaber is a CLI tool to generate lightsabers')
  .argument('[color]', 'Color of lightsaber', 'blue');

program.parse(process.argv);
const [selectedColor] = program.args;

function logSaber(color) {
  color = color.toLowerCase() || 'blue';

  if (!colorsOptions.has(color)) {
    console.log(chalk.bgRedBright(`The color "${selectedColor}" is not available`));
    process.exit(1);
  }

  const saber = new cliProgress.SingleBar({
    format: `==|${chalk[color || 'blue']('{bar})')}`,
    barCompleteChar: '\u2588',
    barIncompleteChar: ' ',
    hideCursor: true
  });

  saber.start(100, 0);

  setInterval(() => {
    saber.update(++saber.value);
    if (saber.value >= saber.total) {
      saber.stop();
      process.exit(0);
    }
  }, 5);
}

logSaber(selectedColor);
