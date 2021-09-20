const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

console.log(middle([1, 3, 5, 2]));
console.log(middle([1, 3, 5, 6, 7]));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1, 3, 5, 7]), [3,5]));
console.log(assertArraysEqual(middle([2, 3, 4, 5, 6]), [4]));
console.log(assertArraysEqual(middle([4, 5]), [4, 5]));