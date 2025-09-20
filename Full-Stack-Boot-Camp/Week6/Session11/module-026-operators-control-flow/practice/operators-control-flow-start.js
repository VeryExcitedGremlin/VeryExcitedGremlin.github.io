// Operators and Control Flow Practice - Starter Version
// Run this file in Quokka.js or JavaScript REPL for real-time feedback

console.log("=== Operators and Control Flow Practice ===");

// Exercise 1: Arithmetic Operators
// Practice basic math operations and operator precedence

// TODO: Create two variables for numbers
let num1 = 1;
let num2 = 2;

// TODO: Perform basic math operations (+, -, *, /, %)
// TODO: Try subtraction
console.log(num1 - num2);

// TODO: Try multiplication
console.log(num1 * num2);

// TODO: Try division
console.log(num1 / num2);

// TODO: Try modulus (remainder)
console.log(num1 % num2);

// TODO: Use increment and decrement operators
// TODO: Increment counter by 1 using ++
console.log(num1++);
console.log(num1);

// TODO: Decrement counter by 1 using --
console.log(num1--);
console.log(num1);

// TODO: Use compound assignment operators
// TODO: Add 50 to score using +=
score = 0;
score += 50;
console.log(score);

// TODO: Multiply score by 2 using *=
score *= 2;
console.log(score);

console.log("Exercise 1 completed!");

// Exercise 2: Comparison Operators
// Practice equality and relational comparisons

// TODO: Create variables to test comparisons
string = "2";

// TODO: Compare using equality (==) - checks value only
console.log(num2 == string);

// TODO: Compare using strict equality (===) - checks value and type
console.log(num2 === string);

// TODO: Try inequality (!=) and strict inequality (!==)
console.log(num2 != string);
console.log(num2 !== string);

// TODO: Use relational operators (<, >, <=, >=)
console.log(num2 < num2);
console.log(num1 > num2);
console.log(num2 <= num2);
console.log(num1 >= num2);

console.log("Exercise 2 completed!");

// Exercise 3: Logical Operators
// Practice combining conditions

// TODO: Create variables for logical operator examples
grade = 50;
perfect = 100;
failing = 50;

// TODO: Use AND (&&) operator - both conditions must be true
console.log(grade > failing && grade < perfect);

// TODO: Use OR (||) operator - at least one condition must be true
// TODO: Use NOT (!) operator to negate a boolean
console.log(grade >= failing || grade != perfect);

// TODO: Combine multiple logical operators
console.log((grade >= failing || grade == perfect) && grade < failing);

console.log("Exercise 3 completed!");

// Exercise 4: Conditional Statements
// Practice if/else statements, switch statements, and ternary operator

// TODO: Create a temperature variable
temperature = 65;

// TODO: Write an if statement
if (temperature > 70) {
  console.log("It's hot today!");
}

// TODO: Add else if for multiple conditions
else if (temperature < 60) {
  console.log("It's a chilly one!");
}

// TODO: Add an else statement
else {
  console.log("It's a nice day out!");
}

// TODO: Use ternary operator for simple condition
// Format: condition ? valueIfTrue : valueIfFalse
temperature > 70
  ? console.log("It's hot today!")
  : console.log("It's a chilly one!");

// TODO: Use switch statement for day of the week
// Create a variable for day of the week and a switch statement that prints the day name
day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Satday");
    break;
  case 7:
    console.log("Sunday");
    break;
}

console.log("Exercise 4 completed!");

// Exercise 5: Loop Structures
// Practice for loops, while loops, and loop control

// TODO: Create a for loop that counts from 1 to 5

// TODO: Create a while loop that counts down from 5 to 1

// TODO: Challenge - Create a for loop from 1 to 10, but use break to exit when you reach 6

// TODO: Challenge - Create a for loop from 1 to 5, but use continue to skip number 3

// TODO: Create a nested loop (loop inside a loop)

console.log("Exercise 5 completed!");
console.log(
  "All exercises completed! Run the complete version to see solutions."
);
