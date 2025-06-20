import { Command } from "commander";
import { styleText } from "node:util";
import logSaber from "./logSaber.js";
import { fancyLog } from "./logText.js";
import { DEFAULT_COLOR, COLORS, ColorOption, COLOR_OPTIONS } from "./colors.js";
import { sleep } from "./utils.js";
import { header, title } from "./texts.js";

const program = new Command();
const packageJson = await import("../package.json", { with: { type: "json" } });

program
  .version(packageJson.default.version)
  .description("A light-saber for command line")
  .argument(
    "[color]",
    "The color of the lightsaber",
    (value) => value.toLowerCase(),
    DEFAULT_COLOR
  )
  .addHelpText(
    "after",
    `
Examples:
  $ clightsaber red
  $ clightsaber random

Available colors:
  ${COLORS.join(", ")}
`
  )
  .action(async (color: ColorOption) => {
    if (!COLOR_OPTIONS.includes(color)) {
      console.error(
        `
    ${styleText(
      "bgRedBright",
      `   Sorry, we don't have a "${color}" light-saber   `
    )}

    ${styleText("bgGray", "   Here are the available light-saber colors:   ")}
    ${COLORS.map((color) => `${styleText(color, color)}`).join(" ")}

    You can also use 'random' to get a random color.
    `
      );
      process.exit(1);
    }

    console.log(title);
    fancyLog(header);
    await sleep();
    console.log("\n");
    await logSaber(color);
    process.exit(0);
  });

program.parse(process.argv);
