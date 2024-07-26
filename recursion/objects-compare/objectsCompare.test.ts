import { beforeAll, describe, it, expect } from "vitest";
import { objectsCompare } from "./objectsCompare";

describe("#objectsCompare", function () {
  beforeAll(function () {
    JSON.stringify = () => { throw new Error("Do not use JSON.stringify")};
  });

  it("works for single-nested", function () {
    const l = { a: { 1: "hi" }, b: [2] };
    const m = { a: { 1: "hi" }, b: [2, 3] };
    expect(objectsCompare(l, m)).toEqual(false);
  });

  it("compares nested objects etc", function () {
    const a = { 1: [1, 2, 3, [4, { a: [1] }]] };
    const b = { 1: [1, 2, 3, [4, { a: [1] }]] };
    expect(objectsCompare(a, b)).toEqual(true);

    const c = { 1: [1, 3, 2, [4, { a: [1] }]] };
    const d = { 1: [1, 2, 3, [4, { a: [1] }]] };
    expect(objectsCompare(c, d)).toEqual(false);

    const e = { 1: [1, 2, 3, [4, { a: [1, 2] }]] };
    const f = { 1: [1, 2, 3, [4, { a: [1] }]] };
    expect(objectsCompare(e, f)).toEqual(false);

    const g = { 1: [{ 1: 1 }, 2, 3, [4, { a: [1, 2] }]] };
    const h = { 1: [1, 2, 3, [4, { a: [1] }]] };
    expect(objectsCompare(g, h)).toEqual(false);

    const i = [{ a: 1 }, 2, 3, [{ a: 1 }]];
    const j = [{ a: 1 }, 2, 3, [{ a: 1 }]];
    expect(objectsCompare(i, j)).toEqual(true);

    const k = [{ a: 1 }, 2, 3, [{ a: 1 }]];
    const l = [{ a: 1 }, 2, 3, [{ a: 1, b: 2 }]];
    expect(objectsCompare(k, l)).toEqual(false);

    const m = [
      {
        a: 1,
        b: [{ c: 2, g: [3, 4, { d: 6, f: 7 }] }],
        g: [2, 3, [{ a: 1 }]]
      },
    ];
    const n = [
      {
        a: 1,
        b: [{ c: 2, g: [3, 4, { d: 6, f: 7 }] }],
        g: [2, 3, [{ a: 1 }]]
      },
    ];
    expect(objectsCompare(m, n)).toEqual(true);

    const o = [
      {
        a: 1,
        b: [{ c: 2, g: [3, 4, { d: 6, f: 7 }] }],
        g: [2, 3, [{ a: 1 }]],
      },
    ];
    const p = [
      {
        a: 1,
        b: [{ c: 2, g: [3, 4, { d: 6, f: 7 }, 1] }],
        g: [2, 3, [{ a: 1 }]],
      },
    ];
    expect(objectsCompare(o, p)).toEqual(false);

    const q = [
      {
        a: 1,
        b: [{ c: 2, g: [3, 4, { d: 6, f: 7 }] }],
        g: [2, 3, [{ a: 1 }]],
      },
    ];
    const r = [
      {
        a: 1,
        b: [{ c: 2, g: [3, 4, { d: 6, f: 7 }] }],
        g: [2, 3, [{ a: 1, b: 2 }]],
      },
    ];
    expect(objectsCompare(q, r)).toEqual(false);

    const s = {
      a: 1,
      b: { 1: 1, 2: [{ c: 2, g: [3, 4, { d: 6, f: 7 }] }] },
      g: [2, 3, [{ a: 1 }]],
      h: 1,
    };
    const t = {
      a: 1,
      b: { 1: 1, 2: [{ c: 2, g: [3, 4, { d: 6, f: 7 }] }] },
      g: [2, 3, [{ a: 1 }]],
      h: 1,
    };
    expect(objectsCompare(s, t)).toEqual(true);

    const u = {
      a: 1,
      b: { 1: 1, 2: [{ c: 2, g: [3, 4, { d: 6, f: 7 }] }] },
      g: [2, 3, [{ a: 1 }]],
      h: 1,
    };
    const v = {
      a: 1,
      b: { 1: 1, 2: [{ c: 2, g: [3, 4, { d: 6, f: 7 }] }] },
      g: [2, 3, [{ a: 1 }]],
      h: 1,
      i: 2,
    };
    expect(objectsCompare(u, v)).toEqual(false);

    const w = {a: {a: 1}, b: {b: 2}};
    const x = {a: {a: 1}, b: {b: 3}};
    expect(objectsCompare(w,x)).toEqual(false);
  });
});
