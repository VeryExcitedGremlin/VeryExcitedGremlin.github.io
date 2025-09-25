// ===================================================================
// DO NOT MODIFY THE CODE BELOW - Call or reference them in your code as needed
// ===================================================================

// Takes in a number and updates the readonly display input
function setDisplay(value) {
  const display = document.getElementById("display");
  display.value = String(parseFloat(value));
}

// Gets the value from the readonly display input
// Returns a number
// Doesn't need to be used but can help you verify
// the current value on the display
function getDisplay() {
  const display = document.getElementById("display");
  //parseFloat changes the string into a number we can use
  return display.value;
}

//Set up display to show zero when starting
setDisplay(0);

console.log("Initial value of display: ", getDisplay());

// ===================================================================
// DO NOT MODIFY THE CODE Above - Call or reference them in your code as needed
// ===================================================================

/**
 * Main input handler called from HTML buttons
 * This function receives ALL button clicks and routes them to the appropriate handler
 * @param {string} input - The input value from button clicks
 *
 * HINT: This function should:
 * 1. Check if input is a number (0-9) and handle number input
 * 2. Check if input is an operator (+, -, *, /) and handle operator input
 * 3. Check if input is a decimal point (.) and handle decimal input( )
 * 4. Check if input is equals (=) and execute the operation
 * 5. Check if input is clear (C) and reset the calculator
 * 6. Don't forget to call setDisplay() at the end to refresh the screen!
 */
var num1=0, num2=0, operator, operatorKnown=false, savedOperator


function handleInput(input) {
  console.log(`Button clicked: ${input}`);
  // Your code here
  // Use if statements to check what type of input was received
  // Then call the appropriate helper function
  // you may need to use parseFloat
  // use typeof to check data types
  // console.log(typeof(parseFloat(input)));
  if (["+", "-", "*", "/",'='].includes(input)) {
    handleOperator(input);
  } else if (['C','CE'].includes(input)) {
    resetCalculator(input);
  } else {
    handleNumber(parseFloat(input));
    // operatorKnown = false;
  }
  // Don't forget to call setDisplay() at the end!
}

// TODO: Create your arithmetic operation functions here
// You will need: add, subtract, multiply, and divide functions
// Each should take two parameters (first, second) and return the result
// Don't forget to add console.log statements for debugging!
// Remember: division should check for division by zero and return "Error"

/**
 * Handles number input (0-9)
 * @param {string} number - The number that was clicked
 */
function handleNumber(number) {
  // Your code here
  // This function should update the display with setDisplay
  // for example, if we have the number 9 already and are adding another 9
  // Consider: Are we starting fresh? Continuing a number?
  if (savedOperator) {resetCalculator('CE');}
  console.log(`num2: ${num2}`);
  num2 = num2 * 10 + number;
  console.log(`num2: ${num2}`);
  setDisplay(num2);

  // if (operatorKnown == false) {
  //   console.log(`num1: ${num1}`);
  //   num1 = (num1*10)+number;
  //   console.log(`num1: ${num1}`);
  //   setDisplay(num1);
  // }
  console.log(`Number handled: ${number}`);
}

/**
 * Handles decimal point input - This is an Optional Stretch
 */
// function handleDecimal() {
//   // Your code here
//   // Make sure you don't add multiple decimal points to one number
// }

/**
 * Handles operator input (+, -, *, /)
 * @param {string} nextOperator - The operator that was clicked
 */
function handleOperator(nextOperator) {
  // Your code here
  // Store the operator
  // Store the first number
  // Prepare for the second number input
  if (nextOperator == "=") {
    if (savedOperator) {
      operator = savedOperator;
      executeOperation();
      operator = '';
    }else if (operator) {
      executeOperation();
      savedOperator = operator;
      operator = '';
    }else {
      setDisplay(num2);
    } 
  } else {
      if (operator) {
      executeOperation();
    } else if (!savedOperator) {
      num1 = num2;
    }
    operator = nextOperator;
    savedOperator = '';
    num2 = 0; 
  }
  // setDisplay(num1);
  console.log("Operator handled");
}

/**
 * Executes the calculation when = is pressed
 */
function executeOperation() {
  // Your code here
  // Use if/else statements to call the right operation function
  // Handle the result and any errors
  if (operator == "+") {
    num1 = add(num1, num2);
  } else if (operator == "-") {
    num1 = sub(num1, num2);
  } else if (operator == "*") {
    num1 = mult(num1, num2);
  } else if (operator == "/") {
    num1 = div(num1, num2);
  }
  setDisplay(num1);
  console.log('Executed');
}

/**
 * Resets the calculator (C button)
 */
function resetCalculator(clear) {
  // Your code here
  // Reset all state variables and display
  if (clear == 'C') {
    num2 = 0;
    setDisplay('0');
    console.log('Clear');
  }
  else if (clear == 'CE') {
    num1 = 0;
    num2 = 0;
    operator = '';
    // operatorKnown = false;
    savedOperator = '';
    setDisplay("0");
    console.log('All Clear');
  }
}

const add = (num1, num2) => {
  result = num1 + num2; 
  console.log(`${num1} + ${num2} = ${result}`);
  return result;
}
// console.log(add(1,2));

const sub = (num1, num2) => {
  result = num1 - num2; 
  console.log(`${num1} - ${num2} = ${result}`);
  return result;
}
// console.log(sub(1, 2));

const mult = (num1, num2) => {
  result = num1 * num2; 
  console.log(`${num1} * ${num2} = ${result}`);
  return result
}
// console.log(mult(1, 2));

function div (num1, num2) {
  if (num2 !== 0) {
    result = num1 / num2;
    console.log(`${num1} / ${num2} = ${result}`); 
    return result;
  } else {return 'Error'};
}
// console.log(div(1, 2));
// console.log(div(1, 0));