import { styleText } from "node:util";
import { starWars } from "./ascii.js";
import { COLORS } from "./colors.js";

export const header = styleText("yellowBright", starWars);
export const title = styleText(
	"blueBright",
	"\n a long time ago \n in a galaxy far, far away... \n",
);
export const colorError = (color: string) => `
    ${styleText(
			"bgRedBright",
			`   Sorry, we don't have a "${color}" light-saber   `,
		)}

    ${styleText("bgGray", "   Here are the available light-saber colors:   ")}
    ${COLORS.map((color) => `${styleText(color, color)}`).join(" ")}

    You can also use 'random' to get a random color.
    `;
