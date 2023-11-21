// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const without = require('../without');
const takeUntil = require('../takeUntil');
const letterPositions = require('../letterPositions');
const findKeyByValue = require('../findKeyByValue');
const findKey = require('../findKey');
const eqObjects = require('../eqObjects');
const countOnly = require('../countOnly');
const countLetters = require('../countLetters');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('../assertObjectsEqual');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  without: without,
  takeUntil: takeUntil,
  letterPositions: letterPositions,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  eqObjects: eqObjects,
  countOnly: countOnly,
  countLetters: countLetters,
  assertObjectsEqual: assertObjectsEqual,
  eqArrays: eqArrays,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual

};

