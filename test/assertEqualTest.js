const assert = require('chai').assert;
const assertEqual = require('../assertEqual');



describe("#assertEqual", () => {
  it("return false if !== same item", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), undefined);
  });

  it("return true if === same item", () => {
    assert.strictEqual(assertEqual("Coding Project", "Coding Project"), undefined);
  });

  it("return false if !== same item", () => {
    assert.strictEqual(assertEqual(15, 12), undefined);
  });

  it("return true if === same item", () => {
    assert.strictEqual(assertEqual(1, 1), undefined);
  });
});

