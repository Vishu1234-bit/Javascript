/**
 * @param {number} n
 * @yields {number}
 */
function* factorial(n) {
    let fact=1;
    for(let i=1;i<=n;i++){
        fact*=i;
        yield fact;
    }
    if(n==0){
        yield 1;
    }
};

/**
 * const gen = factorial(2);
 * gen.next().value; // 1
 * gen.next().value; // 2
 */
