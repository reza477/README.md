// const middle = require('../middle'); 
// const eqArrays = require('../eqArrays');
// const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual(eqArrays(middle([7,8,9,10,11,12]), [9,10]), true)


const mid = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(mid([1, 2, 3]), [2]);
  });
  it("returns 2 ,3 for [1, 2, 3, 4]", () => {
    assert.deepEqual(mid([1, 2, 3, 4]), [2, 3]); 
  });
});