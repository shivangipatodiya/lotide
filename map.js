const words = ["ground", "control", "to", "major", "tom"];
//const results1 = map(words, word => word[0]);

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
console.log(map(words, word => word[0]));

const eqArrays = (list1, list2) => {
  if (Array.isArray(list1) && Array.isArray(list2)) {
    if (list1.length === list2.length) {
      return list1.every((value, index) => value === list2[index]);
    }
  } else {
    return false;
  }
};
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => '[' + word + ']'), ["ground", "control", "to"]);
assertArraysEqual(map(words, word => word.length), []);