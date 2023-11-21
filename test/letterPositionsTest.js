const assert = require('chai').assert;
const letterPositions   = require('../letterPositions');


/*
const result1 = letterPositions("lighthouse in the house");
console.log(result1);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(result1['l'], [0]);
assertArraysEqual(result1['i'], [1, 11]);
assertArraysEqual(result1['g'], [2]);
assertArraysEqual(result1['h'], [3, 5, 15, 18]);
*/



describe("#letterPositions", () => {
  it("returns letter position with index number", () => {
    const result1 = letterPositions("lighthouse in the house");
    assert.deepEqual(result1['l'], [0]);
  });

  it("returns letter position with index number", () => {
    const result1 = letterPositions("lighthouse in the house");
    assert.deepEqual(result1['i'], [1, 11]);
  });

  it("returns letter position with index number", () => {
    const result1 = letterPositions("lighthouse in the house");
    assert.deepEqual(result1['g'], [2]);
  });

  it("returns letter position with index number", () => {
    const result1 = letterPositions("lighthouse in the house");
    assert.deepEqual(result1['h'], [3, 5, 15, 18]);
  });
});
