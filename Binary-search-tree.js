// BST (BINARY SEARCH TREE 

// A BST is a special kind of binary tree used to organize data in a sorted way.
// it works like a filling cabined were you can efficiently search, add or remove items.


class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;

    }
}

const tree = new BinarySearchTree();

console.log(tree);