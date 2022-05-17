import cliProgress from 'cli-progress';
import chalk from 'chalk';
// import chalkAnimation from 'chalk-animation';

const colorsOptions = new Set(['red', 'green', 'blue', 'yellow', 'cyan', 'magenta', 'white']);

function logSaber(color) {
  color = color?.toLowerCase() || 'blue';

  if (!colorsOptions.has(color)) {
    console.log(chalk.bgRedBright(`The color "${selectedColor}" is not available`));
    process.exit(1);
  }

  const colorFunction = chalk?.[color] || chalk.blue;

  const saber = new cliProgress.SingleBar({
    format: `==.=|${colorFunction('{bar})')}`,
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

export default logSaber;
