function basicOp(operation, value1, value2){
  let res = 0;
  if(operation === "+"){
    res = value1  + value2
  }else if(operation === "-"){
    res = value1 - value2
  }else if(operation === "*"){
    res = value1 * value2
  }else{
    res = value1 / value2
  }
  return res;
}