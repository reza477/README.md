const assertEqual = function(actual, expected) {

  if (actual === expected) {
    // console.log("Assertion Passed: " + actual + "===" + expected)
    console.log(`Assertion Passed ${actual} === ${expected}`)
  } else {
    // console.log("Assertion Failed: " + actual + "!==" + expected)
    console.log(`Assertion Passed ${actual} !== ${expected}`)
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

var head = function(array){
    // return array.head
   return array[0]
  // } else {return "undefined"}
}


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");