// Normal function definition
function isNumberZero(element) {
  return element === 0;
}

console.log(isNumberZero(1));

//Function Expression
//These two are exactly the same
// Anonymous function assigned to a variable is one way to think
// of these
const isNumberZero = (element) => element === 0;
const isNumberZero = (element) => {
  return element === 0;
};

// shortest syntax for a function is this type of arrow function
//(number) => number === 0;

let myArray = [1, 2, 3, 0];

//find is a higher order function
myArray.find(isNumberZero);


// All 6 of these are exactly the same 
// 6 ways to make anonymous functions
myArray.find(element => element === 0); // anonymous arrow function (out of scope anywhere else)

// smallest examplemyArray.find(e => e === 0)
myArray.find((element) => element === 0 ); // anonymous arrow function (out of scope anywhere else)

myArray.find((element) => {return element === 0; }); // anonymous arrow function (out of scope anywhere else)

myArray.find(element => {return element === 0; }); // anonymous arrow function (out of scope anywhere else)    

myArray.find(function (element) {return element === 0}); // anonymous standard function syntax (out of scope anywhere else)  
    
myArray.find(function namedForTesting(element) {return element === 0}); // named (out of scope anywhere else)    

