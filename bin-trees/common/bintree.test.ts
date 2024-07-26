import { BinTreeNum, BNodeNum } from "./bintree";
import { expect, it } from "vitest";

//              6
//            /   \
//           5     5
//
const smallTree = new BinTreeNum(
    new BNodeNum(6, new BNodeNum(5), new BNodeNum(5)));

//                   6
//                /     \
//               5       5
//                    /     \
//                   3       1
//                 /   \
//                2     1
//
const largeTree = new BinTreeNum(
    new BNodeNum(6,
        new BNodeNum(5),
        new BNodeNum(5,
            new BNodeNum(3,
                new BNodeNum(2),
                new BNodeNum(1)),
            new BNodeNum(1))));

//                   6
//                /     \
//               5       5
//              /         \
//             4           3
//            /          /  \
//           3          2    1
//         /   \       /
//        2     1     1
//
const longTree = new BinTreeNum(
    new BNodeNum(6,
        new BNodeNum(5,
            new BNodeNum(4,
                new BNodeNum(3,
                    new BNodeNum(2),
                    new BNodeNum(1)))),
        new BNodeNum(5,
            null,
            new BNodeNum(3,
                new BNodeNum(2,
                    new BNodeNum(1)),
                new BNodeNum(1)))));

//                   6
//                /     \
//               5       5
//              / \     /  \
//             4   55  0    3
//            / \          /  \
//           3   44      2     1
//         /   \        /
//        2     1      1
//
const denseTree = new BinTreeNum(
    new BNodeNum(6,
        new BNodeNum(5,
            new BNodeNum(4,
                new BNodeNum(3,
                    new BNodeNum(2),
                    new BNodeNum(1)),
                new BNodeNum(44),
            ),
            new BNodeNum(55),
        ),
        new BNodeNum(5,
            new BNodeNum(0),
            new BNodeNum(3,
                new BNodeNum(2,
                    new BNodeNum(1)),
                new BNodeNum(1)))));


it("builds trees", function () {
  expect(smallTree.root!.val).toBe(6);
  expect(largeTree.root!.val).toBe(6);
  expect(longTree.root!.val).toBe(6);
});

it("serializes", function () {
  expect(new BinTreeNum().serialize()).toBe("");
  expect(new BinTreeNum(new BNodeNum(5)).serialize()).toBe("5 - -");

  expect(smallTree.serialize()).toBe("6 5 5 - - - -");
  expect(largeTree.serialize()).toBe("6 5 5 - - 3 1 2 1 - - - - - -");
  expect(longTree.serialize()).toBe(
      "6 5 5 4 - - 3 3 - 2 1 2 1 1 - - - - - - - - -");
});


export { smallTree, largeTree, longTree, denseTree };