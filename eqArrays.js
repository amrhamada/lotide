const eqArrays = (ar1, ar2) => {
  if (ar1.length !== ar2.length){
    return false;
  }
  for(let i = 0; i < ar1.length; i++){
    if (Array.isArray(ar1[i])){
      const res = eqArrays(ar1[i], ar2[i]);
      if (!res){
        return false;
      }else {
        continue;
      }
    }
    if ( ar1[i] !== ar2[i] ){
      return false;
    }
  }
  return true;
};
module.exports = eqArrays;
