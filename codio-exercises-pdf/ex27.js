const array = ["Hello", "Good Day", "YourWelcome", "hotdog", "hamburgers"];

function count(arr) {
  const report = {};
  arr.forEach((item) => {
    item.toLowerCase();
    for (let i = 0; i < item.length; i++) {
      const char = item[i];
      report[char] = (report[char] || 0) + 1;
    }
  });
  let maxCount = 0;
  let maxLetter = 0;
  for (const i in report) {
    if (report[i] > maxCount) {
      maxCount = report[i];
      maxLetter = i;
    }
  }
  return { report, maxLetter };
}

console.log(count(array));
