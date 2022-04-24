// Example 6: map() to convert to upper case the elements on a list
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
const countriesFirstThreeLetters = countries.map(
  (country) => country.toUpperCase().slice(0, 3) // slice returns a shallow copy of an array selected from start to end (end not included)
);
console.log("Example 6: map to convert to upper case the elements on a list");
console.log(countriesFirstThreeLetters);
