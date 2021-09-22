const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = (string) => {
  let positions = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      continue;
    } else {
      if (positions.hasOwnProperty(string[i]) !== true) {
        positions[string[i]] = [];
        positions[string[i]].push(i);
      } else {
        positions[string[i]].push(i);
      }
    }
  } return positions;
};

module.exports = letterPositions;