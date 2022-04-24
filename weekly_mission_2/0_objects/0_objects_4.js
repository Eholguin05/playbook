// Example 5: Object with a method which receives parameters
const myPet = {
  name: "Woopa",
  sayHelloToMyPet: function (yourPet) {
    console.log(`${this.name} say's hello to ${yourPet}`);
  },
};

console.log("Example 5: Object with a method which receives parameters");
myPet.sayHelloToMyPet("Babas");
