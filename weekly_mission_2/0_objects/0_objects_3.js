// Example 4: Object with methods
const pet = {
  name: "Mimis",
  // This function is stored as property
  sayHello: function () {
    // this.name refers to the object property
    console.log(`${this.name} greets you!`);
  },
};

console.log("Example 4: Object with methods");
pet.sayHello();
