const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function compare(arr, arr1) {
  let sameName = [];
  for (let i in arr) {
    for (let j in arr1) {
      if (arr[i] === arr1[j]) {
        sameName.push(arr[i]);
      }
    }
  }
  if (!sameName.length) {
    return false;
  }
  return sameName;
}

console.log(compare(food, food1));
