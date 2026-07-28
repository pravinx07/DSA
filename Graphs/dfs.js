class Graph{
    constructor(){
     this.adjList = {}
    }

    addVertex(vertex){

        if(!this.adjList[vertex]){
            this.adjList[vertex] = []
        }
    }

    addEgde(v1,v2){
          this.adjList[v1].push(v2);
          this.adjList[v2].push(v1)
    }


    dfs(start){
        const visited = new Set();

        const dfsHelper = (vertex) => {
            visited.add(vertex)
            console.log(vertex);

            for(const neighbors of this.adjList[vertex]){
                if(!visited.has(neighbors)){
                    dfsHelper(neighbors)
                }
            }
            
        }
        dfsHelper(start)
    }
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")

graph.addEgde("A","B")
graph.addEgde("B","C")
graph.addEgde("B","D")

graph.dfs("A")