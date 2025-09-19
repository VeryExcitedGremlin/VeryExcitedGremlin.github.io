// Operators and Control Flow Practice - Complete Version
// Run this file in Quokka.js or JavaScript REPL for real-time feedback

console.log("=== Operators and Control Flow Practice - Complete ===");

// Exercise 1: Arithmetic Operators
// Practice basic math operations and operator precedence

let num1 = 10;
let num2 = 3;

console.log("Basic Math Operations:");
console.log("Addition:", num1 + num2); // 13
console.log("Subtraction:", num1 - num2); // 7
console.log("Multiplication:", num1 * num2); // 30
console.log("Division:", num1 / num2); // 3.333...
console.log("Modulus (remainder):", num1 % num2); // 1

// Operator precedence
console.log("Precedence example:", 2 + 3 * 4); // 14 (not 20)
console.log("With parentheses:", (2 + 3) * 4); // 20

// Increment and decrement operators
let counter = 5;
console.log("Counter before increment:", counter);
counter++; // increment by 1
console.log("Counter after increment:", counter);
counter--; // decrement by 1
console.log("Counter after decrement:", counter);

// Compound assignment operators
let score = 100;
console.log("Initial score:", score);
score += 50; // same as score = score + 50
console.log("After adding 50:", score);
score *= 2; // same as score = score * 2
console.log("After multiplying by 2:", score);
score /= 3; // same as score = score / 3
console.log("After dividing by 3:", score);

console.log("Exercise 1 completed!");

// Exercise 2: Comparison Operators
// Practice equality and relational comparisons

let a = 5;
let b = "5";
let c = 10;

console.log("Comparison Examples:");
console.log("5 == '5':", a == b); // true (checks value only)
console.log("5 === '5':", a === b); // false (checks value and type)
console.log("5 != '5':", a != b); // false
console.log("5 !== '5':", a !== b); // true

console.log("Relational operators:");
console.log("5 < 10:", a < c); // true
console.log("5 > 10:", a > c); // false
console.log("5 <= 5:", a <= a); // true
console.log("10 >= 5:", c >= a); // true

console.log("Exercise 2 completed!");

// Exercise 3: Logical Operators
// Practice combining conditions

let age = 25;
let hasLicense = true;
let hasInsurance = false;

// AND operator - both conditions must be true
let canDrive = age >= 18 && hasLicense;
console.log("Can drive (age >= 18 AND has license):", canDrive);

// OR operator - at least one condition must be true
let canGetInsurance = age >= 16 || hasInsurance;
console.log("Can get insurance (age >= 16 OR has insurance):", canGetInsurance);

// NOT operator - negates boolean value
let needsLicense = !hasLicense;
console.log("Needs license (NOT has license):", needsLicense);

// Complex logical expression
let canDriveCommercial = age >= 21 && hasLicense && hasInsurance;
console.log("Can drive commercial vehicle:", canDriveCommercial);

console.log("Exercise 3 completed!");

// Exercise 4: Conditional Statements
// Practice if/else statements, switch statements, and ternary operator

let temperature = 75;

console.log("Temperature is:", temperature);

// if/else if/else chain
if (temperature > 80) {
    console.log("It's hot outside!");
} else if (temperature > 60) {
    console.log("It's pleasant outside!");
} else if (temperature > 40) {
    console.log("It's cool outside!");
} else {
    console.log("It's cold outside!");
}

// Ternary operator for simple conditions
let weatherDescription = temperature > 70 ? "warm" : "cool";
console.log("Weather is:", weatherDescription);

// Nested ternary (more complex)
let clothing = temperature > 80 ? "shorts" : temperature > 60 ? "jeans" : "jacket";
console.log("Recommended clothing:", clothing);

// Switch statement example
let dayOfWeek = 3; // 1=Monday, 2=Tuesday, etc.
console.log("Day number:", dayOfWeek);

switch (dayOfWeek) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day number");
}

console.log("Exercise 4 completed!");

// Exercise 5: Loop Structures
// Practice for loops, while loops, and loop control

console.log("For loop counting 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

console.log("While loop counting down from 5:");
let countdown = 5;
while (countdown > 0) {
    console.log("Countdown:", countdown);
    countdown--;
}

console.log("Challenge - Loop with break (stops at 6):");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("Breaking at", i);
        break;
    }
    console.log("Number:", i);
}

console.log("Challenge - Loop with continue (skips 3):");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping", i);
        continue;
    }
    console.log("Number:", i);
}

console.log("Nested loop (multiplication table 2x2):");
for (let row = 1; row <= 2; row++) {
    for (let col = 1; col <= 2; col++) {
        console.log(`${row} x ${col} = ${row * col}`);
    }
}

console.log("Exercise 5 completed!");
console.log("All exercises completed! 🎉");