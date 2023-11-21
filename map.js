// take an array to map
// creat callback function
// map function will return a new array based on results from the callback

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;


