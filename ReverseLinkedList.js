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

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;

      temp = next;
    }
  }
}

const myLinkedList = new LinkedList(1);

myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.reverse();

console.log(myLinkedList)
