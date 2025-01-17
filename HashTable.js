// Hash Table
// Data structure used to store key-value pair

//HASH FUNCTION
// Hash function acts like a translater, taking an input of any ize(key)
// and converting it into a fixed-size value (hash code)
// that can be used as an index within the hash table's
//internal array. This process of mapping arbitary keys
// to fixed-length indices is calledd hashing

//INPUT => You feed any kind of data into the hash function, like your name,
// a sentence, or a whole file

//Hashing Process => The function performs a series of mathematical operations on the input
// data, essentially scrambling it up in a unique wat

// Fiexed0siz output => Regardless of the input size, the hash function always spits out
// afixed-size value, like a short sitting of charactes or a number

class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  _hashFunction(key) {
    let sum = 0;
    const PRIME_NUMBER = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const charCode = key.charCodeAt(0) - 96;
      sum = (sum * PRIME_NUMBER + charCode) % charCode;
    }
    return sum;
  }

  set(key, value) {
    const index = this._hashFunction(key);
   
    // console.log(!this.keyMap[index]) 
    if(!this.keyMap[index]) this.keyMap = [];
    this.keyMap[index].push([key, value])
    return this;

  }
}

const phoneBook = new HashTable();
phoneBook.set("john", "555-333-444");
