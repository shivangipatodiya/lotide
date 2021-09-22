//assertEqual(findKey({
  //   "Blue Hill": { stars: 1 },
  //   "Akaleri":   { stars: 3 },
  //   "noma":      { stars: 2 },
  //   "elBulli":   { stars: 3 },
  //   "Ora":       { stars: 2 },
  //   "Akelarre":  { stars: 3 }
  // }, x => x.stars === 2), "noma"); // => "noma"
  
  // assertEqual(findKey({a: 1, b: 2, c: -1}, x => x < 0), 'a');

  const assert = require('chai').assert;
  const findKey = require('../findKey');
  
  describe('#findKey', () => {

    it ('returns property name of matched element', () => {
      assert.equal(findKey({
          "Blue Hill": { stars: 1 },
          "Akaleri":   { stars: 3 },
          "noma":      { stars: 2 },
          "elBulli":   { stars: 3 },
          "Ora":       { stars: 2 },
          "Akelarre":  { stars: 3 }
        }, x => x.stars === 2), "noma");
    });

    it ('returns property name of matched element', () => {
      assert.equal(findKey({
          "Blue Hill": { stars: 1 },
          "Akaleri":   { stars: 3 },
          "noma":      { stars: 2 },
          "elBulli":   { stars: 3 },
          "Ora":       { stars: 2 },
          "Akelarre":  { stars: 3 }
        }, x => x.stars === 7), undefined); 
    });
  })