// Example 3: Instance an object with attributes
class Student {
  // The class constructor allow us to create an instance of an object with attributes given as parameters
  constructor(name, age, subjects) {
    this.name = name;
    this.age = age;
    this.subjects = subjects;
  }
}

// Create a class Student object (this is called instantiation)
const carloStudent = new Student("Carlo", 12, ["NodeJs", "Python"]);
console.log("Example 3: Instance an object with attributes");
console.log(carloStudent);
