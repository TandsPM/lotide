const assert = require('chai').assert;
const findKey = require('../findKey');



describe("#findKey", () => {
  it("return noma === 2", () => {
    let result = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2); // => "noma"
    assert.deepEqual(result, 'noma');
  });

  it("return Akaleri === 3", () => {
    let result = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 3); 
    assert.deepEqual(result, 'Akaleri');
  });

  it("return undefined === 4", () => {
    let result = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 4); 
    assert.deepEqual(result, undefined);
  });
});