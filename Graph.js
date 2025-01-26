// A graph is a non-linear data structure that models relationships
// between objects. It consists of two main components Vertices (nodes)
// & Edges.

// Vertices - These represent the individual entities within the graph.

// Edges - These connect the vertices, signifying the relationship or connection
// between the vertices.

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
  }
  // connection

  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
      return true;
    }
    return false;
  }
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v2].filter((v) => v !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v1].filter((v) => v !== v1);
      return true;
    }
    return false;
  }
  removeVertex(v) {
    if (!this.adjacencyList[v]) return undefined;

    for (let neighbour of this.adjacencyList[v]) {
      this.adjacencyList[neighbour] = this.adjacencyList[neighbour].filter(
        (vertex) => vertex !== v
      );
    }

    delete this.adjacencyList[v];
    return this;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("A", "D");
g.addEdge("B", "D");
g.addEdge("C", "D");
console.log(g);
// g.removeEdge("A", "B");
g.removeVertex("D")
console.log(g);

