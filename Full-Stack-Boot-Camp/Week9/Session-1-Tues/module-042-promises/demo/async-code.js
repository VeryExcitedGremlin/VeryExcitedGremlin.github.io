// sync code

// sometime there are operations
// we have to wait for
//  - user input(console)
//  - API calls
//. - disk operations write/read

// emulate calling a REST API

// no promise
function getTodaysWeather() {
  setTimeout(() => {
    console.log("Weather is Clear Skys.");
  }, 500);
}

// with promise
function getTomorrowsWeather() {
  const returnValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Tomorrow is Rainy! :("), 1000);
  });
  return returnValue;
}

// performs in order

// its in order

console.log(1);
console.log(2); // this immediately executes after line 7
console.log(3); // this immediately executes after line 8
console.log(4); // ...
console.log(5); // ... this is synchronous

// asynchronous call
getTodaysWeather(); //
getTomorrowsWeather().then((weather) => {
  console.log(weather); // returns last because of the 1000 return time
});
console.log(6);

// What will happen when this runs?
// Option A
// 1-6
// Weather is Clear Skys

// Option B
// 1-5
// Weather is Clear Skys
// 6
