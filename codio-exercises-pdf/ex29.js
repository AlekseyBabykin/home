function writer(n) {
  let count = n;
  let temp;
  for (let i = 1; i < n + 1; i++) {
    temp = "#".repeat(i);
    for (let j = 0; j < count - 1; j++) {
      temp += "1";
    }
    count -= 1;
    console.log(temp);
  }
}
writer(4);
