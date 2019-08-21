const assertEqual = function(actual, expected) {

  if (actual === expected) {
    // console.log("Assertion Passed: " + actual + "===" + expected)
    console.log(`Assertion Passed ${actual} === ${expected}`);
  } else {
    // console.log("Assertion Failed: " + actual + "!==" + expected)
    console.log(`Assertion Passed ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

array1 = [];
var tail = function(array) {
  for (var i = 1; i < array.length; i++) {
   array1.push(array[i]);
  }
  return array1;
};


[1, 2, 3] === [1, 2, 3] // => false
[1, 2, 3] == [1, 2, 3] // => false