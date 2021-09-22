const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const flatten = (array) => {
  let output = [];
  array.forEach(element=>{
    if (Array.isArray(element)) {
      for (let value of element) {
        output.push(value);
      }
    } else {
      output.push(element);
    }
  })
  // for (const element of array) {
  //   if (Array.isArray(element)) {
  //     for (let value of element) {
  //       output.push(value);
  //     }
  //   } else {
  //     output.push(element);
  //   }
  // } 
  return output;
};

//assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;