const assert = require('chai').assert;
const tail = require('../tail');

/*
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3);
*/


describe("#tail", () => {
  it("returns the tail end of element, only excluding the first element - for ['Yo Yo', 'Lighthouse', 'Labs'], return ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns the tail end of element, only excluding the first element - for [], return []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns the tail end of element, only excluding the first element - for ['lighthouse'], return []", () => {
    assert.deepEqual(tail(['Lighthouse']), []);
  });

  it("returns the tail end of element, only excluding the first element - for ['Yo Yo', 'Lighthouse'], return ['Lighthouse']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse']), ['Lighthouse']);
  });

});