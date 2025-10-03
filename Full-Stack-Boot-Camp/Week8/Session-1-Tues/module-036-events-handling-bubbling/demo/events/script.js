console.log("hello world");

// Click EVENT START
// alert the user with a "hello"

// when they click on the hello button

// select the hello button

const helloBtn = document.querySelector("#hello");

// addEventListener - needs the type and a callback function

// add the callback function first

function handleSectionClick(event) {
  console.log("Hello handler was called");
  console.log("event", event);
  alert("Hey, how are you doing?!?!?");
}

helloBtn.addEventListener("click", handleSectionClick);

const section = document.querySelector("section");

// addEventListener - needs the type and a callback function

// add the callback function first

function handleSectionClick(event) {
  console.log("event", event);
  event.stopPropagation();
  // currentTarget = what had the listener attached to it?
  console.log("currentTarget", event.currentTarget);
  // target = what was clicked
  console.log("target", event.target);
}

section.addEventListener("click", handleSectionClick);

// so we could alternatively use arrow functions

// helloBtn.addEventListener("click", (e) => {
//   alert("this works?");
// });

// standard anonymous function
// helloBtn.addEventListener("click", function (event) {
//   alert("this works?");
// });

// Click EVENT END

// Mouse Event Start

const h2 = document.querySelector("h2");

h2.addEventListener("mouseover", function (event) {
  // look at the event

  console.log("event", event);

  event.currentTarget.textContent = "Mouse Over";
});

h2.addEventListener("mouseout", function (event) {
  // look at the event

  console.log("event", event);

  event.currentTarget.textContent = "Mouse Out";
});

// Mouse Event End

// target vs currentTarget

//when you click in main, what happens?
// what are the logs that are fired off?
// what about when you click on the button?

const mainElement = document.querySelector("main");

mainElement.addEventListener("click", function (e) {
  // this can be stopped if I add
  // stopPropogation to a child event
  console.log("main event handler fired");
  console.log("current target", e.currentTarget);
  console.log("target", e.target);
});
