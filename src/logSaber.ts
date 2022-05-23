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

const colorsOptions = [COLORS.RED, COLORS.GREEN, COLORS.BLUE, COLORS.YELLOW, COLORS.CYAN, COLORS.MAGENTA, COLORS.WHITE];

export const helperText = `
${chalk.bgGray('   Here are the available light-saber colors:   ')}
${colorsOptions.map(color => `${chalk[color](color)}`).join(' ')}
`;

function logSaber(color: string | undefined) {
  color = color?.toLowerCase() || 'blue';

  if (!colorsOptions.includes(color as COLORS)) {
    console.log(chalk.bgRedBright(`   Sorry, we don't have a "${color}" light-saber   `));
    console.log(helperText);
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
