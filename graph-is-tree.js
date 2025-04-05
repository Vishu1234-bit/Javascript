/**
 * @param {number} num
 * @param {Array<[number, number]>} edges
 * @return {boolean}
 */
export default function graphIsTree(num, edges) {
  if(edges.length!==num-1)return false;
  let visited = new Set();
  let result= [];
  let graph ={}
  edges?.forEach(([u,v])=>{
    if(!graph[u]){
      graph[u] = [];
    }
    if(!graph[v]){
      graph[v]=[];
    }
    graph[u].push(v);
    graph[v].push(u);
  })
  const dfs=(node,parent)=>{
      visited.add(node);
    for(let neighbours of graph[node]){
      if(!visited.has(neighbours)){
        if(!dfs(neighbours,node))return false;
      }else if(neighbours!==parent){
        return false;
      }
    }
    return true;
  }
  if(!dfs(0,-1))return false;
  return visited.size===num;

}
