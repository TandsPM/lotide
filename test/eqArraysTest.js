const assert = require('chai').assert;
const eqArrays = require('../eqArrays');



describe("#eqArrays", () => {
  it("return true if === same array", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("return false if !== same array", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("return true if === same array", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it("return false if !== same array", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["3", "2", "1"]), false);
  });
});