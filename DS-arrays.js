// Arrays
// Data structures array is a an ordered collection of elements that can be accessed using a numerical index
// const boolArr = [true, false];
// const mixed = ['a', 2, true, undefined, null, { a:'a',}, ["b"]];
// console.log(mixed);

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;

    }
    // get method
    get(index){
        return this.data[index];
    }
    // pop method
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    shift(){
        const firstItem = this.data[0];
        // delete this.data[0];
        // this.length--;
        // return firstItem;
        for (let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        } 
        delete this.data[this.length - 1];
        this.length--;
        return firstItem
    }
}

const myNewArray = new MyArray();

myNewArray.push('apple');
myNewArray.push('banana');
myNewArray.push('mango');
console.log(myNewArray.pop());
console.log(myNewArray.shift());
console.log(myNewArray);
