const args = process.argv;
let a = args.slice(2);

let summm = 0;
for (let i = 0; i < a.length; i++) {
  summm += Number(a[i]);
 
}
console.log(summm);
// let total=0;
// for(let j=0; j< result.length;j++){
//  //total=total+ result[j];
//  total+=result[j];
// }

// return total;

//conver array into
// for(let element of a){
//   //element = a[i]
//   console.log(element)
//   summm += element
// }

// var sum = a.reduce(add,0); // with initial value to avoid when the array is empty
// function add(accumulator, a) {
//     return accumulator + a;
// }

// console.log(summm);
// var sum = a.reduce(function(a, b) { return a + b; }, 0);
// var sum = array[0] + array[1]
// console.log(sum)
// console.log(args.slice(2));

// var a = [1,2,3];
// var sum = a.reduce(function(a, b) { return a + b; }, 0);