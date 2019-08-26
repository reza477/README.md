const assertArraysEqual = require('../assertArraysEqual'); 
const eqArrays = require('../eqArrays');



const myArray = [1, 2, 3];
const expectedArray = [1, 2, 3];
assertArraysEqual(eqArrays(myArray, expectedArray), true)
assertArraysEqual(eqArrays([1, 3, 5], [1, 4, 5]), false)