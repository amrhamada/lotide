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

const letterPositions = (sentence) => {
  const results = {};
  for ( let [index,chr ] of sentence.split('').entries()){
    if( chr !== ' '){
      if(results[chr]){
        results[chr].push(index);
      } else {
        results[chr] = [index];
      }
    }
  }
  return results;
};

const result = letterPositions("lighthouse in the house");
assertArraysEqual(eqArrays(result.l,[0]), true);
assertArraysEqual(eqArrays(result.i,[1,11]), true);
assertArraysEqual(eqArrays(result.g,[2]), true);
assertArraysEqual(eqArrays(result.h,[3,5,15,18]), true);
assertArraysEqual(eqArrays(result.e,[9,16,22]), true);
