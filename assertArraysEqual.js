const pass = String.fromCodePoint(0x1F7E2);
const fail = String.fromCodePoint(0x1F534);

const eqArrays = require('./eqArrays');

const assertArraysEqual = (ar1, ar2) => {
  if (ar1.length !== ar2.length){
    console.log(`${fail}${fail}${fail} Assertion Failed: ` , ar1 , ' !== ' , ar2);
  }else {
      if ( !eqArrays(ar1, ar2) ){
        console.log(`${fail}${fail}${fail} Assertion Failed: ` , ar1 , ' !== ' , ar2);
        
      } else {
      console.log(`${pass}${pass}${pass} Assertion Passed: ` , ar1 , ' === ' , ar2);
      }
  }
};

module.exports = assertArraysEqual;
