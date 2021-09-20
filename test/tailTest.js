const tail = require("../tail");
const assertEqual = require('../assertEqual');
////actual function that is required for testing arrays equal is
//const assertArraysEqual and eqArrays is to be required

assertEqual(tail([1, 2, 3]) === [2, 3]);
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
