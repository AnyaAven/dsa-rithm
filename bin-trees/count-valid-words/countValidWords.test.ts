import {describe, it, expect} from "vitest";
import { BNodeStr, BinTreeStr } from "../common/bintree";
import { countValidWords} from "./countValidWords";

describe("#countValidWords", function () {
  it("counts stops early", function () {
    const node6 = new BNodeStr("excellent");
    const node5 = new BNodeStr("done");
    const node4 = new BNodeStr("nice", node5, node6);
    const node3 = new BNodeStr("yes", node4);
    const node2 = new BNodeStr("awesome", node3);
    const node1 = new BNodeStr("STOP", null, node2);
    expect(countValidWords(node1)).toEqual(0);
  });
  it("counts valid words early", function () {
    const node6 = new BNodeStr("excellent");
    const node5 = new BNodeStr("done");
    const node4 = new BNodeStr("STOP", node5, node6);
    const node3 = new BNodeStr("yes", node4);
    const node2 = new BNodeStr("awesome", node3);
    const node1 = new BNodeStr("awesome", null, node2);
    expect(countValidWords(node1)).toEqual(3);
  });
});
