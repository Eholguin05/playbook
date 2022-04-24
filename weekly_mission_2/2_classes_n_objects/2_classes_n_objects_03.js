// Example 4: Object's methods
class Repository {
  constructor(name, author, language, stars) {
    this.name = name;
    this.author = author;
    this.language = language;
    this.stars = stars;
  }

  getInfo() {
    // Is a method that can be executed by every instance of this class
    return `Repository ${this.name} has ${this.stars} stars`;
  }
}
console.log("Example 4: Object's methods");
const myRepo = new Repository("LaunchX", "carlogilmar", "js", 100);
console.log(myRepo.getInfo());
