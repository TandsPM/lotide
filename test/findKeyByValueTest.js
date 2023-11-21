const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


describe("#findKeyByValue", () => {
  it("returns key and show", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    }
    const result = findKeyByValue(bestTVShowsByGenre, "The Wire");
    assert.deepEqual(result, 'drama');
  });

  it("returns key and show", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    }
    const result = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    assert.deepEqual(result, undefined);
  });
});

