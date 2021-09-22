// const words = ["ground", "control", "to", "major", "tom"];
// //const results1 = map(words, word => word[0]);
const eqArrays = require('./eqArrays');
const assertArraysEqual =require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
//console.log(map(words, word => word[0]));
// assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
// assertArraysEqual(map(words, word => '[' + word + ']'), ["ground", "control", "to"]);
// assertArraysEqual(map(words, word => word.length), []);

module.exports = map;