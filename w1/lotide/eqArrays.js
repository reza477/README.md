const assertEqual = function(actual, expected) {

  if (actual === expected) {
    // console.log("Assertion Passed: " + actual + "===" + expected)
    console.log(`Assertion Passed ${actual} === ${expected}`)
  } else {
    // console.log("Assertion Failed: " + actual + "!==" + expected)
    console.log(`Assertion Failed ${actual} !== ${expected}`)
  }
};



const eqArrays = function(array1, array2) {
  for(var i = 0; i <array1.length; i++) {
    if (array1[i] !== array2[i]) {
        return false
      }
    }return true
  }

// const eqArrays = function(array1, array2) {
//   for(var i = 0; i <array1.length; i++) {
//     if (array1[i] === array2[i]) {
//       return true
//   } else {
//       return false
//     }
//   }
// }
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 3, 5],[1, 4, 5]), true)