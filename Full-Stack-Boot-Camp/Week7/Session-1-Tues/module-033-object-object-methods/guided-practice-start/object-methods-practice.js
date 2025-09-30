// ============================================
// OBJECT METHODS PRACTICE - BEGINNER LEVEL
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
// PART 1: Getting Object Information
// ============================================

// TODO: Use Object.keys() to get all the property names from the student object
// Store the result in a variable called 'studentProperties'
// Write your code here:
studentProperties = Object.keys(student);

// TODO: Use Object.values() to get all the values from the car object
// Store the result in a variable called 'carValues'
// Write your code here:
carValues = Object.values(car);

// Test (uncomment to see results):
console.log('Student properties:', studentProperties);
console.log('Car values:', carValues);


// ============================================
// PART 2: Adding and Modifying Properties
// ============================================

// TODO: Add a new property 'email' to the student object with value 'alex@school.edu'
// Write your code here:
student.email = 'alex@school.edu';

// TODO: Change the car's color from 'blue' to 'red'
// Write your code here:
car.color = 'red';

// TODO: Add a new property 'mileage' to the car object with value 15000
// Write your code here:
car.mileage = 15000;

// Test (uncomment to see results):
console.log('Updated student:', student);
console.log('Updated car:', car);


// ============================================
// PART 3: Checking Properties
// ============================================

// TODO: Use hasOwnProperty() to check if student has a 'name' property
// Store the result in a variable called 'hasName'
// Write your code here:
hasName = student.hasOwnProperty('name');

// TODO: Use the 'in' operator to check if 'price' exists in the car object
// Store the result in a variable called 'hasPrice'
// Write your code here:
hasPrice = 'price' in car;

// Test (uncomment to see results):
console.log('Student has name property:', hasName);
console.log('Car has price property:', hasPrice);


// ============================================
// PART 4: Object Entries
// ============================================

// TODO: Use Object.entries() to get key-value pairs from the student object
// Store the result in a variable called 'studentEntries'
// Write your code here:
studentEntries = Object.entries(student);

// Test (uncomment to see results):
console.log('Student entries:', studentEntries);


// ============================================
// PART 5: Creating Objects from Arrays
// ============================================

const keys = ['title', 'author', 'pages'];
const values = ['The Great Gatsby', 'F. Scott Fitzgerald', 180];

// TODO: Use Object.fromEntries() with zip-like functionality to create a book object
// Hint: You'll need to combine keys and values into pairs first
// Store the result in a variable called 'book'
// Write your code here:
pairs = [];
for (let i = 0; i < keys.length; i++) {pairs.push([keys[i], values[i]])}
book = Object.fromEntries(pairs);

// Test (uncomment to see results):
console.log('Created book object:', book);


// ============================================
// BONUS CHALLENGE
// ============================================

// TODO: Create a person object with at least 4 properties
// Then use Object.keys(), Object.values(), and Object.entries() on it
// Log all three results

// Write your bonus code here:
person = {
name: 'Sam',
age: 6,
grade: 1,
toy: 'plane'
}

personKeys = Object.keys(person);
personValues = Object.values(person);
personEntries = Object.entries(person);

console.log(personKeys);
console.log(personValues);
console.log(personEntries);

// Notes for beginners:
// - Object.keys() returns an array of property names
// - Object.values() returns an array of property values  
// - Object.entries() returns an array of [key, value] pairs
// - hasOwnProperty() checks if an object has a specific property
// - 'in' operator also checks for property existence
// - You can add properties with dot notation (obj.prop = value)
// - You can modify properties the same way