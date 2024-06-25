import logSaber from './logSaber.js';
import { fancyLog } from './logText.js';
import { DEFAULT_COLOR } from './colors.js';
import { sleep } from './utils.js';
import { header, helpText, title } from './texts.js';

const selectedColor = process.argv[2] || DEFAULT_COLOR;
const helpFlag = process.argv.includes('--help');

async function main() {
  if (helpFlag) {
    console.log(helpText);
    process.exit(0);
  }

  console.log(title);
  fancyLog(header);
  await sleep();
  console.log('\n');
  logSaber(selectedColor);
}

main();
