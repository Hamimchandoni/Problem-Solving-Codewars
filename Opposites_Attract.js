function lovefunc(flower1, flower2) {
  const evenOrOdd1 = flower1 % 2;
  const evenOrOdd2 = flower2 % 2;

  if (
    (evenOrOdd1 === 0 && evenOrOdd2 !== 0) ||
    (evenOrOdd1 !== 0 && evenOrOdd2 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}
