// array methods are just functions assoiciated with the array data type

const fruits = ["banana", "kiwi", "cherry", "apple", "strawberry"];

// fruits has functions we can use

// for any method

// what are the inputs (sometimes there are many different ways to call a method)
// could take in 1 parameter, or it could take in 3
// does it modify the array?

// whats the expected output

console.log(fruits.push("grapes")); // what does this return? its a number

console.log(fruits);

// pop - remove a element from the end of the array, and return it to where it was called

console.log(fruits.pop());

console.log(fruits); //back to how it was before

// shift and unshift - instead of the end of the array, add and remove from the beginning
fruits.unshift("grapes");
console.log(fruits);

console.log(fruits.shift());
console.log(fruits);

//  map, find, includes, filter, reduce, some, every, splice, slice

// filter
function moreThanSixCharacters(str) {
  if (str.length > 6) {
    return true;
  }
  return false;
  // return str.length > 6;
}

console.log(fruits.filter(moreThanSixCharacters));

console.log(fruits);

console.log(
  fruits.filter((str) => {
    return str.length > 6;
  })
);

// you would have to write the following or similar to create a custom filter

// function filterArray(array){
// let newArray = []
// for (let index = 0; index < array.length; index++) {
//   if (item[array].length > 6) {
//     newArray.push(item);
//   }
// }
// return newArray;
// }

// fruits.filter(str =>  str.length > 6)

const newFruits = fruits.map((e) => {
  return e + "s are great";
});

console.log(newFruits);

//reduce summing values and manipulating values
