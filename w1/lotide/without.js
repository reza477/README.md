const eqArrays = function(array1, array2) {
  for(var i = 0; i <array1.length; i++) {
    if (array1[i] !== array2[i]) {
        return false
    }
  }
  return true
}


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

const without = function (array, removeArray) {
  var newArray =[]
  for (var i = 0; i <array.length; i++ ) {
    if (array [i] !== removeArray [i]) {
      return newArray += array[i]
    }
  }return true
}