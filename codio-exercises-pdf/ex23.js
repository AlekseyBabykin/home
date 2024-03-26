let data = [3, 4, 4, 3, 6, 3];

function remDuplicates(arr) {
  let report = [];

  arr.forEach((item) => {
    if (report.indexOf(item) === -1) {
      report.push(item);
    }
  });

  return report;
}
console.log(remDuplicates(data));
