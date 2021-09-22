const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

describe ('#findKeyByValue', () => {
  it ('returns property name of the value that is passed', () => {
    const bestTVShowsByGenre = { 
        sci_fi: "The Expanse",
        comedy: "Brooklyn Nine-Nine",
        drama:  "The Wire"
      };
      assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it ('returns undefined if object passed does not have value that is passed', () => {
    const bestTVShowsByGenre = { 
        sci_fi: "The Expanse",
        comedy: "Brooklyn Nine-Nine",
        drama:  "The Wire"
      };
      assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it ('returns property name that comes first in the object of the value passed', () => {
    const bestTVShowsByGenre = { 
        sci_fi: "The Expanse",
        comedy: "Brooklyn Nine-Nine",
        drama:  "The Wire",
        romCom: "Brooklyn Nine-Nine" 
      };
      assert.equal(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });
});