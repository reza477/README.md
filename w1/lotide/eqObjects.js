const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  } 
  for(var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
        return false
    }
  }
  true
}


const assertEqual = function(actual, expected) {

  if (actual === expected) {
    // console.log("Assertion Passed: " + actual + "===" + expected)
    console.log(`Assertion Passed ${actual} === ${expected}`)
  } else {
    // console.log("Assertion Failed: " + actual + "!==" + expected)
    console.log(`Assertion Passed ${actual} !== ${expected}`)
  }
};

// exercise 1
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

// var eqObjects = function (object1, object2) {

//   var obj1keys = Object.keys(object1)
  
//   var obj2keys = Object.keys(object2)

//   if (obj1keys.length !== obj2keys.length ) {
//     return false
//   } else {
//       for (let key in object1 ) {
//         console.log(object1[key])
//         if (Array.isArray(object1[key])) {
//           // console.log("array")
//           return eqArrays(object1[key], object2[key])
//         }
//         if (object1[key] !== object2[key]) {
//           return false
//         }
//     }
//     return true
//   }

// }
// const ab = {a: "1", b: "2"};
// const ba = {b: "2", a: "1"};

// //assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// //assertEqual(eqObjects(ab, abc), false); // => false
//   // assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//   // assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
//   const cd = { c: "1", d: ["2", 3] };
//   const dc = { d: ["2", 3], c: "1" };
//   assertEqual(eqObjects(cd, dc), true); // => true
  
//   const cd2 = { c: "1", d: ["2", 3, 4] };
//   //assertEqual(eqObjects(cd, cd2),false ); // => false


// // const ab = {a: "1", b: "2"};
// // const ba = {b: "2", a: "1"};

// // assertEqual(eqObjects(ab, ba)); // => true

// // const abc = { a: "1", b: "2", c: "3" };
// // assertEqual(eqObjects(ab, abc)); // => false

// // const assertEqual = function(actual, expected) {

// //   if (actual === expected) {
// //     // console.log("Assertion Passed: " + actual + "===" + expected)
// //     console.log(`Assertion Passed ${actual} === ${expected}`)
// //   } else {
// //     // console.log("Assertion Failed: " + actual + "!==" + expected)
// //     console.log(`Assertion Failed ${actual} !== ${expected}`)
// //   }
// // };



module.exports = eqObject