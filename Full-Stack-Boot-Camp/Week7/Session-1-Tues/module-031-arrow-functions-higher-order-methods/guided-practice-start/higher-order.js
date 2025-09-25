// ============================================
// HIGHER ORDER FUNCTIONS PRACTICE
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
// PART 1: Using a Named Function
// ============================================

// TODO: Create a named function called 'doubleAndAdd5' that:
// - Takes one parameter (number)
// - Doubles the number
// - Adds 5 to the result
// - Returns the final result
// Example: doubleAndAdd5(3) should return 11 (3 * 2 + 5 = 11)

// Write your named function here:


// TODO: Use the processNumbers higher-order function with your named function
// Call: processNumbers(testNumbers, doubleAndAdd5)
// Store the result in a variable called 'part1Result'

// Write your function call here:


// Test your result (uncomment to test):
// console.log("Part 1 Result:", part1Result);
// Expected: [9, 13, 17, 21, 25]


// ============================================
// PART 2: Using an Anonymous Function
// ============================================

// TODO: Use the processNumbers higher-order function with an anonymous function that:
// - Takes one parameter (number)
// - Squares the number (multiplies it by itself)
// - Subtracts 1 from the result
// - Returns the final result
// Example: if number is 4, result should be 15 (4 * 4 - 1 = 15)

// TODO: Call processNumbers(testNumbers, [your anonymous function here])
// Store the result in a variable called 'part2Result'

// Write your function call here:


// Test your result (uncomment to test):
// console.log("Part 2 Result:", part2Result);
// Expected: [3, 15, 35, 63, 99]


// ============================================
// COMPARISON & TESTING
// ============================================

// Uncomment the lines below to see both results:
// console.log("\n=== COMPARISON ===");
// console.log("Original numbers:", testNumbers);
// console.log("Part 1 (named function):", part1Result);
// console.log("Part 2 (anonymous function):", part2Result);

// ============================================
// BONUS CHALLENGE
// ============================================

// TODO: Try creating your own higher-order function called 'filterAndTransform' that:
// 1. Takes an array of numbers
// 2. Takes a filter function (returns true/false)
// 3. Takes a transform function (modifies the number)
// 4. Returns an array with only the numbers that pass the filter, after transformation

// Example usage:
// filterAndTransform([1,2,3,4,5], num => num > 2, num => num * 10)
// Should return: [30, 40, 50]

// Write your bonus function here:


// Notes:
// - Higher-order functions accept other functions as parameters
// - Named functions can be passed by reference (just the function name)
// - Anonymous functions are defined inline where they're used
// - Both approaches achieve the same goal with different syntax