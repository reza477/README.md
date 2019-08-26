const findKey = function (object, callback) {

  for (let item of Object.keys(object)) {
    if (callback(object[item])) {
      return item
    }
  
  }
  
}



//creat fucntion findKey, which takes in an object and a callback
//it should scan the object
//and returns the first key
//for which the callback returns a truthy value
//if no key is found, return undefined

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"



