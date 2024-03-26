function calcAverage(arr) {
  var sum; //var sum=0
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum; //sum/arr.lenght
}
console.log(calcAverage([85, 90, 92]));

function calcAverageFix(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log(sum);
  }
  return sum / arr.length;
}
console.log(calcAverageFix([85, 90, 92]));
