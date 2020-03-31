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

const fail = String.fromCodePoint(0x1F534);
const pass = String.fromCodePoint(0x1F7E2);

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

const without = (orig, remove)=> {
  let res = [];
  for (let num of orig){
    if (!(remove.indexOf(num) >= 0) ){
      res.push(num);
    }
  }
  return res ;
};

assertArraysEqual(without([1, 2, 3], [1]),[2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);