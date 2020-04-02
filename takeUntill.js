const pass = String.fromCodePoint(0x1F7E2);
const fail = String.fromCodePoint(0x1F534);

const assertArraysEqual = (ar1, ar2) => {
  if (ar1.length !== ar2.length){
    console.log(`${fail}${fail}${fail} Assertion Failed`);
  }else {
      if ( !eqArrays(ar1, ar2) ){
        console.log(`${fail}${fail}${fail} Assertion Failed`);
        
      } else {
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

const takeUntil = (array, callback) => {
  const result = []
  for (const item of array){
    if (!callback(item)){
      result.push(item);
    }else{
      break;
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data1, x => x < 0) ,[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','),[ 'I\'ve', 'been', 'tgo', 'Hollywood' ]);
