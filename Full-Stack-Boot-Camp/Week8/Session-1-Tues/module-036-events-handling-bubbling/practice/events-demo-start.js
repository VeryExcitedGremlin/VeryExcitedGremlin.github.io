// Event Handling & Bubbling Practice - Starter Version

const output = document.querySelector("#output");

function log(message) {
  output.innerHTML += message + "<br>";
  output.scrollTop = output.scrollHeight;
}

log("What was added?");

// TODO: Event Handler Basics
// Add event listeners using addEventListener()

// TODO: Add click event listener to btn1
// select the button 1st
const btn1 = document.querySelector("#btn1");
// create the listener

// option A
function handleBtn1Click(event){
    log("event btn1 fired" + event)
}

// option B
// btn1.addEventListener("click", (event) => {
//   log("event btn1 fired");
// });
// Click events fire when a user presses and releases a mouse button on an element
// Use addEventListener() method to attach the event

btn1.addEventListener("click", handleBtn1Click);

// TODO: Add mouseover event listener to btn2
// Mouseover events fire when the mouse pointer enters an element
// This is useful for hover effects and interactive feedback
const btn2 = document.querySelector('#btn2');
function handleBtn2Mouseover(event) {
  log("event btn2 fired" + event);
}
btn2.addEventListener('mouseover', handleBtn2Mouseover);

// TODO: Add keydown event listener to text input
// Keydown events fire when a key is pressed down (before it's released)
// Useful for capturing user input in real-time
const textInput = document.querySelector('#text-input');
function keyDown(event) {
  log('event text input fired' + event);
}
textInput.addEventListener('keydown', keyDown);

// TODO: Event Object
// Access event object and use event.target
const box = document.querySelector('#box');

// TODO: Add event listener that shows which button was clicked
function eventTarget(event) {
// Use event.target to identify which specific element triggered the event
// Event delegation allows handling events on multiple child elements from a parent
// Check if the clicked element is a button using event.target.tagName
  if (event.target.tagName == 'BUTTON') {
    log('Event listener on: ' + event.currentTarget.id);
    log("Clicked: " + event.target.textContent + " (target: " + event.target.id + ")");
    event.stopPropagation()
    log('Propagation stopped');
  }
}
box.addEventListener('click', eventTarget);

// TODO: Event preventDefault
// Prevent form submission
const demoForm = document.querySelector('#demo-form');
demoForm.addEventListener('submit', stopDefault);
// TODO: Add form submit event listener with preventDefault
// Submit events fire when a form is submitted
// preventDefault() stops the default browser behavior (page refresh)
// This allows you to handle form data with JavaScript instead
function stopDefault(event) {
  event.preventDefault();
  log('Default submission prevented');
  const message = document.querySelector('#text-input').value
  log(`Text input value: ${message}`);
}
// TODO: Event Bubbling and stopPropagation
// Demonstrate event bubbling

// TODO: Add event listeners to show bubbling
// Event bubbling means events travel up from child to parent elements
// Add click listeners to both container and box to see bubbling in action
// Use stopPropagation() to prevent the event from bubbling up
const container = document.querySelector('#container')
container.addEventListener('click', eventTarget);
// TODO: Event Delegation
// Add new buttons dynamically

let buttonCount = 3;

// TODO: Add event listener to "Add New Button"
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', addNewButton);

// This demonstrates creating new elements dynamically
function addNewButton(event) {
  // Use createElement() to create new button elements
  const newButton = document.createElement('button');
  buttonCount++;
  const inner = `Button ${buttonCount}`;
  newButton.innerHTML = inner;
  log(`New button created: ${inner}`);
  // Use appendChild() to add them to the DOM
  box.appendChild(newButton);
}

// TODO: Remove Event Listener
// Demonstrate removeEventListener()

function removableHandler() {
  log("Removable Handler called!");
}
const removeListener = document.querySelector('#remove-listener-btn');
removeListener.addEventListener('click', removableHandler);
// TODO: Add removable event listener
// Attach the removableHandler function to the remove button
// Use a named function (not anonymous) so it can be removed later

// TODO: Add another listener to remove the first one
removeListener.addEventListener('dblclick', removeHandler);
// Add a double-click event listener that removes the single-click listener
function removeHandler(event) {
  log("Remove Handler called!");
  removeListener.removeEventListener('click', removableHandler);
  // log('Listener removed: Removable Handler');
  // removeListener.removeEventListener("click", removeHandler);
  // log("Listener removed: Remove Handler");
}
// This shows how removeEventListener() works with named functions
// Anonymous functions cannot be removed because you can't reference them

log("Event handling demo ready - complete the TODO items!");
