/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let nn = new Node(val);

    if (!this.first) {
      this.first = nn;
      this.last = nn;
    } else {
      // make sure to add from top not bottom
      rep = this.first;
      this.first == nn;
      this.first.next = rep
    }
    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first) throw new Error('que is currently empty');

    let rep = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size -= 1;
    return rep.val
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (!this.first) {throw new Error('que is currently empty');
  } else {
        return this.first.val;
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (!this.first && this.size === 0) {return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;
