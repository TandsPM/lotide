const assert = require('chai').assert;
const letterPositions   = require('../letterPositions');



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
