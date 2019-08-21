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

var countLetters = function(string) {
  const results = {}
  let arrayOfChars = string.split(' ').join('')
  for (let letter of arrayOfChars) {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
  }
  return results;
}


console.log(countLetters("lighthouse in the house"))
