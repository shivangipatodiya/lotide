const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual();
const countLetters = (string) => {
  let total = {};
  for (let i = 0; i < string.length; i++) {
    console.log(i, string[i]);
    if (string[i] === ' ') {
      continue;
    } else {
      if (total[string[i]] > 0) {
        total[string[i]] += 1;
        console.log('1:', total);
      } else {
        total[string[i]] = 1;
        console.log('others:', total);
      }
    }
  } return total;
};
countLetters();