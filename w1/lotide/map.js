const words = ["ground", "control", "to", "major", "tom"];


// takes array and its output will be going inside callback which then
//  goes inside results1 [1]
// then map does something with it
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]);
console.log(results1);


// const map = function (array, callback) {
//   const result = []
//   for (let item of array) {
//     result.push(callback(item));
//   }
//   return results;
}

