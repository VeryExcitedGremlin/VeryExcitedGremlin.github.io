// ============================================
// ARRAY METHODS PRACTICE - BEGINNER LEVEL - COMPLETE
// ============================================

// Starting data
const fruits = ['apple', 'banana', 'cherry'];
const numbers = [1, 2, 3, 4, 5];
const prices = [10, 25, 5, 40, 15];

// ============================================
// PART 1: Basic Array Methods - COMPLETE
// ============================================

// SOLUTION: Use the push() method to add 'orange' to the fruits array
fruits.push('orange');

// SOLUTION: Use the pop() method to remove the last item from fruits
const removedFruit = fruits.pop();

// Test results:
console.log('Fruits after push and pop:', fruits);
// Output: ['apple', 'banana', 'cherry']
console.log('Removed fruit:', removedFruit);
// Output: orange


// ============================================
// PART 2: Finding Elements - COMPLETE
// ============================================

// SOLUTION: Use the find() method to find the first number greater than 3
const foundNumber = numbers.find(num => num > 3);

// SOLUTION: Use the includes() method to check if 'banana' is in the fruits array
const hasBanana = fruits.includes('banana');

// Test results:
console.log('Found number:', foundNumber);
// Output: 4
console.log('Has banana:', hasBanana);
// Output: true


// ============================================
// PART 3: Transforming Arrays - COMPLETE
// ============================================

// SOLUTION: Use the map() method to create a new array with all numbers doubled
const doubledNumbers = numbers.map(num => num * 2);

// SOLUTION: Use the filter() method to create a new array with only prices under 20
const cheapPrices = prices.filter(price => price < 20);

// Test results:
console.log('Original numbers:', numbers);
// Output: [1, 2, 3, 4, 5]
console.log('Doubled numbers:', doubledNumbers);
// Output: [2, 4, 6, 8, 10]
console.log('Original prices:', prices);
// Output: [10, 25, 5, 40, 15]
console.log('Cheap prices:', cheapPrices);
// Output: [10, 5, 15]


// ============================================
// PART 4: Array Information - COMPLETE
// ============================================

// SOLUTION: Use the length property to find how many items are in the fruits array
const fruitCount = fruits.length;

// SOLUTION: Use the indexOf() method to find the position of 'cherry' in fruits
const cherryPosition = fruits.indexOf('cherry');

// Test results:
console.log('Number of fruits:', fruitCount);
// Output: 3
console.log('Cherry is at position:', cherryPosition);
// Output: 2


// ============================================
// BONUS CHALLENGE - COMPLETE
// ============================================

// SOLUTION: Create a new array and use three different array methods
const colors = ['red', 'green', 'blue', 'yellow'];

// Method 1: Add a new color
colors.push('purple');
console.log('After push:', colors);
// Output: ['red', 'green', 'blue', 'yellow', 'purple']

// Method 2: Transform to uppercase
const uppercaseColors = colors.map(color => color.toUpperCase());
console.log('Uppercase colors:', uppercaseColors);
// Output: ['RED', 'GREEN', 'BLUE', 'YELLOW', 'PURPLE']

// Method 3: Filter colors with more than 4 letters
const longColors = colors.filter(color => color.length > 4);
console.log('Long color names:', longColors);
// Output: ['green', 'yellow', 'purple']


// ============================================
// ADDITIONAL EXAMPLES
// ============================================

// More advanced array method combinations:
const inventory = [
    { item: 'apple', price: 1.50, quantity: 20 },
    { item: 'banana', price: 0.80, quantity: 15 },
    { item: 'cherry', price: 3.00, quantity: 8 },
    { item: 'date', price: 2.50, quantity: 12 }
];

// Find expensive items (over $2.00)
const expensiveItems = inventory.filter(product => product.price > 2.00);
console.log('Expensive items:', expensiveItems);

// Calculate total value of each item
const itemValues = inventory.map(product => ({
    item: product.item,
    totalValue: product.price * product.quantity
}));
console.log('Item values:', itemValues);

// Check if any item is out of stock
const hasLowStock = inventory.find(product => product.quantity < 10);
console.log('Low stock item:', hasLowStock);

// Summary of methods used:
console.log('\n=== METHODS SUMMARY ===');
console.log('push() - adds elements to end');
console.log('pop() - removes last element');
console.log('find() - returns first matching element');
console.log('includes() - checks if element exists');
console.log('map() - transforms each element');
console.log('filter() - creates new array with matching elements');
console.log('length - property showing array size');
console.log('indexOf() - finds position of element');