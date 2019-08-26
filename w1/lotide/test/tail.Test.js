const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words), ["Lighthouse", "Labs"]); // original array should still have 3 elements!

