const pass = String.fromCodePoint(0x1F7E2);
const fail = String.fromCodePoint(0x1F534);

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)){
    console.log(`${pass}${pass}${pass} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    
  }else {
      console.log(`${fail}${fail}${fail} Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);   
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

const eqObjects = (obj1, obj2) => {
  const ar1 = Object.keys(obj1);
  const ar2 = Object.keys(obj2);
  if (ar1.length !== ar2.length){
    return false;
  }else {
    for( const key in obj1){
      if(obj2[key] !== obj1[key]){
        if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])){
          if (!(eqArrays(obj1[key], obj2[key]))){
            return false;
          }
        }else {return false;}
      }
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false