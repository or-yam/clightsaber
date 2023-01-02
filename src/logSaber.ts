import cliProgress from 'cli-progress';
import chalk from 'chalk';
import { COLORS, colorsOptions } from './colors.js';

function logSaber(color: string | undefined) {
  color = color?.toLowerCase() || 'blue';

  if (color === 'random') {
    color = colorsOptions[Math.floor(Math.random() * colorsOptions.length)];
  }
  
  if (!colorsOptions.includes(color as COLORS)) {
    console.log(`
    ${chalk.bgRedBright(`   Sorry, we don't have a "${color}" light-saber   `)}
    
    ${chalk.bgGray('   Here are the available light-saber colors:   ')}
    ${colorsOptions.map(color => `${chalk[color](color)}`).join(' ')}
    `);
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
