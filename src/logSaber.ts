import { styleText } from "node:util";
import cliProgress from "cli-progress";
import { COLORS, Color, ColorOption } from "./colors.js";

const HILT = "▐▍░▐░░▣░▒░▒░▒▕|";
const LIGHT_BAR = "\u2588";
const LIGHT_END = ")";

function logSaber(color: ColorOption): Promise<void> {
  return new Promise((resolve) => {
    let saberColor: Color;
    if (color === "random") {
      saberColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    } else {
      saberColor = color;
    }

    console.log("\n");

    const saber = new cliProgress.SingleBar({
      format: `${HILT}${styleText(saberColor, "{bar}")}`,
      barCompleteChar: LIGHT_BAR,
      barIncompleteChar: " ",
      barGlue: LIGHT_END,
      hideCursor: true,
    });

    const total = 100;
    let progress = 0;
    saber.start(total, 0);

    const timer = setInterval(() => {
      saber.update(++progress);
      if (progress === total) {
        saber.stop();
        clearInterval(timer);
        resolve();
      }
    }, 5);
  });
}

export default logSaber;
