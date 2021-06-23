/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let nn = new Node(val);

    if (!this.first) {
      this.first = nn;
      this.last = nn;
    } else {
      this.last.next = nn;
      this.last = nn; 
    }
    this.size += 1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.first) throw new Error('que is currently empty');
    
    let fin = this.first;
    if (this.first === this.last) {
      this.last = null;
    } 
    this.first = this.first.next
    // don't forget to shrink size
    this.size -= 1
    return fin.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (!this.first) {throw new Error('que is currently empty');
  } else {
        return this.first.val;
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (!this.first && this.size === 0) {return true;
    } else {
      return false;
    }
  }
}

module.exports = Queue;
