// arithmetic/math Operators 

// + is add
console.log(1 + 1);

// - is subtract

console.log(2 - 10);

//. / is divide
console.log(20 / 5);

// * is multiply
let total = 20 * 5;

console.log(total);


// Comparison Operators - evaluators

// <= - loose equality
// >= - loose equality


let score = 50

let passing = score >= 70;

console.log(`passing score: ${passing}`)


// loose equalilty operator === - is roughly the same thing

let isLooseEqaulity = 5 == "5"

console.log(isLooseEqaulity)

// strict equalilty operator === - are the data types and the data the same
let isStrictEquality = 100 === "100"

console.log(isStrictEquality)


//Logical Operators

// And &&
// if both things (or more) are true

console.log(true && true && false)

// OR || 
// if any of these are true, return back a true value
console.log(false || false || true || false);

// Not !
// give me the opposite of the resulting value

let isTuesday = true;
console.log(!isTuesday)

// why use !
// typically - you don't want to make variables with negative names

// don't do this dont make negative variable names
let isNotColdOutside = true

// because you might end up needing to the get the opposite and confuse yourself
console.log(!isNotColdOutside === true)