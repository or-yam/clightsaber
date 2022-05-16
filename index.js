#!/usr/bin/env node
import logSaber from './logSaber.js';
import program from './program.js';
import logText from './logText.js';

const sleep = (ms = 500) => new Promise(r => setTimeout(r, ms));

const [selectedColor] = program.args;

logText('CLightsaber');
await sleep();
logSaber(selectedColor);
