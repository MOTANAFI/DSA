// Hash Table
// Data structure used to store key-value pair

//HASH FUNCTION
// Hash function acts like a translater, taking an input of any size(key)
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
      const charCode = key.charCodeAt(i) - 96;
      sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
    }
    return sum;
  }

  set(key, value) {
    const index = this._hashFunction(key);

    // console.log(!this.keyMap[index])
    if (!this.keyMap[index]) this.keyMap[index] = [];

    this.keyMap[index].push([key, value]);
    return this;
  }
  get(key) {
    const index = this._hashFunction(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  getAllKeys() {
    const keys = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }
  getAllValue() {
    const values = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          values.push(this.keyMap[i][j][1]);
        }
      }
    }
    return values;
  }
}

const phoneBook = new HashTable();
phoneBook.set("john", "555-333-444");
phoneBook.set("lakeer", "555-333-444");
phoneBook.set("jonny", "555-333-444");
phoneBook.set("hanu", '9848-484-498');
console.log(phoneBook.getAllKeys());
console.log(phoneBook.getAllValue());
