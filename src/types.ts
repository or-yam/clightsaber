export type LogSaberOptions = {
  length: number;
  speed: number;
};

export type CliOptions = {
  [key in keyof LogSaberOptions]: string;
};
