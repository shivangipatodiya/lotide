const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countOnly = (array, object) => {
  let output = {};
  for (let key in object) {
    if (object[key] === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === key) {
          if (output[key] > 0) {
            output[key] += 1;
          } else {
            output[key] = 1;
          }
        }
      }
    }
  } return output;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

