function getSumOfEven(arr) {
  return arr[2] + arr[4] + arr[6] + arr[8] + arr[10]; // arr[10]- not exist
}

console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function getSumOfEvenFix(arr) {
  let sum = 0;
  for (let i = 1; i < arr.length; i += 2) {
    sum += arr[i];
  }

  return sum;
}
console.log(getSumOfEvenFix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
