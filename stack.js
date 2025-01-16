// What is a stack
// A stack is a fundamental data structure in computer science
// that follows the Last In, First Out (LIFO) principle.
//
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.lenght = 1;
  }
}

let theStack = new Stack(0);

console.log(theStack);
