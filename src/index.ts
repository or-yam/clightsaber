import { styleText } from "node:util";
import { Command } from "commander";
import {
	COLOR_OPTIONS,
	COLORS,
	type ColorOption,
	DEFAULT_COLOR,
} from "./colors.js";
import {
	DEFAULT_LENGTH,
	DEFAULT_SPEED,
	MAX_LENGTH,
	MAX_SPEED,
} from "./config.js";
import logSaber from "./logSaber.js";
import { fancyLog } from "./logText.js";
import { header, title } from "./texts.js";
import type { CliOptions, LogSaberOptions } from "./types.js";
import { sleep } from "./utils.js";

const program = new Command();
const packageJson = await import("../package.json", { with: { type: "json" } });

program
	.version(packageJson.default.version)
	.description("A light-saber for command line")
	.argument(
		"[color]",
		"The color of the lightsaber",
		(value) => value.toLowerCase(),
		DEFAULT_COLOR,
	)
	.option(
		"-s, --speed <value>",
		"Animation speed in milliseconds",
		`${DEFAULT_SPEED}`,
	)
	.option(
		"-l, --length <value>",
		"Length of the lightsaber",
		`${DEFAULT_LENGTH}`,
	)
	.addHelpText(
		"after",
		`
Examples:
  $ clightsaber red --speed 10 --length 150
  $ clightsaber random

Available colors:
  ${COLORS.join(", ")}
`,
	)
	.action(async (color: ColorOption, options: CliOptions) => {
		if (!COLOR_OPTIONS.includes(color)) {
			console.error(
				`
    ${styleText(
			"bgRedBright",
			`   Sorry, we don't have a "${color}" light-saber   `,
		)}

    ${styleText("bgGray", "   Here are the available light-saber colors:   ")}
    ${COLORS.map((color) => `${styleText(color, color)}`).join(" ")}

    You can also use 'random' to get a random color.
    `,
			);
			process.exit(1);
		}

		const speed = Math.min(parseInt(options.speed, 10), MAX_SPEED);
		const length = Math.min(parseInt(options.length, 10), MAX_LENGTH);

		if (Number.isNaN(speed) || speed <= 0) {
			console.error("Error: Speed must be a positive number.");
			process.exit(1);
		}

		if (Number.isNaN(length) || length <= 0) {
			console.error("Error: Length must be a positive number.");
			process.exit(1);
		}

		const logSaberOptions: LogSaberOptions = {
			length,
			speed,
		};

		console.log(title);
		fancyLog(header);
		await sleep();
		console.log("\n");
		await logSaber(color, logSaberOptions);
		process.exit(0);
	});

program.parse(process.argv);
