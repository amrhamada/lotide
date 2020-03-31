const pass = String.fromCodePoint(0x1F7E2);
const fail = String.fromCodePoint(0x1F534);
const assertEqual = (actual, expected)=>{
  if (actual === expected) {
    console.log(`${pass}${pass}${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail}${fail}${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (ar1, ar2) => {
  if (ar1.length !== ar2.length){
    return false;
  }
  for(let i = 0; i < ar1.length; i++){
    if ( ar1[i] !== ar2[i] ){
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 4,]), false);