//What is queue

// A queue is a linear data structure that function like a waiting line.
// it follows the FIFO (First In, First Out) priciple, meaning
// the element that enters the queue first will be the first one to be removed

// Enqueue

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  //enqueue
  enqueue(value) {
    const newNode = new Node(value);
    if(this.length === 0){
        this.first = newNode;
        this.last = newNode;
    }

    this.last.next = newNode;
    this.last = newNode;
    this.length++
    return this
  }
  // dequeue
  dequeue(){
    if(this.length === 0) return undefined;
    let temp = this.first;
    if(this.length === 1) {
        this.first = null;
        this.last = null
    }

    this.first = this.first.next
    temp.next= null;
    this.length--
    return temp
  }
}

let myQueue = new Queue(0);
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.dequeue()

console.log(myQueue)
