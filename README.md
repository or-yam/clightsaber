# <center> <img alt="lightsabers" src="https://github.com/or-yam/clightsaber/raw/main/.github/lightsabers.png" width="50" height="50"/> CLIghtsaber </center>

## Fun (useless) cli tool that prints light-saber in your terminal

![Demo animation](https://github.com/or-yam/clightsaber/raw/main/.github/demo-animation.gif)

[![npm](https://img.shields.io/npm/v/clightsaber?logo=npm&label=version)](https://www.npmjs.com/package/clightsaber)
[![npm](https://img.shields.io/npm/dw/clightsaber?label=npm)](https://www.npmjs.com/package/clightsaber)

### This project aims to follow [Node.js CLI Apps Best Practices](https://github.com/lirantal/nodejs-cli-apps-best-practices)

---

## Usage

You can run the command directly using `npx`:

```shell
npx clightsaber [color] [options]
```

For example:

```shell
npx clightsaber red --length 50 --speed 5
```

You can also install it globally:

```shell
npm i -g clightsaber
```

Then run:

```shell
clightsaber [color] [options]
```

## Arguments and Options

| Name                | Description                                | Default  |
| ------------------- | ------------------------------------------ | -------- |
| `color` (argument)  | Sets the color of the lightsaber blade.    | `blue`   |
| `--length, -l`      | Sets the length of the lightsaber blade.   | `100`    |
| `--speed, -s`       | Sets the animation speed in milliseconds.  | `20`     |
| `--help, -h`        | Displays the help screen.                  |          |

### Available Colors

- Red
- Green
- Blue
- Yellow
- Cyan
- Magenta
- White
- Random

> The color input is case-insensitive. If you provide a color that doesn't exist, an error message with available colors will be shown.
