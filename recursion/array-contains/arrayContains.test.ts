import { describe, expect, it } from "vitest";
import { arrayContains } from "./arrayContains";

describe("#arrayContains", function () {
  it("compares nested objects etc", function () {
    expect(arrayContains([1, 2, 3, 7, 9], 7)).toBe(true);
    expect(arrayContains([1, 2, 3, 9], 7)).toBe(false);
    expect(arrayContains([1, [1, [1, 7], 1]], 7)).toBe(true);
    expect(arrayContains([1, [1, 2, [1, 2]]], 7)).toBe(false);
  });
});
