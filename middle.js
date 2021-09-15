// const assertArraysEqual = (actual, expected) => {
//   if (eqArrays(actual, expected)) {
//     return `✅✅✅Assertion Passed: ${actual} === ${expected}`;
//   } else {
//     return `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
//   }
// };
// const eqArrays = (list1, list2) => {
//   if (list1.length === list2.length) {
//     return list1.every((value, index) => value === list2[index]);

//   } else {
//     return false;
//   }
// };

const assertArraysEqual = require("./assertArraysEqual")

const middle = (array) => {
  let output = [];
  if (array.length < 3){
  return output;
} else if (array.length > 2) {
  if (array.length % 2 === 0) {
    output.push(array[1]);
    output.push(array[array.length / 2]);
    return output;
  } else { 
    output.push(array[Math.floor(array.length / 2)]);
    return output;
  }
}
};
//console.log(middle([1, 2]));

console.log(middle([1, 3, 5, 2]));
console.log(middle([1, 3, 5, 6, 7]));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1, 3, 5, 7]), [3,5]));
console.log(assertArraysEqual(middle([2, 3, 4, 5, 6]), [4]));
console.log(assertArraysEqual(middle([4, 5]), [4, 5]));