// Example 6: Getters to access the class' attributes value

class Ajolonauta {
  constructor(name, age, stack) {
    this.name = name;
    this.age = age;
    this.stack = stack;
    this.exercisesCompleted = 0;
    this.exercisesTodo = 99;
  }

  // We can access the attributies of this class
  get getExercisesCompleted() {
    return this.exercisesCompleted;
  }
}

console.log("Example 6: Getters to access the object's attributes value");
const woopa = new Ajolonauta("Woopa", 1, []);
console.log(woopa.getExercisesCompleted);
