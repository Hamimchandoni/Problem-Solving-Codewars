function digitize(n) {
  const string = n + "";
  const arr = string.split("").reverse();
  let res = [];
  arr.forEach((num) => {
    res.push(Number(num))
  })
  return res
}