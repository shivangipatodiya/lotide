const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = (list1, list2) => {
  if (list1.length === list2.length) {
    return list1.every((value, index) => value === list2[index]);

  } else {
    return 'false';
  }
};

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

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

