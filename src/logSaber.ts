import cliProgress from 'cli-progress';
import chalk from 'chalk';

enum COLORS {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
  YELLOW = 'yellow',
  CYAN = 'cyan',
  MAGENTA = 'magenta',
  WHITE = 'white'
}

const colorsOptions = new Set([
  COLORS.RED,
  COLORS.GREEN,
  COLORS.BLUE,
  COLORS.YELLOW,
  COLORS.CYAN,
  COLORS.MAGENTA,
  COLORS.WHITE
]);

function logSaber(color: string | undefined) {
  color = color?.toLowerCase() || 'blue';

  if (!colorsOptions.has(color as COLORS)) {
    console.log(chalk.bgRedBright(`The color "${color}" is not available`));
    process.exit(1);
  }

  const saber = new cliProgress.SingleBar({
    format: `==.=|${chalk[color as COLORS]('{bar})')}`,
    barCompleteChar: '\u2588',
    barIncompleteChar: ' ',
    hideCursor: true
  });

  const total = 100;
  let progress = 0;
  saber.start(100, 0);

  setInterval(() => {
    saber.update(++progress);
    if (progress === total) {
      saber.stop();
      process.exit(0);
    }
  }, 5);
}

export default logSaber;
