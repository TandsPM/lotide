// Take two arrays and return true or false based on a perfect match ===
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

  module.exports = eqArrays;
  