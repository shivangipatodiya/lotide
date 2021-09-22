# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shivangipatodiya/lotide`

**Require it:**

`const _ = require('@shivangipatodiya/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(Array)`: The head function takes in an array and returns the element at index 0(head).
* `tail(Array)`: The tail function returns an array of all the elements of the array that is passed except element at index 0(head).
* `middle(Array)`: The middle function returns the the middle-most element(s) of the given array.
* `countOnly(Array, Object)`: The countOnly function returns an object containing counts of everything that the input object lists as true and also listed in input array.
* `countLetters(String)`: The countLetters function returns an object with count of each of the letters in that string.
* `letterPositions(String)`: The letterPositions function return an object of all the indices (zero-based positions) in the string where each character is found.
* `findKeyByValue(Object, String)`: The findKeyByValue function returns the first key which contains the given value.
* `findKey(Object, Function)`: The findKey function returns the key that passes the condition of callback function passed in.