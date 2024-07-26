import { describe, expect, test } from "vitest";
import { sumLists } from "./sumLists.js";
import { LLNum } from "../common/ll.js";

describe("#sumLists", function () {
  test("it works on even sized lists", function () {
    const a = new LLNum([5, 6, 3]);
    const b = new LLNum([8, 4, 2]);
    expect(sumLists(a, b).toArray()).toEqual([3, 1, 6]);
  });

  test("it works on uneven sized lists", function () {
    const a = new LLNum([7, 5, 9, 4, 6]);
    const b = new LLNum([8, 4]);
    expect(sumLists(a, b).toArray()).toEqual([5, 0, 0, 5, 6]);
  });

  test("it carries over an extra one", function () {
    const a = new LLNum([9, 9, 9]);
    const b = new LLNum([1]);
    expect(sumLists(a, b).toArray()).toEqual([0, 0, 0, 1]);
  });

  test("it passes the sample case", function () {
    const a = new LLNum([4, 6, 3]);
    const b = new LLNum([7, 2, 1]);
    expect(sumLists(a, b).toArray()).toEqual([1, 9, 4]);
  });
});
