// ============================================
// HIGHER ORDER FUNCTIONS PRACTICE - COMPLETE
// ============================================

// A higher-order function that performs calculations on an array of numbers
function processNumbers(numbers, operation) {
    const results = [];
    for (let i = 0; i < numbers.length; i++) {
        const result = operation(numbers[i]);
        results.push(result);
    }
    return results;
}

// Test data
const testNumbers = [2, 4, 6, 8, 10];

// ============================================
// PART 1: Using a Named Function - COMPLETE
// ============================================

// SOLUTION: Named function that doubles and adds 5
function doubleAndAdd5(number) {
    return number * 2 + 5;
}

// SOLUTION: Use the processNumbers higher-order function with the named function
const part1Result = processNumbers(testNumbers, doubleAndAdd5);

// Test result:
console.log("Part 1 Result:", part1Result);
// Output: [9, 13, 17, 21, 25]


// ============================================
// PART 2: Using an Anonymous Function - COMPLETE
// ============================================

// SOLUTION: Use processNumbers with an anonymous function that squares and subtracts 1
const part2Result = processNumbers(testNumbers, function(number) {
    return number * number - 1;
});

// Test result:
console.log("Part 2 Result:", part2Result);
// Output: [3, 15, 35, 63, 99]


// ============================================
// COMPARISON & TESTING - COMPLETE
// ============================================

console.log("\n=== COMPARISON ===");
console.log("Original numbers:", testNumbers);
console.log("Part 1 (named function):", part1Result);
console.log("Part 2 (anonymous function):", part2Result);


// ============================================
// BONUS CHALLENGE - COMPLETE
// ============================================

// SOLUTION: filterAndTransform higher-order function
function filterAndTransform(numbers, filterFn, transformFn) {
    const results = [];
    for (let i = 0; i < numbers.length; i++) {
        if (filterFn(numbers[i])) {
            results.push(transformFn(numbers[i]));
        }
    }
    return results;
}

// Test the bonus function:
const bonusResult = filterAndTransform(
    [1, 2, 3, 4, 5], 
    num => num > 2,  // filter function
    num => num * 10  // transform function
);
console.log("\nBonus Challenge Result:", bonusResult);
// Output: [30, 40, 50]

// Alternative example with different operations:
const bonusResult2 = filterAndTransform(
    [1, 2, 3, 4, 5, 6, 7, 8], 
    num => num % 2 === 0,  // filter for even numbers
    num => num + 100       // add 100 to each
);
console.log("Bonus Challenge Result 2:", bonusResult2);
// Output: [102, 104, 106, 108]


// ============================================
// ADDITIONAL EXAMPLES
// ============================================

// Example: Using arrow functions as arguments
const part3Result = processNumbers(testNumbers, num => num / 2);
console.log("Part 3 (arrow function):", part3Result);
// Output: [1, 2, 3, 4, 5]

// Example: Multiple higher-order operations
const complexResult = processNumbers(
    processNumbers(testNumbers, num => num * 3),  // First: multiply by 3
    num => num - 1                                // Then: subtract 1
);
console.log("Complex operation result:", complexResult);
// Output: [5, 11, 17, 23, 29]

// Notes:
// - Higher-order functions accept other functions as parameters
// - Named functions can be passed by reference (just the function name)
// - Anonymous functions are defined inline where they're used
// - Arrow functions provide a more concise syntax for simple operations
// - Both approaches achieve the same goal with different syntax styles