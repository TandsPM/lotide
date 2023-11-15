const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
    return false;
    }
  }
  return true;
}

// take an array and return the middle-most element(s)
const middle = function(array) {
  let empty = [];
  let elementsOdd = (array.length - 1) / 2;
  let elementsEven = array.length / 2;
  let elementBeforeEven = elementsEven - 1;
  //console.log('elementOdd', elementOdd);
  //console.log('elementsEven', elementsEven);
  // if one or two elements - return empty
  if (array.length <= 2) {
    return empty;
  }
  // with odd number of elements, a single middle should be returned
    if (array.length % 2 !== 0) {
      return [array[elementsOdd]];
    }
  //} 
    // with an even number of elements, two elements should be returned
    if (array.length % 2 === 0) {
      return [array[elementBeforeEven], array[elementsEven]];
   }
}


const assertArraysEqual = function(actual, expected) {
  if (eqArrays (actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
  }
}

console.log(middle([1]))// => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle(([1, 2, 3, 4, 5]))) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]