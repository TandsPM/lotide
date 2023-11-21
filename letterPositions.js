// return all the indices (zero-based positions) in the string where each character is found
// should tell you the i of the number ex) 'h' is at i 0
 // get rid of blank spaces

const letterPositions = function(sentence) {
  // initialize empty object
  const results = {};

  // logic to update results here
  // loop through each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    // get current character
    const char = sentence[i];

    // check if current character is a space, if is, skip to next iteration of loop
    if (char !== ' ') {
    // if character not in results object, create array
    if (!results[char]) {
      results[char] = [];
    }
    // push current position to the array associated with the character
    // The push() method of Array instances adds the specified elements to 
    // the end of an array and returns the new length of the array
    results[char].push(i);
    }
  }
  return results;
}
 
module.exports = letterPositions;