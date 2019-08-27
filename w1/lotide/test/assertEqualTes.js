const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqualTes", () => {
  it("returns true for lighthouse = lighthouse", () => {
    assert.strictEqual(assertEqual("lighthouse", "lighthouse"), true); 
  });
});
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);