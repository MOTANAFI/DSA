class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;

    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  shift() {
    if(this.length === 0) return undefined;
    let temp = this.head;
    
    if(this.length == 1) {
        this.head = null;
        this.tail = null
    }

    this.head = this.head.next;
    this.head.prev = null;
    temp.next = null;
    this.length--;
    return temp;


  }
}

const myDoubleLinkedList = new DoublyLinkedList(0);
myDoubleLinkedList.push(1);
myDoubleLinkedList.push(2);
myDoubleLinkedList.push(3);
myDoubleLinkedList.shift()
// myDoubleLinkedList.unshift(100);
console.log(myDoubleLinkedList);
