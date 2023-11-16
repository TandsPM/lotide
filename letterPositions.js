// return all the indices (zero-based positions) in the string where each character is found
// should tell you the i of the number ex) 'h' is at i 0

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  // use for...of loop
  // get rid of blank spaces
  for (const indexes of sentence) {
    if (!results[indexes[0]]) results[indexes[0]] = [];
    results[indexes[0]].push(indexes.index);
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

