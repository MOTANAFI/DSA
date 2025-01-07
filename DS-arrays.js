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
    get(index){
        return this.data[index];
    }
}

const myNewArray = new MyArray();

myNewArray.push('apple');
myNewArray.push('banana');
myNewArray.push('mango');
console.log(myNewArray.get(0));
