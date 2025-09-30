// We will use this a lot in react

// syntactic sugar for assigning specific index value from an array to variables

function getPerson() {
  //pretend that we have to return an array
  return ["Bob", 40];
}

console.log(getPerson())
const person = getPerson();
console.log(person[1])

// not good practice
// if(person[1] === "Sue")

//typically to solve

// const person = getPerson();
// const name = person[0];
// const age = person[1];

//if(name === "Sue")

const [name, age] = getPerson();
console.log(name);
console.log(age);
// const[age, name] = getPerson
// what would age have in it, and what would name have in it
const [ageTwo, nameTwo] = getPerson();

console.log(ageTwo) // Why is this bob?
// make sure you get the order right for the variable