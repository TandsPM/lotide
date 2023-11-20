//const assertEqual = require('./assertEqual');

const head = function(item) {
  if (item.length === 0) {
    return undefined; //this is for an empty array
  }
  return item[0];
} 

module.exports = head;

//const assertEqual = function() {
  /*
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  }

  if (actual !== expected) {
    console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
  }
  */
//};


//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");