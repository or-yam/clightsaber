import { setTimeout } from "node:timers/promises";

export const sleep = (ms = 500) => setTimeout(ms);
export const exitWithError = (message: string) => {
	console.error(message);
	process.exit(1);
};
