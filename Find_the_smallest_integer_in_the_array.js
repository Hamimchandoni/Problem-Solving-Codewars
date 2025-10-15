function findSmallestInt(arr) {
  arr.sort((a, b) => {
    return a - b
  });

  return arr[0]
}