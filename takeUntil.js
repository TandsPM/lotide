// return a "slice of the array with the elements taken from the beginning"
// it should keep going until the callback/predicate returns a truthy value

// take an array of elements
// take in a callback function that specifies the condition upon which the collection of items will stop
//starts at begining of array and collects items in a new array
// stop collecting items as soon as callback function returns a truthy value for an item


// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//const results1 = takeUntil(data1, x => x < 0);
//console.log(results1); // should output: [ 1, 2, 5, 7, 2 ]
//In this example, takeUntil is called with an array of numbers data1 and a simple
//callback function x => x < 0. What takeUntil is supposed to do is start from the
//beginning of data1 and keep collecting numbers until it encounters a number that
//is less than 0 (which is the point where the callback returns a truthy value).
//So, how might you go about implementing the takeUntil function? What is the first
//step in building this function that comes to mind?//

const takeUntil = function(array, callback) {
  const arr = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      break;
    }
    arr.push(array[i]);
  }
  return arr;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);