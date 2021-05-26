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


const without = function (source, itemsToRemove) {
  
  let output = [];
  
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      output.push(source[i]);
    }

  }

  return output;

}

without([1, 2, 3], [1])// => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);