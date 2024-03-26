const people = ["Greg", "Mary", "Devon", "James"];

people.forEach((i) => console.log(i));
people.shift();
people.pop();
people.unshift("Matt");
people.push("Aleksei");
console.log("===========================");
people.forEach((i) => console.log(i));
console.log(people.slice(2));
console.log("Mary index=>", people.indexOf("Mary"));
console.log(
  "people.splice Elizabeth  Artie=>",
  people.splice(2, 1, "Elizabeth", "Artie")
);
console.log("pepople with Bob", people.concat("Bob"));
const withBob = people.concat("Bob");
