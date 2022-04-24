// Example 8: filter() a list with a conditional
const scores = [
  { name: "A", score: 95 },
  { name: "L", score: 98 },
  { name: "M", score: 80 },
  { name: "E", score: 50 },
  { name: "M", score: 85 },
  { name: "J", score: 100 },
];

const scoresGreaterThan80 = scores.filter((score) => score.score > 80);
console.log("Example 8: Filtering elements by score");
console.log(scoresGreaterThan80);
