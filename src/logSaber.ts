import { styleText } from "node:util";
import cliProgress from "cli-progress";
import { COLORS, Color } from "./colors.js";

const HILT = "▐▍░▐░░▣░▒░▒░▒▕|";
const LIGHT_BAR = "\u2588";
const LIGHT_END = ")";

function logSaber(color: string) {
  if (color === "random") {
    color = COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  console.log("\n");

  if (!(COLORS as unknown as string[]).includes(color)) {
    console.log(`
    ${styleText(
      "bgRedBright",
      `   Sorry, we don't have a "${color}" light-saber   `
    )}

    ${styleText("bgGray", "   Here are the available light-saber colors:   ")}
    ${COLORS.map((color) => `${styleText(color, color)}`).join(" ")}
    `);
    process.exit(1);
  }

  const saber = new cliProgress.SingleBar({
    format: `${HILT}${styleText([color as Color], "{bar}")}`,
    barCompleteChar: LIGHT_BAR,
    barIncompleteChar: " ",
    barGlue: LIGHT_END,
    hideCursor: true,
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
