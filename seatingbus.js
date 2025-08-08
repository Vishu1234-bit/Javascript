function violations(seatings){
    rows = seatings.length;
    cols = rows?seatings[0].length:0;
    const neighbours = (r,c) =>{
        const adjacents=[];
        if(c-1>=0) adjacents.push([r,c-1]);
        if(c+1<cols) adjacents.push([r,c+1]);
        if(r-1>=0) adjacents.push([r-1,c]);
        if(r+1<rows)adjacents.push([r+1,c]);
        return adjacents;
    }
    const violations = [];
    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            const currentseat = seatings[r][c];
            if(currentseat!=='M'&&currentseat!=='F') continue;
            for(const [nr,nc] of neighbours(r,c)){
                neighbour = seatings[nr][nc];
                if((currentseat=='M' && neighbour=='F') ||(currentseat=='F' && neighbour=='M'))
                violations.push({seat:[r,c],neighbour:[nr,nc]})
            }
        }
    }
    const unique=[]
    const seen = new Set();
    for(const v of violations){
        const key = `${v.seat}-${v.neighbour}`;
        const revKey = `${v.neighbour}-${v.seat}`;
        if(!seen.has(key) && !seen.has(revKey)){
            unique.push(v)
            seen.add(key)
        }
    }
    return unique;
}
console.log(violations([
  ['M','M','F'],
  ['.','F','M']
]))
