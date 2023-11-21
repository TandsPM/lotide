const assert = require('chai').assert;
const map = require('../map');


describe("#map", () => {
  it("return array with first letter in each element", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    const outcome1 = ['g', 'c', 't', 'm', 't'];
    assert.deepEqual(results1, outcome1);
  });

  it("return array with first number in each element", () => {
    const numbers = [780, 403, 587];
    const results2 = map(numbers, num => String(num)[0]);
    const outcome2 = ['7', '4', '5'];
    assert.deepEqual(results2, outcome2);
  });  

  it("return empty array when givin empty array", () => {
    const empty = [];
    const results3 = map(empty, e => e[0]);
    const outcome3 = [];
    assert.deepEqual(results3, outcome3);
  });  
});

