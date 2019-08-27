describe("#eqArray", () => {
  it("returns true for [1, 2, 3],[1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3],[1, 2, 3]), true);
  });
  it("returns false for [1, 2, 3],[1, 2]", () => {
    assert.deepEqual(eqArrays([1, 2, 3],[1, 2]), false); 
  });
});

const myArray = [1, 2, 3];
const expectedArray = [1, 2, 3];
assertArraysEqual(eqArrays(myArray, expectedArray), true)
assertArraysEqual(eqArrays([1, 3, 5], [1, 4, 5]), false)