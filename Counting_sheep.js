function countSheeps(sheep) {
  let count = 0;
  sheep.forEach((a) => {
    if (a) {
      count++;
    }
  });
  return count;
}
