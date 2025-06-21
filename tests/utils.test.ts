import { describe, it, expect } from "vitest";
import { sleep } from "../src/utils.js";

describe("sleep", () => {
  it("should resolve after the specified time", async () => {
    const start = Date.now();
    await sleep(10);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(10);
  });
});
