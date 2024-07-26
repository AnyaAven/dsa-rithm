import { Queue } from "./queue";

/** Node for a binary tree of numbers. */

class BNode<T> {
  val: T;
  lnode: BNode<T> | null;
  rnode: BNode<T> | null;

  constructor(
      val: T,
      left: BNode<T> | null = null,
      right: BNode<T> | null = null) {
    this.val = val;
    this.lnode = left;
    this.rnode = right;
  }
}
//<

/** Binary tree of numbers. */

class BinTree<T> {
  root: BNode<T> | null;

  constructor(root: BNode<T> | null = null) {
    this.root = root;
  }

  /** serialize(): Output string of a binary tree in BFS order:
   *
   *      a
   *   b     c
   *  d     e
   *
   *  would become "a b c d - e - - - - -"
   *
   *  This is useful for testing.
   **/

  serialize(): string {
    let queue = new Queue<BNode<T> | null>();
    let vals: string[] = [];

    if (this.root) queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      if (!node) {
        vals.push("-");
      } else {
        vals.push(String(node.val));
        queue.enqueue(node.lnode);
        queue.enqueue(node.rnode);
      }
    }

    return vals.join(" ");
  }
}

// Here are some convenience classes for common types; these are intended
// for students who don't know how to work with generic classes:

class BNodeNum extends BNode<number> { }
class BNodeStr extends BNode<string> { }

class BinTreeNum extends BinTree<number> { }
class BinTreeStr extends BinTree<string> { }


export { BNode, BinTree, BNodeNum, BNodeStr, BinTreeNum, BinTreeStr };