// Example 10: every() method tests whether all elements in the array pass the  test implemented
const names = ["Explorer 1", "Explorer 2", "Explorer 3", "Explorer 4"];
const areAllStr = names.every((name) => typeof name === "string"); // every
console.log("Example 10: Are all elements of the array Strings? " + areAllStr);
