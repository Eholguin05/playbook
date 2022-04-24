// Example 7: filter() to create a new list with all elements that pass the test implemented
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
const countriesContainingLand = countries.filter(
  (
    country // Here starts the function
  ) => country.includes("land") // filter the elements that includes the word land
);
console.log(
  "Example 7: filter to create a new list with all elements that pass the test implemented"
);
console.log(countriesContainingLand);
const countriesEndsByia = countries.filter((country) => country.endsWith("ia"));
console.log("Example 7: Countries that ends with ia");
console.log(countriesEndsByia);
