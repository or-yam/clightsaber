import { styleText } from "node:util";
import { Command } from "commander";
import { darthVader, rebelAlliance } from "./ascii.js";
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
import { colorError, header, title } from "./texts.js";
import type { CliOptions, LogSaberOptions } from "./types.js";
import { exitWithError, sleep } from "./utils.js";

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
			exitWithError(colorError(color));
		}

		const speed = Math.min(parseInt(options.speed, 10), MAX_SPEED);
		const length = Math.min(parseInt(options.length, 10), MAX_LENGTH);

		if (Number.isNaN(speed) || speed <= 0) {
			exitWithError("Error: Speed must be a positive number.");
		}

		if (Number.isNaN(length) || length <= 0) {
			exitWithError("Error: Length must be a positive number.");
		}

		const logSaberOptions: LogSaberOptions = {
			length,
			speed,
		};

		console.log(title);
		console.log(header);
		await sleep();
		await logSaber(color, logSaberOptions);
		if (color === "red") {
			console.log(darthVader);
		}
		if (color === "blue") {
			console.log(styleText("redBright", rebelAlliance));
		}
		process.exit(0);
	});

program.parse(process.argv);
