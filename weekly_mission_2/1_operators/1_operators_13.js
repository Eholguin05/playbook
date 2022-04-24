// Example 14: some() returns whether at least one element in the array passes the test implemented
const bools = [true, true, false, true];
// some() to indicate if at least one element is false
const areSomeTrue = bools.some((b) => b === false);
console.log(
  "Example 14: Is one of the elements in the array false? " + areSomeTrue
); // true
