const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
    return false;
    // AI suggest to replace the above code with
    // return arr1.every((val, index) => val === arr2[index]);
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
