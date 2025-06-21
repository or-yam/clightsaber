import { styleText } from "node:util";
import { starWars } from "./ascii.js";

export const header = styleText("yellowBright", starWars);
export const title = styleText(
	"blueBright",
	"\n a long time ago \n in a galaxy far, far away... \n",
);
