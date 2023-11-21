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

module.exports = countLetters