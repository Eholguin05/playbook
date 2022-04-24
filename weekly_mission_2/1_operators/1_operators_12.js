// Example 13: findIndex() method returns the index of the first elements that pass the test implemented
const names = ["Explorer 1", "Explorer", "Explorer 3"];
const result = names.findIndex((name) => name.length < 10);
console.log(
  "Example 13: Index of the first element with a length less than 10 is?  " +
    result
);
