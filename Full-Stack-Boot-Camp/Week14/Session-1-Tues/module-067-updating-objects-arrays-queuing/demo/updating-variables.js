//primitives can be changed - immutable

// object and arrays can be change - mutable


let myNumber = 5;
// created a named container with a special memory address
// myNumber points to that specific address of that container
let myCopy = myNumber;
// myCopy is also pointing to that same address of that original container

// primitives copy by value when assigning
// https://developer.mozilla.org/en-US/docs/Glossary/Primitive

myNumber = 20;

let myOtherCopy = myNumber;
myNumber++;
// 20 is going to be made in a new container
// and myNumber will now point to that container

// What is mycopy set to?

console.log("myCopy", myCopy);
console.log("myNumber", myNumber);
console.log("myOtherCopy", myOtherCopy)

// what about objects/arrays


// const means no reassigning 

const myObject = { value: 50 };

const myObjectCopy = myObject;

myObject.value = 100

// what does myObjectCopy.value contain?

console.log("myObject", myObject);
console.log("myObjectCopy", myObjectCopy);

// what happens if I update the value with the copy to 200?
// myObjectCopy.value = 200
myObjectCopy.value = 200;

console.log("myObject", myObject);
console.log("myObjectCopy", myObjectCopy);

// create a new object using spread

/// this time I don't want to point to the named container of myObject
// const myThirdObject = myObject

// instead I want to create a new container

const myThirdObject = { ...myObject };

console.log("My Third Object", myThirdObject);

myThirdObject.value = 10000;

// now what will the other two variables have for their values?

console.log("myObject", myObject);
console.log("myObjectCopy", myObjectCopy);


// Primitive vs Object

const user = {name:"Bob", age: 40 }

const name = user.name // "Bob" has its own container

user.name = "Robert"

console.log(user)
console.log(name) // that is why we still "Bob around"