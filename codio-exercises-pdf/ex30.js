// function isString(str, callback) {
//   if (typeof str === "string") {
//     callback(str);
//   } else {
//     console.log("is not string");
//   }
// }

function callback(string) {
  const write = string.replace(/\s+/g, "-");
  console.log(write);
}
function firstWordUpperCase(str, callback) {
  const words = str.split(" ");
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  console.log(words[0]);
  const string = words.join(" ");
  callback(string);
}
firstWordUpperCase("hdfhsghsgsf sdvffdbd sfgddfd", callback);

function myFunction(callback) {
  console.log("Inside");

  callback();
}

myFunction(function () {
  console.log("from myFunction");
});
