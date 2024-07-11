import { TconsoleTitle } from "./types";

class Graph<T> {
    private adjacencyList: Map<T, T[]> = new Map();

    addVertex(vertex: T): void {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1: T, vertex2: T): void {
        if (this.adjacencyList.has(vertex1)) {
            this.adjacencyList.get(vertex1)!.push(vertex2);
        }
        if (this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex2)!.push(vertex1);
        }
    }

    printGraph(): void {
        const keys = this.adjacencyList.keys();
        for (let key of keys) {
            const values = this.adjacencyList.get(key);
            let connections = "";
            if (values) {
                for (let value of values) {
                    connections += value + " ";
                }
            }
            console.log(`${key} -> ${connections}`);
        }
    }
}

/**
 * Un grafo es una colección de nodos y bordes que conectan pares de nodos. Los grafos pueden ser dirigidos o no dirigidos.
 */
export const expGraph = (consoleTitle: TconsoleTitle) => {
    consoleTitle("GRAPH")
    let graph: Graph<number> = new Graph();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.printGraph();
    // 1 -> 2 
    // 2 -> 1 3 
    // 3 -> 2 
}

