
// Example 16: sort() to sort a list of objects
const users = [
  { name: "A", age: 150 },
  { name: "B", age: 50 },
  { name: "C", age: 100 },
  { name: "D", age: 22 },
];

users.sort((a, b) => {
  // Using a function to sort the elements
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});

console.log("Example 16: Sorting the list of objects by the age");
console.log(users); // sorted ascending
