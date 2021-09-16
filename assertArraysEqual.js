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
assertArraysEqual([], []);