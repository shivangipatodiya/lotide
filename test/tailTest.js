// const tail = require("../tail");
// const assertEqual = require('../assertEqual');
// ////actual function that is required for testing arrays equal is
// //const assertArraysEqual and eqArrays is to be required

// assertEqual(tail([1, 2, 3]) === [2, 3]);
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]);

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
 it('returns [2, 3] for [1, 2, 3]', () => {
  assert.deepEqual(tail([1, 2, 3]), [2, 3]);
 });

 it('returns [] for []', () => {
  assert.deepEqual(tail([]), []);
 });

 it('returns [] for [1]', () => {
   assert.deepEqual(tail(['a']), []);
 });
});