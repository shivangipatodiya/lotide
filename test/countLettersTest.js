const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it('should return count of the letter in the input string', () => {
    const string = 'Happy Sunday';
    let result = countLetters(string);
    assert.equal(result['H'], 1);
  });

  it ('should return total count of the letter in the input string', () => {
    const string = 'Happy Sunday';
    let result = countLetters(string);
    assert.equal(result['p'], 2);
  });
});