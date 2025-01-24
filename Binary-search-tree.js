// BST (BINARY SEARCH TREE

// A BST is a special kind of binary tree used to organize data in a sorted way.
// it works like a filling cabined were you can efficiently search, add or remove items.


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;

    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        
    }
    insert (value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } 
        let temp = this.root;

        while(true) {
            if(value === temp.value) return undefined;
            if(value < temp.value) {
                if(temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if(temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;

        }
    }
}
}

const tree = new BinarySearchTree();
tree.insert(5)
tree.insert(7)
tree.insert(2)
tree.insert(8)
tree.insert(9)

console.log(tree);