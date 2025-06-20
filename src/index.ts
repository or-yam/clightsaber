import { Command } from "commander";
import logSaber from "./logSaber.js";
import { fancyLog } from "./logText.js";
import { DEFAULT_COLOR, COLORS } from "./colors.js";
import { sleep } from "./utils.js";
import { header, title } from "./texts.js";

const program = new Command();
const packageJson = await import("../package.json", { with: { type: "json" } });

program
  .version(packageJson.default.version)
  .description("A light-saber for command line")
  .argument("[color]", "The color of the lightsaber", DEFAULT_COLOR)
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
  .action(async (color) => {
    console.log(title);
    fancyLog(header);
    await sleep();
    console.log("\n");
    logSaber(color);
  });

program.parse(process.argv);
