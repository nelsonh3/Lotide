const eqObjects = function(object1, object2){

  let arr1 = Object.keys(object1)
  let arr2 = Object.keys(object2)
  if(arr1.length !== arr2.length){
    return false;
  }else if(Array.isArray(object1) && Array.isArray(object2)){
    return eqArrays(arr1, arr2)
  }else{
    for(const key in object1){
      if(object1[key] !== object2[key]){
        return false
      }
    }
  }
  return true;

};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(eqObjects(actual, expected)){
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
   
  }else{
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  
  }
  
};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true
  
const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false