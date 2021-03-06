const pass = String.fromCodePoint(0x1F7E2);
const fail = String.fromCodePoint(0x1F534);
const assertEqual = (actual, expected)=>{
  if (actual === expected) {
    console.log(`${pass}${pass}${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail}${fail}${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

