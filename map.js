const eqArrays = function(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  
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










const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    
  }
  return results;
}
// const returnFirstItem =  function(word){
//   return word[0]
// }
const words = ["ground", "control", "to", "major", "tom"];
const result1 = map(words, (word) => word[0]);
// const result1 = map(words, word => word[0]);
// const result2= map(words, word => word += "2");
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);