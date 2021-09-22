const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = (array, cb) => {
  let output = [];
  for (let element of array) {
    if (cb(element)) {
      break;
    } else {
      output.push(element);
    }
  }
  return output;
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
// //[ 1, 2, 5, 7, 2 ]
// //---
// //[ 'I\'ve', 'been', 'to', 'Hollywood' ]

// assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been1234', 'to', 'Hollywood' ]);

module.exports = takeUntil;