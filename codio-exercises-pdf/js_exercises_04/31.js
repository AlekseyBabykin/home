function getSum(arr1, arr2) {
  const sum = 0; // let
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  console.log("sum1=>", sum);
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  console.log("sum2=>", sum);
}
getSum([1, 2, 3], [5, 66, 23]);
