// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const countLetters= require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');


// const obj = {head, tail, middle}
module.exports = {
   head,
   tail,
   middle,
   flatten,
   letterPositions,
   assertArraysEqual,
   assertEqual,
   countLetters,
   countOnly,
   eqObjects,
   eqArrays,
   findKey,
   findKeyByValue,
   flatten,
};
// console.log(obj[head])