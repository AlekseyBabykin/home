function max(arr) {
  return arr.reduce((acc, curr) => (curr > acc ? curr : acc));
}

function even(arr) {
  return arr.reduce((acc, curr) => (curr % 2 === 0 ? acc + curr : acc), 0);
}

function aver(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}

const arr = [1, 2, 3, 4, 5];
console.log(max(arr));
console.log(even(arr));
console.log(aver(arr));
