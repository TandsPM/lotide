//You should also check if the two objects have the same number of keys
//before you start comparing their values. This can be done by comparing
//the lengths of the arrays returned by Object.keys(object1) and Object.keys(object2)


// Returns true if both objects have identical keys with identical values
// Otherwise you get back a false!
const eqObjects = function (object1, object2) {
  // check if one key has more keys than the other - use Object.keys
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  // loop through the keys for only one of the objects
  for (let key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    // check if values at the current key in both objects are arrays
    if (Array.isArray(value1) && Array.isArray(value2)) {
      // compare both objects' values for that key - no match return false
      if (!eqArrays(value1, value2)) {
        // continue to next iteration
        // if loop completes without finding unequal - return true
        return false;
      }

      continue;
    } 
    
    if (value1 !== value2) {
      return false;
    }
  }
  // after loop return true
  return true;
}

module.exports = eqObjects