const assert = require('chai').assert;
const countOnly = require('../countOnly');



describe("#eqObjects", () => {
  it("return true if both match", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
    assert.deepEqual(result["Jason"], 1);
  });


  it("return true if both match", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
    assert.deepEqual(result["Karima"], undefined);
  });


  it("return true if both match", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
    assert.deepEqual(result["Fang"], 2);
  });


  it("return true if both match", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
    assert.deepEqual(result["Agouhanna"], undefined);
  });

});