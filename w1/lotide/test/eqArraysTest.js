// const assertEqual = require ('../assertEqual');
// const eqArrays = require ('../eqArrays');

// // assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);



const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArray", () => {
  it("returns true for [1, 2, 3],[1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3],[1, 2, 3]), true);
  });
  it("returns false for [1, 2, 3],[1, 2]", () => {
    assert.deepEqual(eqArrays([1, 2, 3],[1, 2]), false); 
  });
});