const assertArraysEqual = require('./assertArraysEqual');
const eqArrays =require('./eqArrays');


const middle = (array) => {
  let output = [];
  if (array.length < 3){
  return output;
} else if (array.length > 2) {
  if (array.length % 2 === 0) {
    output.push(array[(array.length / 2) - 1]);
    output.push(array[array.length / 2])
    return output;
  } else { 
    output.push(array[Math.floor(array.length / 2)]);
    return output;
  }
}
};
//console.log(middle([0, 1, 2, 3, 4, 5]));



module.exports = middle;