const eqArrays = function(arr1, arr2) {
  // use for loop to iterste over the elements of the array and compare them individually
  // if an array && not equal then return false
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



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  }

  if (actual !== expected) {
    console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Returns true if both objects have identical keys with identical values
// Otherwise you get back a false!
const eqObjects = function(object1, object2) {
  // check if one key has more keys than the other - use Object.keys
  const keys = Object.keys(object1);


  // loop through the keys for only one of the objects
  for (let key of keys) {

    if (object1[key].length !== object2[key].length) {
      return false;
    }
    // check if values at the current key in both objects are arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
    // compare both objects' values for that key - no match return false
    if (!eqArrays(object1[key], object2[key])) {
      // continue to next iteration
      // if loop completes without finding unequal - return true
      return false;
    }
  } if (object1[key] !== object2[key]) {
    return false;
  }
}
  // after loop return true
  return true;
}


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false