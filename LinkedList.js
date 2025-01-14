// Linked List
// A linked list is a linear data structure where elemenst,
// called nodes, are not stored congtiguously in memory.
// instaed, each node contains data and a reference, or link,
// to the next node in the sequence.

class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;

    this.length = 1;
  }
  push(value) {
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(10);
myLinkedList.pop();

console.log(myLinkedList);
