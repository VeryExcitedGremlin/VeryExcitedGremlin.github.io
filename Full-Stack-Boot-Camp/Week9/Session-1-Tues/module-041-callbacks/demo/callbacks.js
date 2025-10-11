function sayHello(name) {
  console.log(`Hello ${name}`);
}

function sayGday(name) {
  console.log("Gday mate!");
}

function greetUser(name, callbackFunction) {
  console.log("Processing Greeting");

  // decides when to call the callbackFunction
  callbackFunction(name);

  console.log("greeting complete");
}

// as developer when we use a function with a callback
// we can decide what the function does
// but it might expect sayHello to return a specific value
greetUser("Bob", sayHello);
greetUser("", sayGday);
