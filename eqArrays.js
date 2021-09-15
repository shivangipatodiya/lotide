const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = (list1, list2) => {
  if (list1.length === list2.length) {
    return list1.every((value, index) => value === list2[index]);

  } else {
    return 'abc';
  }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);