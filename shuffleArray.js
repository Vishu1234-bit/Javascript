function shuffleArray(arr){
    for(let i=0;i<arr.length;i++){
        const j = Math.floor(Math.random()*(i+1))
        let temp = arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    }
    return arr
}

const array1 = [1,2,3,4,5]
console.log(shuffleArray(array1))
