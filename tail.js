const assertEqual = function(actual, expected){
  if (actual === expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`)
    
  } else if(actual !== expected){

    console.log(` Assertion Failed: ${actual} !== ${expected}`)
  }

};

const tail = function(arr){
  if(arr.length  === 0){
    return arr;
  }
  let result = arr 
  return result.slice(1)
  
}

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: ...
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!