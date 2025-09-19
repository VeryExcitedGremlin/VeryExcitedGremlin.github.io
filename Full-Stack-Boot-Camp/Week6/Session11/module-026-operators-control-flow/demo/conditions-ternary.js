let temperature = 75;

const isGreaterThanEighty = temperature > 80;

//if example
let message = ""
if (isGreaterThanEighty) {
  message = "Hot day";
} else {
  message = "Nice day!";
}

// ternary are more compact ways to do simple
// comparisons, and often are used to set values

let messageTwo = isGreaterThanEighty ? "Hot day!" : "Nice day!";


