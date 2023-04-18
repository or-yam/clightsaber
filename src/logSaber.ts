import cliProgress from 'cli-progress';
import chalk from 'chalk';
import { COLORS, Color } from './colors.js';

const HILT = '▐▍░▐░░▣░▒░▒░▒▕|';
const LIGHT_BAR = '\u2588';
const LIGHT_END = ')';

function logSaber(color: string | undefined) {
  color = color?.toLowerCase() || 'blue';

  if (color === 'random') {
    color = COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  if (!(COLORS as unknown as string[]).includes(color)) {
    console.log(`
    ${chalk.bgRedBright(`   Sorry, we don't have a "${color}" light-saber   `)}
    
    ${chalk.bgGray('   Here are the available light-saber colors:   ')}
    ${COLORS.map(color => `${chalk[color](color)}`).join(' ')}
    `);
    process.exit(1);
  }

  const saber = new cliProgress.SingleBar({
    format: `${HILT}${chalk[color as Color]('{bar}')}`,
    barCompleteChar: LIGHT_BAR,
    barIncompleteChar: ' ',
    barGlue: LIGHT_END,
    hideCursor: true
  });

  const total = 100;
  let progress = 0;
  saber.start(total, 0);

  setInterval(() => {
    saber.update(++progress);
    if (progress === total) {
      saber.stop();
      process.exit(0);
    }
  }, 5);
}

export default logSaber;
