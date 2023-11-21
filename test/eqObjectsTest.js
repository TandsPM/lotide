const assert = require('chai').assert;
const eqObjects = require('../eqObjects');



describe("#eqObjects", () => {
  it("return true if both objets match", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    const result = eqObjects(shirtObject, anotherShirtObject);
    assert.deepEqual(result, true);
  });

  it("return false if both objets don't match", () => {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    const result = eqObjects(shirtObject, longSleeveShirtObject);
    assert.deepEqual(result, false);
  });


  it("return true if both objets match", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
    const result = eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject);
    assert.deepEqual(result, false);
  });
});