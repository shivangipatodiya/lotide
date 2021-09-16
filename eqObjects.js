const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = (list1, list2) => {
  if (Array.isArray(list1) && Array.isArray(list2)) {
 if (list1.length === list2.length) {
   return list1.every((value, index) => value === list2[index]);
 }
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

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true
// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false
const cd = { c: "1", d: ["2", 3, 4] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));//, true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false