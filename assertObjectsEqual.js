const eqArrays = (list1, list2) => {
  if (list1.length === list2.length) {
    return list1.every((value, index) => value === list2[index]);

  } else {
    return false;
  }
};
const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let i = 0; i < keys1.length; i++) {
    let key = keys1[i];
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  } return true;
};
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    return `✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};
const cd = { c: "1", d: ["2", 3, 4] };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2));