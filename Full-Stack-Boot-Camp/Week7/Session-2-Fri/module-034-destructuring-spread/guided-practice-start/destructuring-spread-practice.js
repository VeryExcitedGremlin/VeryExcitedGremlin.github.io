// ============================================
// DESTRUCTURING & SPREAD OPERATOR PRACTICE - BEGINNER LEVEL
// ============================================

// Starting data
const person = {
    firstName: 'Sarah',
    lastName: 'Johnson',
    age: 28,
    city: 'New York'
};

const colors = ['red', 'green', 'blue'];
const numbers = [1, 2, 3, 4, 5];

// ============================================
// PART 1: Object Destructuring Basics
// ============================================

// TODO: Use destructuring to extract firstName and age from the person object
// Store them in variables with the same names
// Write your code here:
const {firstName, age} = person;
console.log(firstName)
console.log(age)

// TODO: Use destructuring with renaming to extract city as 'location'
// Write your code here:


// Test (uncomment to see results):
// console.log('First Name:', firstName);
// console.log('Age:', age);
// console.log('Location:', location);


// ============================================
// PART 2: Array Destructuring Basics
// ============================================

// TODO: Use destructuring to get the first and second colors
// Store them in variables called 'primaryColor' and 'secondaryColor'
// Write your code here:


// TODO: Use destructuring to get the first number and skip the second,
// then get the third number. Store as 'first' and 'third'
// Write your code here:


// Test (uncomment to see results):
// console.log('Primary Color:', primaryColor);
// console.log('Secondary Color:', secondaryColor);
// console.log('First Number:', first);
// console.log('Third Number:', third);


// ============================================
// PART 3: Spread Operator with Arrays
// ============================================

const moreColors = ['yellow', 'purple'];

// TODO: Use the spread operator to combine colors and moreColors into a new array
// Store the result in a variable called 'allColors'
// Write your code here:


const newNumbers = [6, 7, 8];

// TODO: Use the spread operator to create an array that has:
// numbers first, then newNumbers. Store as 'combinedNumbers'
// Write your code here:


// Test (uncomment to see results):
// console.log('All Colors:', allColors);
// console.log('Combined Numbers:', combinedNumbers);


// ============================================
// PART 4: Spread Operator with Objects
// ============================================

const address = {
    street: '123 Main St',
    zipCode: '10001'
};

// TODO: Use the spread operator to create a new object that combines
// person and address. Store as 'fullProfile'
// Write your code here:


// TODO: Use the spread operator to create a copy of person but change the age to 29
// Store as 'updatedPerson'
// Write your code here:


// Test (uncomment to see results):
// console.log('Full Profile:', fullProfile);
// console.log('Updated Person:', updatedPerson);
// console.log('Original Person:', person); // Should be unchanged


// ============================================
// PART 5: Rest Parameter
// ============================================

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// TODO: Use destructuring with rest parameter to get the first fruit
// and put the remaining fruits in a 'restOfFruits' array
// Write your code here:


// Test (uncomment to see results):
// console.log('First Fruit:', /* your first fruit variable */);
// console.log('Rest of Fruits:', restOfFruits);


// ============================================
// BONUS CHALLENGE
// ============================================

// TODO: Create a function that uses destructuring in its parameters
// The function should take an object with name and age properties
// and return a greeting string
// Example: greetPerson({name: "Tom", age: 25}) returns "Hello Tom, you are 25 years old"

// Write your function here:


// Test your function (uncomment to test):
// console.log(greetPerson({name: "Alice", age: 30}));


// Notes for beginners:
// - Destructuring extracts values from objects/arrays into variables
// - Use {} for object destructuring, [] for array destructuring
// - Spread operator (...) expands arrays/objects into individual elements
// - Rest parameter (...) collects remaining elements into an array
// - Destructuring can rename variables: {oldName: newName}
// - You can skip array elements with empty commas: [first, , third]