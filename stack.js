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
    this.length = 1;
  }

  push(value){
   const newNode =  new Node(value);
   if(this.length === 0) {
    this.first = newNode;
   }

   newNode.next = this.first;
   this.first = newNode;
   this.length++

   return this

  }

  min() {
    if(this.length === 0) return undefined;
    let current = this.first;
    let minValue = current.value;

    while(current) {
      current = current.value;

      if(current.value < minValue){
        console.log(current.value, minValue)
        minValue = current.value;
      }
      current = current.next;
    }
    return minValue
  }



  pop() {
    if(this.length === 0) return undefined;

    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--
    return temp;
  }
}

let theStack = new Stack(100);
theStack.push(1)
theStack.push(2)
// theStack.pop()

console.log(theStack.min());
