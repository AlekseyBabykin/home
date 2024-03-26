function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const chinaPercentage1 = percentageOfWorld1(1441);
const indiaPercentage1 = percentageOfWorld1(1380);
const usaPercentage1 = percentageOfWorld1(331);

console.log(`China represents ${chinaPercentage1}% of the world population.`);
console.log(`India represents ${indiaPercentage1}% of the world population.`);
console.log(`USA represents ${usaPercentage1}% of the world population.`);

const chinaPercentage2 = percentageOfWorld2(1441);
const indiaPercentage2 = percentageOfWorld2(1380);
const usaPercentage2 = percentageOfWorld2(331);

console.log(`China represents ${chinaPercentage2}% of the world population.`);
console.log(`India represents ${indiaPercentage2}% of the world population.`);
console.log(`USA represents ${usaPercentage2}% of the world population.`);
