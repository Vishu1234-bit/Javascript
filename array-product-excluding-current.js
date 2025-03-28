/**
 * @param {number[]} numbers
 * @return {number[]}
 */
export default function arrayProductExcludingCurrent(numbers) {
  let totalProduct = 1;
  let zeroCount=0;
  let totalProductWithoutZero = 1;
  numbers?.forEach((num)=>{
    if(num==0){
      zeroCount+=1;
    }
    else{
      totalProductWithoutZero*=num;
    }
    totalProduct*=num;
  });
  let result = []
  numbers?.forEach((num)=>{
    if(zeroCount==1 && num==0){
      result.push(totalProductWithoutZero);
    }else if(num==0 && zeroCount>1){
      result.push(0);
    }
    else{
    result.push(Number(totalProduct/num));
    }
  });
  return result;
}
