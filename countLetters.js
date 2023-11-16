// Take sentence as a string - return a count of each letter

const countLetters = function(letters) {
  const results = {}


  // use for...of loop
  // get rid of blank spaces
  for (const item of letters) {
    // count each letter - return count of each
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  return results;
}

const result1 = countLetters("lighthouse in the house".replaceAll(' ', ''));


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  }

  if (actual !== expected) {
    console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(result1);
assertEqual(result1['l'], 1);
assertEqual(result1['i'], 2);
