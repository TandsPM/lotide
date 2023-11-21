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

module.exports = countOnly;