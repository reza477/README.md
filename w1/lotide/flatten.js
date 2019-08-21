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


var flatten = function(array) {
  var newArray = []
  // var pushArray = array.push(i)
  for (var i = 0; i < array.length; i++) {
    // console.log(array.length)
    console.log(i)
    newArray.push(array.pop(i))
    
    // if Array.isArray(array[i]) = false {
      // return newArray += arra[i]       
    }
    return newArray
  }


console.log(flatten([1, 3, 4, 5, 6]))