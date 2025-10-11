// A Promise represents the eventual completion (or failure) of an async operation
const myPromise = new Promise((resolve, reject) => {
  // This function runs immediately
  console.log("Promise is working...");

  // Simulate async work with setTimeout
  setTimeout(() => {
    const success = Math.random() > 2; // 50% chance

    if (success) {
      resolve("Task completed successfully!"); // Promise fulfilled
    } else {
      reject("Task failed!"); // Promise rejected
    }
  }, 2000);
});

console.log("Promise state right now:", myPromise); // [object Promise] - pending

// Handle the result
myPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => { // catch any errors that happen from a reject
    console.log("Error:", error);
  });
