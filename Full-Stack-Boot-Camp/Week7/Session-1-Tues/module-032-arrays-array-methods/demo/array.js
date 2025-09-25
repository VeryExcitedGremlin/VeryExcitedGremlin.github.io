const numbers = [2, 4, 6, 8];
const strings = ["abc", "def", "hij"];
const fruits = ["banana", "kiwi", "cherry", "apple", "strawberry"];

// how do we grab strawberry using array index?

console.log(fruits[4]);

// I want to grab six from the list

// start counting from zero
//2 > 0, 4 > 1, 6> 2

console.log(numbers[2]); //6

// for (let index = 0; index < fruits.length; index++) {
//   const element = fruits[index];
//   console.log(element)
// }

for (const element of fruits) {
  console.log(element);
}

//.forEach()

const myArray = []; // create a new empty array

myArray.push(1);

console.log(myArray);

myArray.push(22);

console.log(myArray);
