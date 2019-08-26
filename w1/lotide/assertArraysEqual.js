const eqArrays = require('./eqArrays')

// const eqArrays = function(array1, array2) {
//   for(var i = 0; i <array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//         return false
//     }
//   }
//   return true
// }


const assertArraysEqual = function(array1, array2) {
  const arraysAreEqual = eqArrays(array1, array2);

  if (arraysAreEqual) {
    // console.log("Assertion Passed: " + actual + "===" + expected)
    console.log(`Assertion Passed ${array1} === ${array2}`)
  } else {
    // console.log("Assertion Failed: " + actual + "!==" + expected)
    console.log(`Assertion Failed ${array1} !== ${array2}`)
  }
};

// const assertEqual = function(actual, expected) {

//   if (actual === expected) {
//     // console.log("Assertion Passed: " + actual + "===" + expected)
//     console.log(`Assertion Passed ${actual} === ${expected}`)
//   } else {
//     // console.log("Assertion Failed: " + actual + "!==" + expected)
//     console.log(`Assertion Failed ${actual} !== ${expected}`)
//   }
// };

// const eqArrays = function(array1, array2) {
//   for(var i = 0; i <array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//         return false
//       }
//     }return true
//   }




   //   if (eqArray = true) {
//     // console.log("Assertion Passed: " + actual + "===" + expected)
//     console.log(`Assertion Passed ${actual} === ${expected}`)
//   } else {
//     // console.log("Assertion Failed: " + actual + "!==" + expected)
//     console.log(`Assertion Failed ${actual} !== ${expected}`)
//   }
// };
// const myArray = [1, 2, 3];
// const expectedArray = [1, 2, 3];
// assertArraysEqual(myArray, expectedArray)
// assertArraysEqual([1, 3, 5], [1, 4, 5])

module.exports = assertArraysEqual;