// ============================================
// OBJECT METHODS PRACTICE - BEGINNER LEVEL - COMPLETE
// ============================================

// Starting data
const student = {
    name: 'Alex',
    age: 20,
    major: 'Computer Science',
    gpa: 3.5
};

const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'blue'
};

// ============================================
// PART 1: Getting Object Information - COMPLETE
// ============================================

// SOLUTION: Use Object.keys() to get all the property names from the student object
const studentProperties = Object.keys(student);

// SOLUTION: Use Object.values() to get all the values from the car object
const carValues = Object.values(car);

// Test results:
console.log('Student properties:', studentProperties);
// Output: ['name', 'age', 'major', 'gpa']
console.log('Car values:', carValues);
// Output: ['Toyota', 'Camry', 2020, 'blue']


// ============================================
// PART 2: Adding and Modifying Properties - COMPLETE
// ============================================

// SOLUTION: Add a new property 'email' to the student object
student.email = 'alex@school.edu';

// SOLUTION: Change the car's color from 'blue' to 'red'
car.color = 'red';

// SOLUTION: Add a new property 'mileage' to the car object
car.mileage = 15000;

// Test results:
console.log('Updated student:', student);
// Output: { name: 'Alex', age: 20, major: 'Computer Science', gpa: 3.5, email: 'alex@school.edu' }
console.log('Updated car:', car);
// Output: { brand: 'Toyota', model: 'Camry', year: 2020, color: 'red', mileage: 15000 }


// ============================================
// PART 3: Checking Properties - COMPLETE
// ============================================

// SOLUTION: Use hasOwnProperty() to check if student has a 'name' property
const hasName = student.hasOwnProperty('name');

// SOLUTION: Use the 'in' operator to check if 'price' exists in the car object
const hasPrice = 'price' in car;

// Test results:
console.log('Student has name property:', hasName);
// Output: true
console.log('Car has price property:', hasPrice);
// Output: false


// ============================================
// PART 4: Object Entries - COMPLETE
// ============================================

// SOLUTION: Use Object.entries() to get key-value pairs from the student object
const studentEntries = Object.entries(student);

// Test results:
console.log('Student entries:', studentEntries);
// Output: [['name', 'Alex'], ['age', 20], ['major', 'Computer Science'], ['gpa', 3.5], ['email', 'alex@school.edu']]


// ============================================
// PART 5: Creating Objects from Arrays - COMPLETE
// ============================================

const keys = ['title', 'author', 'pages'];
const values = ['The Great Gatsby', 'F. Scott Fitzgerald', 180];

// SOLUTION: Use Object.fromEntries() to create a book object
// First, combine keys and values into pairs, then create object
const pairs = keys.map((key, index) => [key, values[index]]);
const book = Object.fromEntries(pairs);

// Alternative one-liner solution:
// const book = Object.fromEntries(keys.map((key, index) => [key, values[index]]));

// Test results:
console.log('Created book object:', book);
// Output: { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180 }


// ============================================
// BONUS CHALLENGE - COMPLETE
// ============================================

// SOLUTION: Create a person object and use all three methods
const person = {
    firstName: 'Emma',
    lastName: 'Wilson',
    occupation: 'Designer',
    city: 'San Francisco'
};

const personKeys = Object.keys(person);
const personValues = Object.values(person);
const personEntries = Object.entries(person);

console.log('Person keys:', personKeys);
// Output: ['firstName', 'lastName', 'occupation', 'city']
console.log('Person values:', personValues);
// Output: ['Emma', 'Wilson', 'Designer', 'San Francisco']
console.log('Person entries:', personEntries);
// Output: [['firstName', 'Emma'], ['lastName', 'Wilson'], ['occupation', 'Designer'], ['city', 'San Francisco']]


// ============================================
// ADDITIONAL EXAMPLES
// ============================================

// Working with nested objects
const company = {
    name: 'Tech Corp',
    employees: {
        developers: 25,
        designers: 8,
        managers: 5
    },
    location: 'New York'
};

console.log('Company keys:', Object.keys(company));
// Output: ['name', 'employees', 'location']

console.log('Employee department keys:', Object.keys(company.employees));
// Output: ['developers', 'designers', 'managers']

console.log('Employee counts:', Object.values(company.employees));
// Output: [25, 8, 5]

// Using Object.assign() to merge objects
const baseConfig = { theme: 'dark', language: 'en' };
const userConfig = { theme: 'light', notifications: true };
const finalConfig = Object.assign({}, baseConfig, userConfig);

console.log('Final config:', finalConfig);
// Output: { theme: 'light', language: 'en', notifications: true }

// Converting object to array for processing
const scores = { math: 95, science: 87, english: 92, history: 89 };
const scoreEntries = Object.entries(scores);
const highScores = scoreEntries.filter(([subject, score]) => score > 90);
console.log('High scores:', highScores);
// Output: [['math', 95], ['english', 92]]

// Summary of methods used:
console.log('\n=== OBJECT METHODS SUMMARY ===');
console.log('Object.keys() - returns array of property names');
console.log('Object.values() - returns array of property values');
console.log('Object.entries() - returns array of [key, value] pairs');
console.log('hasOwnProperty() - checks if object has specific property');
console.log('in operator - also checks for property existence');
console.log('Object.fromEntries() - creates object from key-value pairs');
console.log('Object.assign() - merges objects together');