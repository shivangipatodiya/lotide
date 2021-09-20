
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays'); 

console.log(eqArrays('3is', ['3', 'i', 's'])); 
console.log(eqArrays([1, 2, 3], [3, 2, 1])); 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
