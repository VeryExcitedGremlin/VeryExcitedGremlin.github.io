// function that takes in another function as a parameter (callback)
// or a function that returns a function (not shown because you don't do it a lot)
// and uses it within its code
function processArray(arr, operation) {
  const results = [];
  for (let item of arr) {
    // processArray decides when to call the operation function that I have
    results.push(operation(item)); // calling addTwo here
  }
  return results;
}

function addTwo(x) {
  return x + 2;
}

console.log(processArray([1, 2, 3, 4, 5], addTwo));
