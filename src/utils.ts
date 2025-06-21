import { setTimeout } from "node:timers/promises";

export const sleep = (ms = 500) => setTimeout(ms);
