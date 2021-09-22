const assertEqual =require('./assertEqual');

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


module.exports = countOnly;