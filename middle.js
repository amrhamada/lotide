const pass = String.fromCodePoint(0x1F7E2);
const fail = String.fromCodePoint(0x1F534);

const assertArraysEqual = (ar1, ar2) => {
  let flag = true;
  if (ar1.length !== ar2.length){
    console.log(`${fail}${fail}${fail} Assertion Failed`);
  }else {
    for(let i = 0; i < ar1.length; i++){
      if ( ar1[i] !== ar2[i] ){
        console.log(`${fail}${fail}${fail} Assertion Failed`);
        flag = false;
        break;
      }
    }
    if (flag){
      console.log(`${pass}${pass}${pass} Assertion Passed`);
    }
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

const middle = (ar) =>{
  if (ar.length < 3 ){
    return [];
  }
  let res = [];
  let mid = Math.floor(ar.length / 2);
  if (ar.length % 2 === 0){
    res.push(ar[mid-1]);
  }
  res.push(ar[mid]);
  return res;
};

assertArraysEqual(eqArrays(middle([1]), []), true); // => []
assertArraysEqual(eqArrays(middle([1, 2]), []), true); // => []
assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true); // => [2]
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true ); // => [3]
assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2,3]), true); // => [2, 3]
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3,4]), true); // => [3, 4]