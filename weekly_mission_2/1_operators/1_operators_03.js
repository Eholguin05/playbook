
// Example 4: map() to get every single element from a list and create a new one
/*
  Arrow function and explicit return
  const modifiedArray = arr.map((element,index) => element);
*/
const numbers = [1, 2, 3, 4, 5];
const numbersSquare = numbers.map(function (num) {
  return num * num;
});
// The function can also be writtern in fat arrow
// const numbersSquare = numbers4.map((num) => return num * num)
console.log("Example 4: Printing the list of square elements");
console.log(numbersSquare);
