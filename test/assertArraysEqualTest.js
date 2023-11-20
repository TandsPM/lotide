const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
assertArraysEqual(array1, array2);

const arr1 = [1, 2, 3];
const arr2 = [3, 2, 1];
assertArraysEqual(arr1, arr2);

const arr3= [1, 2, 3];
const arr4 = [1, 2, 3, 4];
assertArraysEqual(arr3, arr4);