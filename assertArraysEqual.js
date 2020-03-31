const pass = String.fromCodePoint(0x1F7E2);
const fail = String.fromCodePoint(0x1F534);

const assetArraysEqual = (ar1, ar2) => {
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

assetArraysEqual([1, 2, 3], [1, 2, 3]);