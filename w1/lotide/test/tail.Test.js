// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// assertEqual(tail(words), ["Lighthouse", "Labs"]); // original array should still have 3 elements!


const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });
});