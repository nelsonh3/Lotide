// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`)
    
//   } else if(actual !== expected) {

//     console.log(` Assertion Failed: ${actual} !== ${expected}`)
//   }

// };

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




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false