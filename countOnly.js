const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  }

  if (actual !== expected) {
    console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// given an array and an object - return an object containing counts of everything that
// the input object listed

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
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

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
/*
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(15, 12);
assertEqual("Coding Project", "Coding Project");
*/