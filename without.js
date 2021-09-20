const eqArrays = (list1, list2) => {
  if(Array.isArray(list1) && Array.isArray(list2)) {
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

const without = (sourceArray, itemsToBeRemovedArray) => {
  let output = [];
  for (let x = 0; x < sourceArray.length; x++) {
    if (!itemsToBeRemovedArray.includes(sourceArray[x])) {
      output.push(sourceArray[x]);
    }
  } return output;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), [4, 5]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);