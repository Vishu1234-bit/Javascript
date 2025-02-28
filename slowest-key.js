var slowestKey = function(releaseTimes, keysPressed) {
    let maxdiff = releaseTimes[0];
    let diff = [releaseTimes[0]];
    let maxKeys = [];
    for(let tindex=1;tindex<releaseTimes.length;tindex++){
        diff.push(releaseTimes[tindex]-releaseTimes[tindex-1])
        if(releaseTimes[tindex]-releaseTimes[tindex-1]>maxdiff){
            maxdiff = releaseTimes[tindex]-releaseTimes[tindex-1];
        }
    }
    for(let keyIndex=0; keyIndex<keysPressed.length; keyIndex++){
        if(diff[keyIndex] === maxdiff){
            maxKeys.push(keysPressed[keyIndex])
        }
    }
    lexicoKey = maxKeys[0]
    for(let l=0;l<maxKeys.length;l++){
        if(maxKeys[l]>lexicoKey){
            lexicoKey = maxKeys[l];
        }
    }
    return lexicoKey;
};
