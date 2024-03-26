const populations = [100, 200, 300, 400];

function populationPercentages(populationArray) {
  const percentages = [];

  for (let i = 0; i < populationArray.length; i++) {
    const percentage = percentageOfWorld1(populationArray[i]);

    percentages.push(percentage);
  }

  return percentages;
}

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const result = populationPercentages(populations);
console.log(result);
