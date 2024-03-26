const johnScores = [89, 120, 103];

const mikeScores = [116, 94, 123];

const maryScores = [97, 134, 105];

const calculateAverage = (scores) => {
  const total = scores.reduce((acc, score) => acc + score, 0);
  return total / scores.length;
};

const johnAverage = calculateAverage(johnScores);
const mikeAverage = calculateAverage(mikeScores);
const maryAverage = calculateAverage(maryScores);

const determineWinner = (name, average) => {
  console.log(`${name}'s team average score: ${average}`);
};

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
  determineWinner("John", johnAverage);
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
  determineWinner("Mike", mikeAverage);
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
  determineWinner("Mary", maryAverage);
} else {
  console.log("It's a draw!");
}
