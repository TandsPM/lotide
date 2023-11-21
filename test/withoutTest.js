const assert = require('chai').assert;
//const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');


describe("#without", () => {
  it("return array without specified element", () => {
    const words = ["hello", "world", "lighthouse"];
    const result = without(words, ["hello", "world", "lighthouse"])
    assert.deepStrictEqual(result, []);
  });

  it("return array without specified element", () => {
    const num = [1, 2, 3];
    const result = without(num, [1])
    assert.deepStrictEqual(result, [2, 3]);
  });

  it("return array without specified element", () => {
    const num = ["1", "2", "3"];
    const result = without(num, [1, 2, "3"])
    assert.deepStrictEqual(result, ["1", "2"]);
  });
});