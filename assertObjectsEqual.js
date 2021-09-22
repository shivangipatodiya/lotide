const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    return `✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};
// const cd = { c: "1", d: ["2", 3, 4] };
// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(assertObjectsEqual(cd, cd2));

module.exports = assertObjectsEqual;