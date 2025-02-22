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

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }
  shift() {
    if (!this.head) return undefined;
    //1. Point the first ndoe/element
    let temp = this.head;
    //2. Move the head to the next node
    this.head = this.head.next;
    //3. remove first element
    this.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  // linked list get fist method
  getFirst() {
    this.head;
  }

  // get the last element in the linked list
  getLast() {
    let temp = thid.head;
    while (temp) {
      if (!temp.next) {
        return temp;
      }
      temp = temp.next;
    }
  }

  get(indext) {
    let counter = 0;
    let temp = this.head;
    while (temp) {
      if (counter === indext) {
        return temp;
      }

      counter++;

      temp = temp.next;
    }
    return null;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value)  {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);

    const newNode = new Node(value);
    //get the before element
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  size() {
   let counter = 0;
   let temp = this.head;

   while(temp){
    counter++;
    temp = temp.next
   }
   return counter
  }

  clear() {
    this.head = null;
    // this.tail = null;
    // this.length = 0;
  }
}

const myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
// myLinkedList.pop();
// myLinkedList.unshift(0);
// myLinkedList.shift();
// myLinkedList.getFirst();

// console.log(myLinkedList.get(2));
// console.log(myLinkedList.set(3,10));
// console.log(myLinkedList.insert(0, 20));
// console.log(myLinkedList.size());
console.log(myLinkedList.clear());
