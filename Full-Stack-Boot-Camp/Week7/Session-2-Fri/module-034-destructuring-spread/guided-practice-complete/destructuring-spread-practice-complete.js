// ============================================
// DESTRUCTURING & SPREAD OPERATOR PRACTICE - BEGINNER LEVEL - COMPLETE
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
// PART 1: Object Destructuring Basics - COMPLETE
// ============================================

// SOLUTION: Use destructuring to extract firstName and age from the person object
const { firstName, age } = person;

// SOLUTION: Use destructuring with renaming to extract city as 'location'
const { city: location } = person;

// Test results:
console.log('First Name:', firstName);
// Output: Sarah
console.log('Age:', age);
// Output: 28
console.log('Location:', location);
// Output: New York


// ============================================
// PART 2: Array Destructuring Basics - COMPLETE
// ============================================

// SOLUTION: Use destructuring to get the first and second colors
const [primaryColor, secondaryColor] = colors;

// SOLUTION: Use destructuring to get the first number, skip the second, then get the third
const [first, , third] = numbers;

// Test results:
console.log('Primary Color:', primaryColor);
// Output: red
console.log('Secondary Color:', secondaryColor);
// Output: green
console.log('First Number:', first);
// Output: 1
console.log('Third Number:', third);
// Output: 3


// ============================================
// PART 3: Spread Operator with Arrays - COMPLETE
// ============================================

const moreColors = ['yellow', 'purple'];

// SOLUTION: Use the spread operator to combine colors and moreColors
const allColors = [...colors, ...moreColors];

const newNumbers = [6, 7, 8];

// SOLUTION: Use the spread operator to create an array with numbers first, then newNumbers
const combinedNumbers = [...numbers, ...newNumbers];

// Test results:
console.log('All Colors:', allColors);
// Output: ['red', 'green', 'blue', 'yellow', 'purple']
console.log('Combined Numbers:', combinedNumbers);
// Output: [1, 2, 3, 4, 5, 6, 7, 8]


// ============================================
// PART 4: Spread Operator with Objects - COMPLETE
// ============================================

const address = {
    street: '123 Main St',
    zipCode: '10001'
};

// SOLUTION: Use the spread operator to combine person and address
const fullProfile = { ...person, ...address };

// SOLUTION: Use the spread operator to copy person but change the age to 29
const updatedPerson = { ...person, age: 29 };

// Test results:
console.log('Full Profile:', fullProfile);
// Output: { firstName: 'Sarah', lastName: 'Johnson', age: 28, city: 'New York', street: '123 Main St', zipCode: '10001' }
console.log('Updated Person:', updatedPerson);
// Output: { firstName: 'Sarah', lastName: 'Johnson', age: 29, city: 'New York' }
console.log('Original Person:', person);
// Output: { firstName: 'Sarah', lastName: 'Johnson', age: 28, city: 'New York' } (unchanged)


// ============================================
// PART 5: Rest Parameter - COMPLETE
// ============================================

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// SOLUTION: Use destructuring with rest parameter to get first fruit and the rest
const [firstFruit, ...restOfFruits] = fruits;

// Test results:
console.log('First Fruit:', firstFruit);
// Output: apple
console.log('Rest of Fruits:', restOfFruits);
// Output: ['banana', 'cherry', 'date', 'elderberry']


// ============================================
// BONUS CHALLENGE - COMPLETE
// ============================================

// SOLUTION: Function that uses destructuring in its parameters
function greetPerson({ name, age }) {
    return `Hello ${name}, you are ${age} years old`;
}

// Test the function:
console.log(greetPerson({ name: "Alice", age: 30 }));
// Output: Hello Alice, you are 30 years old

console.log(greetPerson({ name: "Tom", age: 25 }));
// Output: Hello Tom, you are 25 years old


// ============================================
// ADDITIONAL EXAMPLES
// ============================================

// Advanced destructuring patterns:

// Nested object destructuring
const employee = {
    info: {
        name: 'John',
        role: 'Developer'
    },
    department: 'Engineering'
};

const { info: { name: employeeName, role }, department } = employee;
console.log('Employee name:', employeeName, 'Role:', role, 'Department:', department);
// Output: Employee name: John Role: Developer Department: Engineering

// Array destructuring with defaults
const coordinates = [10];
const [x, y = 0, z = 0] = coordinates;
console.log('Coordinates:', x, y, z);
// Output: Coordinates: 10 0 0

// Object destructuring with defaults
const settings = { theme: 'dark' };
const { theme, language = 'en', notifications = true } = settings;
console.log('Settings:', theme, language, notifications);
// Output: Settings: dark en true

// Swapping variables with destructuring
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log('After swap - a:', a, 'b:', b);
// Output: After swap - a: 10 b: 5

// Function returning multiple values
function getUser() {
    return {
        id: 123,
        username: 'johndoe',
        email: 'john@example.com'
    };
}

const { id, username, email } = getUser();
console.log('User:', id, username, email);
// Output: User: 123 johndoe john@example.com

// Rest with objects
const config = {
    apiKey: 'abc123',
    timeout: 5000,
    retries: 3,
    debug: true,
    cache: false
};

const { apiKey, timeout, ...otherOptions } = config;
console.log('API Key:', apiKey);
console.log('Timeout:', timeout);
console.log('Other options:', otherOptions);
// Output: Other options: { retries: 3, debug: true, cache: false }

// Summary of concepts:
console.log('\n=== DESTRUCTURING & SPREAD SUMMARY ===');
console.log('Object destructuring: { prop1, prop2 } = object');
console.log('Array destructuring: [item1, item2] = array');
console.log('Renaming: { oldName: newName } = object');
console.log('Skipping array items: [first, , third] = array');
console.log('Spread arrays: [...array1, ...array2]');
console.log('Spread objects: { ...obj1, ...obj2 }');
console.log('Rest parameter: [first, ...rest] = array');
console.log('Default values: { prop = defaultValue } = object');