// function take in source array and a itemsToRemove array
// return a new array with only those elements from source that are not present in itemsToRemove

const without = function(source, removeItems) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    // check if source is not in the remove
    if (!removeItems.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
}

module.exports = without;

