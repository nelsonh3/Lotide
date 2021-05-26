const eqArrays = function(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  }else{
    let result = false
  }
  
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false
    }else{
       result = true
    }
  }return result
}


const assertArraysEqual = function(arr1, arr2){
  const result = eqArrays(arr1, arr2)
  if(result) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  
  }

}

const middle = function(arr){
  
   return arr[Math.round((arr.length - 1) / 2)];

} 

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]