const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');


assertObjectsEqual({a: '1', b: 2}, {b: 2, a: '1'});

