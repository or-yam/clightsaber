export const COLORS = [
  "red",
  "green",
  "blue",
  "yellow",
  "cyan",
  "magenta",
  "white",
] as const;
export type Color = (typeof COLORS)[number];

export const COLOR_OPTIONS = [...COLORS, "random"] as const;
export type ColorOption = (typeof COLOR_OPTIONS)[number];

export const DEFAULT_COLOR: Color = "blue";
