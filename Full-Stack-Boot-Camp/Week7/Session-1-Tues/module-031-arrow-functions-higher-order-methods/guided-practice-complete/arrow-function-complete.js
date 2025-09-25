// ============================================
// GUIDED PRACTICE SESSION 1: Basic Function Conversion - COMPLETE
// ============================================

// Regular function declaration
function greetUser(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}! Welcome to our site.`;
}

// SOLUTION: Convert the greetUser function above into a named arrow function
const greetUserArrow = (name, timeOfDay) => {
    return `Good ${timeOfDay}, ${name}! Welcome to our site.`;
};

// Test your function:
console.log(greetUserArrow("Alice", "morning"));
// Output: Good morning, Alice! Welcome to our site.


// ============================================
// GUIDED PRACTICE SESSION 2: Math Operations - COMPLETE
// ============================================

// Regular function expression
const calculateArea = function(length, width, height) {
    const area = length * width;
    const volume = area * height;
    return {
        surfaceArea: area,
        volume: volume
    };
};

// SOLUTION: Convert the calculateArea function above into a named arrow function
const calculateAreaArrow = (length, width, height) => {
    const area = length * width;
    const volume = area * height;
    return {
        surfaceArea: area,
        volume: volume
    };
};

// Test your function:
console.log(calculateAreaArrow(5, 3, 2));
// Output: { surfaceArea: 15, volume: 30 }


// ============================================
// GUIDED PRACTICE SESSION 3: Array Processing - COMPLETE
// ============================================

// Regular function with array processing
function processStudentGrades(students, passingGrade) {
    const results = [];
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const status = student.grade >= passingGrade ? 'PASS' : 'FAIL';
        results.push({
            name: student.name,
            grade: student.grade,
            status: status
        });
    }
    return results;
}

// SOLUTION: Convert the processStudentGrades function above into a named arrow function
const processStudentGradesArrow = (students, passingGrade) => {
    const results = [];
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const status = student.grade >= passingGrade ? 'PASS' : 'FAIL';
        results.push({
            name: student.name,
            grade: student.grade,
            status: status
        });
    }
    return results;
};

// Test data:
const testStudents = [
    { name: "John", grade: 85 },
    { name: "Sarah", grade: 92 },
    { name: "Mike", grade: 67 },
    { name: "Emma", grade: 78 }
];

// Test your function:
console.log(processStudentGradesArrow(testStudents, 70));
// Output: [
//   { name: "John", grade: 85, status: "PASS" },
//   { name: "Sarah", grade: 92, status: "PASS" },
//   { name: "Mike", grade: 67, status: "FAIL" },
//   { name: "Emma", grade: 78, status: "PASS" }
// ]


// ============================================
// BONUS CHALLENGE - COMPLETE
// ============================================

// Comparison of syntax differences:
console.log('\n=== SYNTAX COMPARISON ===');
console.log('Regular function:', greetUser("Bob", "evening"));
console.log('Arrow function:', greetUserArrow("Bob", "evening"));

// Both produce the same output, demonstrating functional equivalence

// Key differences noted:
// - Arrow functions use => instead of function keyword
// - Arrow functions with curly braces need explicit return statements
// - Parameters in parentheses are required when you have multiple parameters
// - const is the preferred way to declare arrow functions for immutability