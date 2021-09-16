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
const eqArrays = (list1, list2) => {
  if (list1.length === list2.length) {
    return list1.every((value, index) => value === list2[index]);

  } else {
    return false;
  }
};
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    return `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
  }
};
console.log(assertArraysEqual(letterPositions("hello").e, [1]));