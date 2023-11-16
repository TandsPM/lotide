// take an object and a value
// scan the object and return the first key which contains the given value



const findKeyByValue = function(obj, value) {
  // use Object.keys() - get a list of all the categories (keys) in the list of TV shows (object)
  // used mdn to look this up
  const keys = Object.keys(obj);

  // iterate over the keys - check 1 by 1
  for (const key of keys) {
  // check if value at current key = the value parameter
  if (obj[key] === value) {
    // return the hey where we found the show
    return key;
    } 
  }
  // if no key with that given value - return undefined
  return undefined;
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  }

  if (actual !== expected) {
    console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(bestTVShowsByGenre);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);