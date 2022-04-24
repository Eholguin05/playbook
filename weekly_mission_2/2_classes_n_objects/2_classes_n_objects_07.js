// Example 8: Static methods allow us to call them without an instance of the object
class Toolbox {
  static getMostUsefulTools() {
    return ["Command line", "git", "Text Editor"];
  }
}

console.log("Example 8: Static method");
// We can call the static method directly with the class name
console.log(Toolbox.getMostUsefulTools());
// Creating an instance of the class won't allow us to call the method

// const toolbox = new Toolbox()
// console.log(toolbox.getMostUsefulTools()) // is not a function
