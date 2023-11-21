const assert = require('chai').assert;
const countLetters = require('../countLetters');



describe("#countLetters", () => {
  it("return letter and how many appear", () => {
    const result = countLetters("lighthouse in the house".replaceAll(' ', ''));
    assert.deepEqual(result["l"], 1);
  });

  it("return letter and how many appear", () => {
    const result = countLetters("lighthouse in the house".replaceAll(' ', ''));
    assert.deepEqual(result["i"], 2);
  });
});