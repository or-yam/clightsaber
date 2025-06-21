import cliProgress from "cli-progress";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import logSaber from "../src/logSaber.js";

const mockStart = vi.fn();
const mockUpdate = vi.fn();
const mockStop = vi.fn();

vi.mock("cli-progress", () => ({
	default: {
		SingleBar: vi.fn(() => ({
			start: mockStart,
			update: mockUpdate,
			stop: mockStop,
		})),
	},
}));

describe("logSaber", () => {
	beforeEach(() => {
		vi.useFakeTimers();
		mockStart.mockClear();
		mockUpdate.mockClear();
		mockStop.mockClear();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it("should initialize the progress bar with the correct parameters", async () => {
		const options = { length: 150, speed: 1 };

		const logSaberPromise = logSaber("blue", options);
		vi.runAllTimers();
		await logSaberPromise;

		expect(cliProgress.SingleBar).toHaveBeenCalledWith(
			expect.objectContaining({
				barsize: options.length,
			}),
		);

		expect(mockStart).toHaveBeenCalledWith(100, 0);
	});
});
