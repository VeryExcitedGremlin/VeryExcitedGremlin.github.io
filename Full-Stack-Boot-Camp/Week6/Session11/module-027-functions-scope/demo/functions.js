//remember the examples
// function name(params) {

// }

// function keyword

// hey computer i need to make a function

// function name

// define the function
// here is what our function does
// use action words for function name
function openDoor() {
  // your code goes here
  console.log("You opened the door");
}

// call, invoke, execute, run

openDoor();

// Parameters

function add(x, y) {
  console.log(x + y);
}

add(1, 3);
add(12, 10); //  12 becomes x, 10 becomes y

// return - keyword

// return the value back to where it was called

function addWithReturn(x, y) {
  return x + y;
}

let sum = addWithReturn(5, 10); // 15

// is essentially the same thing
// 1. let sum -> exists
// 2. addWithReturns is called, we go to line 37
// 3. x gets set to 5
// 4. y gets set to 10
// 5. x + y ran
// 6. x + y becomes 15
// 7. return 15
// 8. let sum = 15

console.log(sum)


// functions that don't return anything, alway return undefined - void function
