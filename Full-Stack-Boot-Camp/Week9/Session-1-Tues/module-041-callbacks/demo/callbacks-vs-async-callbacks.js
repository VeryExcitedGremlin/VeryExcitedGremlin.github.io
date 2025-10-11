// SYNCHRONOUS CALLBACKS - happen immediately, one after another
console.log("1. Starting synchronous demo");

[1, 2, 3].forEach((num) => {
  console.log(`2. Processing number: ${num}`);
});

console.log("3. Synchronous demo complete");

// Output will be in exact order: 1, 2, 2, 2, 3

console.log("---");

// ASYNCHRONOUS CALLBACKS - happen later, don't block other code
console.log("4. Starting asynchronous demo");

setTimeout(() => {
  console.log("6. This callback runs after 2 seconds");
}, 2000);

console.log(
  "5. Asynchronous demo setup complete (but callback hasn't run yet!)"
);

// Output will be: 4, 5, then 2 seconds later: 6
