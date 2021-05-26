const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
    
  } else if(actual !== expected) {

    console.log(` Assertion Failed: ${actual} !== ${expected}`)
  }

};



const countLetters = function(str){

   let output = {}
   //for loop 
   for(const letter of str){
     //console.log('loop letter' ,letter)
    if(output[letter]){
      output[letter] += 1
    }else {
      output[letter] = 1
    }

     
   }
   return output

}

console.log(countLetters('lighthouselab'))

