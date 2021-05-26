
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

