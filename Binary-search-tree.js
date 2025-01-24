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
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;

    while (true) {
      if (value === temp.value) return undefined;
      if (value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
  // Includes method
  includes(value) {
    if (!this.root) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else if (value === temp.value) {
        return true;
      }
    }
    return false;
  }

  // Breadth First Search
  bfs() {
    let current = this.root;
    let queue = [];
    let data = [];

    queue.push(current);
    while (queue.length) {
      current = queue.shift();

      data.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return data;
  }
  // Depth First Search preOrder
  dfsPreOrder(node = this.root, data = []) {
    if (node === null) return data;
    console.log("-----", data);
    data.push(node.value);

    if (node.left) this.dfsPreOrder(node.left, data);
    if (node.right) this.dfsPreOrder(node.right, data);
    return data;
  }
  // Depth First Search postOrder
  dfsPostOrder(node = this.root, data = []) {
    if (node === null) return data;
    // console.log('-----', data)

    if (node.left) this.dfsPostOrder(node.left, data);
    if (node.right) this.dfsPostOrder(node.right, data);
    data.push(node.value);
    return data;
  }
  // Depth first search inOrder
  dfsInOrder(node = this.root, data = []) {
    if (node === null) return data;
    // console.log('-----', data)

    if (node.left) this.dfsInOrder(node.left, data);
    data.push(node.value);
    if (node.right) this.dfsInOrder(node.right, data);
    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);
// console.log(tree);
// console.log(tree.includes(9));
// console.log(tree.bfs());
// console.log(tree.dfsPreOrder());
// console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());
