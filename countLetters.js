// Take sentence as a string - return a count of each letter

const countLetters = function(letters) {
  const results = {}


  // use for...of loop
  for (const item of letters) {
    // count each letter - return count of each
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
    return results;
  }
}

  const result1 = countLetters("lighthouse in the house");


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  }

  if (actual !== expected) {
    console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
  }
};


assertEqual(result1[countLetters]);


/*
Therefore countLetters("lighthouse in the house") would return:
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
const countOnly = function(allItems, itemsToCount) {
const results = {};

for (const item of allItems) {
  // increment counter for each item - set property w/ that string key tp:
  //  the value that was already there (or 0 is nothing) with 1 added
  if (itemsToCount[item]) {
  if (results[item]) {
    results[item] += 1;
  } else {
    results[item] = 1;
  }
  console.log(item);
}
}
return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

*/