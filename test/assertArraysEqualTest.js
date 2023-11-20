const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
/*
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
assertArraysEqual(array1, array2);

const arr1 = [1, 2, 3];
const arr2 = [3, 2, 1];
assertArraysEqual(arr1, arr2);

const arr3= [1, 2, 3];
const arr4 = [1, 2, 3, 4];
assertArraysEqual(arr3, arr4);
*/


describe("#assertEqual", () => {
  it("return true if === same array", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), undefined);
  });

  it("return false if === same array", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), undefined);
  });

});