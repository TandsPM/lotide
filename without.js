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

  // function take in source array and a itemsToRemove array
// return a new array with only those elements from source that are not present in itemsToRemove

const without = function(source, removeItems) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    // check if source is not in the remove
    if (!(source in removeItems)) {
      result.push(source[i]);
    }
  }
  return result;
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays (actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
  }
}



without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);