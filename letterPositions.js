// return all the indices (zero-based positions) in the string where each character is found
// should tell you the i of the number ex) 'h' is at i 0
 // get rid of blank spaces

const letterPositions = function(sentence) {
  // initialize empty object
  const results = {};

  // logic to update results here
  // loop through each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    // get current character
    const index = sentence[i];
    // if character not in results object, create array
    if (!results[index]) {
      results[index] = [];
    }
    // push current position to the array associated with the character
    // The push() method of Array instances adds the specified elements to 
    // the end of an array and returns the new length of the array
    results[index].push(i);
  }
  return results;
}
 



const result1 = letterPositions("lighthouse in the house".replaceAll(' ', ''));


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
    return false;
    // AI suggest to replace the above code with
    // return arr1.every((val, i) => val === arr2[i]);
    }
  }
  return true;
}
  

const assertArraysEqual = function(actual, expected) {
  if (eqArrays (actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
  }
}

console.log(result1);
assertArraysEqual(letterPositions("hello").e, [1]);

