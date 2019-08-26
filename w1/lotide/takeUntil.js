const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

var stopAtComma = function (word) {
  return word === ","
}
// num = 2
var lessThanZero = function (num) {
  return num < 0
}
// console.log(lessThanZero(num))
// console.log(lessThanZero(-1))
const takeUntil = function (array, callback) {
  const result=[]
  for (let item of array){
    var dontkeep = callback(item)
    if (dontkeep) {
      break // callback = true
}
result.push(item)
  }
return result
}


const results1 = takeUntil(data1, lessThanZero);
console.log(results1);

const results2 = takeUntil(data2, stopAtComma);
console.log(results2);
