class WeightedGraph{
    constructor(){
          this.adjList = {}
    }

    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = [];
        }
    }

    addEdge(v1,v2,weight){
        this.adjList[v1].push({
            node:v2,
            weight: weight
        })

        this.adjList[v2].push({
            node:v1,
            weight:weight
        })
    }

    printGraph(){
        for (let vertex in this.adjList){
            const neighbors = this.adjList[vertex].map(
                edge => `(${edge.node}, ${edge.weight})`
            ).join(" ");

            console.log(`${vertex} --> ${neighbors}`);
            
        }
    }
}


const graph = new WeightedGraph();

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")

graph.addEdge("A","B", 4)
graph.addEdge("A","C", 2)
graph.addEdge("B","D", 7)
graph.addEdge("C","D", 10)

graph.printGraph()
