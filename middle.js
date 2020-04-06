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

module.exports = middle;
