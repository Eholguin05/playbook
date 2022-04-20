const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

console.log("------Exercise 1------");
// Print each explorer's name using forEach()
explorers.forEach((explorer) => console.log(explorer.name));

console.log("------Exercise 2------");
// Print each explorer's stack using forEach()
explorers.forEach((explorer) => console.log(explorer.stack));

console.log("------Exercise 3------");
// Create a new list with the explorers stack list using map()
var newList = explorers.map((explorer) => explorer.stack);
console.log(newList);

console.log("------Exercise 4------");
// Get a list of explorers of which has "js" in their stack using filter()
newList = explorers.filter((explorer) => explorer.stack.includes("js"));
console.log(newList);

console.log("------Exercise 5------");
// Search the first explorer from the CDMX using find()
const explorer = explorers.find(
  (explorer) => explorer.city.toLowerCase() === "cdmx"
);
console.log(explorer);

console.log("------Exercise 6------");
// Get the sum of every exercises_completed using reduce()
const initialValue = 0;
const sum = explorers.reduce(
  (previousExplorer, currentExplorer) =>
    previousExplorer + currentExplorer.exercises_completed,
  initialValue
);
console.log(sum);

console.log("------Exercise 7------");
// Get the validation if at least one of the explorers has the exercisesFinished property in frontend as true use some()
const isSomeFrontendFinished = explorers.some(
  (explorer) => explorer.missions.frontend.exercisesFinished
);
console.log(isSomeFrontendFinished);

console.log("------Exercise 8------");
// Get the validation if every explorer has the isFinished property if the onboarding as true use some()
const isEveryOnBoardingFinished = explorers.every(
  (explorer) => explorer.missions.onboarding.isFinished
);
console.log(isEveryOnBoardingFinished);
