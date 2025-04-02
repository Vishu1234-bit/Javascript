/**
 * @param {Record<string, Array<string>} graph The adjacency list representing the graph.
 * @param {string} source The source node to start traversal from. It has to exist as a node in the graph.
 * @return {Array<string>} A DFS-traversed order of nodes.
 */
export default function depthFirstSearch(graph, source) {
  if(!graph || !graph[source]){
    return[];
  }
  let stack = [source];
  let visited = new Set();
  let result=[];
  while(stack.length>0){
    let node = stack.pop();
    if(!visited.has(node)){
      visited.add(node);
      result.push(node);
      for(let neighbour of [...graph[node]||[]].reverse()){
        if(!visited.has(neighbour)){
          stack.push(neighbour);
        }
      }
    }
  }
  return result;
}
