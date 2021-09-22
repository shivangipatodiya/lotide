const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe ('#letterPositions', () => {

  it('returns list of index positions of each letter in a string', () => {
    const string = 'hello world';
    const result = letterPositions(string);
    assert.deepEqual(result['h'], [0]);
  });

  it('returns list of index positions of each letter in a string without skipping whitespace', () => {
    const string = 'hello world';
    const result = letterPositions(string);
    assert.deepEqual(result['l'], [2, 3, 9]);
  });
})