// ============================================
// ARRAY METHODS PRACTICE - BEGINNER LEVEL
// ============================================

// Starting data
const fruits = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3, 4, 5];
const prices = [10, 25, 5, 40, 15];

// ============================================
// PART 1: Basic Array Methods
// ============================================

// TODO: Use the push() method to add 'orange' to the fruits array
// Write your code here:
fruits.push("orange");
console.log(fruits);

// TODO: Use the pop() method to remove the last item from fruits
// Store the removed item in a variable called 'removedFruit'
// Write your code here:
removedFruit = fruits.pop();
// console.log(removedFruit);
// console.log(fruits);

// Test (uncomment to see results):
console.log('Fruits after push and pop:', fruits);
console.log('Removed fruit:', removedFruit);

// ============================================
// PART 2: Finding Elements
// ============================================

// TODO: Use the find() method to find the first number greater than 3
// Store the result in a variable called 'foundNumber'
// Write your code here:
numbers.find(

// TODO: Use the includes() method to check if 'banana' is in the fruits array
// Store the result in a variable called 'hasBanana'
// Write your code here:

// Test (uncomment to see results):
// console.log('Found number:', foundNumber);
// console.log('Has banana:', hasBanana);

// ============================================
// PART 3: Transforming Arrays
// ============================================

// TODO: Use the map() method to create a new array with all numbers doubled
// Store the result in a variable called 'doubledNumbers'
// Write your code here:

// TODO: Use the filter() method to create a new array with only prices under 20
// Store the result in a variable called 'cheapPrices'
// Write your code here:

// Test (uncomment to see results):
// console.log('Original numbers:', numbers);
// console.log('Doubled numbers:', doubledNumbers);
// console.log('Original prices:', prices);
// console.log('Cheap prices:', cheapPrices);

// ============================================
// PART 4: Array Information
// ============================================

// TODO: Use the length property to find how many items are in the fruits array
// Store the result in a variable called 'fruitCount'
// Write your code here:

// TODO: Use the indexOf() method to find the position of 'cherry' in fruits
// Store the result in a variable called 'cherryPosition'
// Write your code here:

// Test (uncomment to see results):
// console.log('Number of fruits:', fruitCount);
// console.log('Cherry is at position:', cherryPosition);

// ============================================
// BONUS CHALLENGE
// ============================================

// TODO: Create a new array called 'colors' with at least 4 color names
// Then use THREE different array methods on it and log the results

// Write your bonus code here:

// Notes for beginners:
// - push() adds to the end, pop() removes from the end
// - find() returns the first matching element
// - includes() returns true/false
// - map() creates a new array by transforming each element
// - filter() creates a new array with elements that pass a test
// - length gives you the number of elements
// - indexOf() tells you the position of an element (starts at 0)
