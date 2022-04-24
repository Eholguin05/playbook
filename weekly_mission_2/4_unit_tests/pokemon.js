// This example includes dependencies. In your cmd go to this project path and execute the command "npm install" to download the dependencies
// this will create a node_modules folder
export default class Pokemon {
  constructor(name, type, age) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.attacks = [];
  }

  get getAttacks() {
    return this.attacks;
  }

  set setAttacks(attacks) {
    return (this.attacks = attacks);
  }
}

const myPokemon = new Pokemon("Charmander", "Fuego", 10);
console.log(myPokemon);
