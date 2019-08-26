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

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };
// s

  var findKeyByValue = function(object, value) {
    // console.log('value', value)
    for (let key in object) {
      // console.log('myval', object[key]);
      if (value === object[key]) {
        // console.log('key!', key)
        return key
      }

      // for (let letter of arrayOfChars) {
      //   if (results[letter]) {
      //     results[letter] += 1;
      //   } else {
      //     results[letter] = 1;
      // console.log('key', key);
      // console.log('value', object[key])
    }
    // results = {}

    // var keyss = object.keys(object) 
    // => ['sci_fi', 'comedy', 'drama']
    // if ('sci_fi' == "the expanse")
    // // this will give me an array of the keys
    // for (let i = 0; i < keys.length; i++) {
    //   if (keyss[i] === value) {
    //     return object[key[i]] ;
    //   } else {
    //     return undefined
    //   }
    // }
    // // for (let letter of arrayOfChars) {
    // //   if (results[letter]) {
    // //     results[letter] += 1;
    // //   } else {
    // //     results[letter] = 1;
    // return results
  }

  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);