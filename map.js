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

function map(arr, func){
  let res = [];
  for (const item of arr){
    res.push(func(item));
  }
  return res;
}

const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(eqArrays(map(words, word => word[0]) ,[ 'g', 'c', 't', 'm', 't' ]),true );