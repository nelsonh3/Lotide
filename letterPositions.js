const eqArrays = function(arr1, arr2){
  let result = ''
  if(arr1.length !== arr2.length){
    return false
  }else{
    result = false
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
    
  if(eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  
  }

}






 
const letterPositions = function(string) {
  const result = {};

  for (let i = 0; i < string.length; i ++) {
    
    if (result[string[i]]) {  
       
      result[string[i]].push(i);
      
    
    } else {
      result[string[i]] = [i];
      
    }
    
  }
  
  console.log(result)
  return result;

}

  


assertArraysEqual(letterPositions("hello").h, [0]);