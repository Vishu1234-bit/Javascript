export default function selectionSort(arr) {
      let changeIndex=0;
      while(changeIndex<arr.length){
      let minIndex=changeIndex;
      let minElement = arr[changeIndex];
      for(let i=changeIndex+1;i<arr.length;i++){
          if(arr[i]<minElement){
            minIndex=i;
            minElement=arr[i];
          }
      }
      [arr[minIndex],arr[changeIndex]] = [arr[changeIndex],arr[minIndex]];
      changeIndex++;
      }
      return arr;
}
