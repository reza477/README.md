var letterPositions = function(sentence) {
  const results = {};
  var chars = sentence.split("")
  for (let i=0; i < chars.length; i++) {
    const letter = chars[i];
    if (letter == " ") continue;
    console.log(letter);

    if (results[letter]) {
      results[letter].push(i)
    } else {
      results[letter] = [i] 
    }

  }
  // for (let letter of noSpaces) {
  //   if (results[letter]) {
  //     results[letter] = noSpaces.indexOf([letter])
  //   } else {
  //     results[letter] = [0]
  //   }
  // }

  // let arrayOfChars = string.split(' ').join('')
  // for (let letter of arrayOfChars) {
  //     if (results[letter]) {
  //       results[letter] += 1;
  //     } else {
  //       results[letter] = 1;
  //     }
  // }
  return results;
}

// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }

console.log(letterPositions("lighthouse in the house"))





// 