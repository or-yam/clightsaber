export const COLORS = ['red', 'green', 'blue', 'yellow', 'cyan', 'magenta', 'white'] as const;
export type Color = (typeof COLORS)[number];

export const DEFAULT_COLOR: Color = 'blue';
