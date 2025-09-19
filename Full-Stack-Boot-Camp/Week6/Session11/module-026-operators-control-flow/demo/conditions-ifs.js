// control flow (logic)
// branching

// if example

//remember to use snippets like this for examples
// if (condition) {

// }

if (true) {
  // run this code block if the
  // condition is true
  console.log("Yay!");
}

// if / else

// if (condition) {

// } else {

// }

if (true) {
  // run this code block if the
  // condition is true
  console.log("Yay!");
} else {
  // run this code if the condition is false
  console.log("Boo!");
}

// what about a more real world example?

let isUserSignedIn = false;
let userName = "Mario";

if (isUserSignedIn) {
  // if true run this code
  //console.log("this runs if true");
  console.log(`${userName}, how is the plumbing world?`);
} else {
  // if condition is false
  // run this code
  //console.log("this runs if false");
  console.log("Please log in");
}

// in our condition

// comparison operators

const value1 = 7;
const value2 = 1;
if (value1 < value2) {
  console.log("Math is working");
}

// Logical operators
if (value1 > 8 && value2 < 1 && value3 && value4 || value5 === "Hello" ) {
  console.log("both are true");
}

const isAHelloText = value5 === "Hello"; 
const isLargeEnough = value1 > 8;
const isSmallEnough = value2 < 1;
// best practice to make your if statements readable

if (isLargeEnough && isSmallEnough) {
  console.log("both are true");
}


// if else if else

// play around with if  else if statements in the debugger

// if(){

// } else if(){

// } else if(){

// } else {

// }

let temperature = 75;
// Else-if for multiple conditions
if (temperature > 90) {
    console.log("Extremely hot!");
} else if (temperature > 80) {
    console.log("Hot");
} else if (temperature > 60) {
    console.log("Comfortable");
} else {
    console.log("Cold");
}