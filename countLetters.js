const assertEqual = require('./assertEqual');
const countLetters = (string) => {
  let total = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      continue;
    } else {
      if (total[string[i]] > 0) {
        total[string[i]] += 1;
      } else {
        total[string[i]] = 1;
      }
    }
  } return total;
};

module.exports = countLetters;