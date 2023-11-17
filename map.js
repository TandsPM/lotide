// take an array to map
// creat callback function
// map function will return a new array based on results from the callback



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}



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

// words
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const outcome1 = ['g', 'c', 't', 'm', 't'];
assertArraysEqual(results1, outcome1);

//numbers
const numbers = [780, 403, 587];
const results2 = map(numbers, num => num[0]);
const outcome2 = [7, 4, 5];
assertArraysEqual(results2, outcome2);

//empty?
const empty = [];
const results3 = map(empty, e => e[0]);
const outcome3 = [];
assertArraysEqual(results3, outcome3);