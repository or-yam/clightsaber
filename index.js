#!/usr/bin/env node
import chalk from 'chalk';
import logSaber from './logSaber.js';
import program from './program.js';
import logText from './logText.js';

const sleep = (ms = 500) => new Promise(r => setTimeout(r, ms));

const [selectedColor] = program.args;

console.log(chalk.blueBright('\n a long time ago \n in a galaxy far, far away... \n'));
logText('CLightsaber');
await sleep();
console.log('\n');
logSaber(selectedColor);
