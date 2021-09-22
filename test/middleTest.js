// const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('../eqArrays');
// const middle = require('../middle');

// console.log(middle([1, 3, 5, 2]));
// console.log(middle([1, 3, 5, 6, 7]));
// console.log(assertArraysEqual(middle([1, 2]), []));
// console.log(assertArraysEqual(middle([1, 3, 5, 7]), [3,5]));
// console.log(assertArraysEqual(middle([2, 3, 4, 5, 6]), [4]));
// console.log(assertArraysEqual(middle([4, 5]), [4, 5]));

const assert = require('chai').assert;
//const assertArraysEqual = require('../assertArraysEqual');
//const eqArrays = require('../eqArrays');
const middle = require('../middle');

describe('#middle', () => {

  it('returns [5, 7] for [1, 3, 5, 7, 2, 3]', () => {
    assert.deepEqual(middle([0, 1, 2, 3, 4, 5]), [2, 3]);
  });

  it('returns [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('returns [] for [1, 2]', () => {
    assert.deepEqual(middle([4, 5]), []);
  });

  it('returns [] for [1]', () => {
    assert.deepEqual(middle([4]), []);
  });

})