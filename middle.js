

// take an array and return the middle-most element(s)
const middle = function(array) {
  let empty = [];
  let elementsOdd = (array.length - 1) / 2;
  let elementsEven = array.length / 2;
  let elementBeforeEven = elementsEven - 1;
  //console.log('elementOdd', elementOdd);
  //console.log('elementsEven', elementsEven);
  // if one or two elements - return empty
  if (array.length <= 2) {
    return empty;
  }
  // with odd number of elements, a single middle should be returned
    if (array.length % 2 !== 0) {
      return [array[elementsOdd]];
    }
  //} 
    // with an even number of elements, two elements should be returned
    if (array.length % 2 === 0) {
      return [array[elementBeforeEven], array[elementsEven]];
   }
}

module.exports = middle;

