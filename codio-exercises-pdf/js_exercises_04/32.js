function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}

function findSmallestFix(a, b, c) {
  if (c < b && c < a) {
    return c;
  } else if (b < c && b < a) {
    return b;
  } else {
    return a;
  }
}

console.log(findSmallestFix(52, 66, 2));
