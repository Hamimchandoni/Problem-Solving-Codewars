function abbrevName(name) {
  const arr = name.split(" ");
  const first = arr[0].split("");
  const second = arr[1].split("");
  const res = `${first[0]}.${second[0]}`;

  return res.toLocaleUpperCase();
}
