// Write a function that calculates the circle area by a given radius
// as an argument. Print the area as it is calculated and then print
// it rounded to two decimal places.
function caculate(radius) {
  const cal = Math.PI * radius * radius;
  console.log("circle=>", cal);
  console.log("rounded cicle=>", cal.toFixed(2));
}

caculate(29);
