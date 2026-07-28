class Graph {
  constructor() {
    this.adjList = {};
  }

  // Add new vertex
  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  // add an undeiected egde
//   addEdge(v1, v2) {
//     this.adjList[v1].push(v2);
//     this.adjList[v2].push(v1);
//   }

// for Directed Graph
addEdge(from , to){
    this.adjList[from].push(to)
}

  printGraph() {
    for (let vertex in this.adjList) {
      console.log(`${vertex} --> ${this.adjList[vertex].join(", ")}`);
    }
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

graph.printGraph();
