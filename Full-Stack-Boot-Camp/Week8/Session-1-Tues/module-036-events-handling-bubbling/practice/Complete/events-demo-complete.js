// Event Handling & Bubbling Practice - Complete Version

const output = document.querySelector('#output');

function log(message) {
    output.innerHTML += message + '<br>';
    output.scrollTop = output.scrollHeight;
}

// Event Handler Basics - addEventListener()

// Click event listener on btn1
document.querySelector('#btn1').addEventListener('click', function() {
    log('Button 1 clicked!');
});

// Mouseover event listener on btn2
document.querySelector('#btn2').addEventListener('mouseover', function() {
    log('Button 2 hovered!');
});

// Keydown event listener on text input
document.querySelector('#text-input').addEventListener('keydown', function(event) {
    log('Key pressed: ' + event.key);
});

// Event Object - using event.target
document.querySelector('#container').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        log('Clicked: ' + event.target.textContent + ' (target: ' + event.target.id + ')');
    }
});

// Event preventDefault - prevent form submission
document.querySelector('#demo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    log('Form submission prevented!');
    const inputValue = document.querySelector('#text-input').value;
    log('Input value: ' + inputValue);
});

// Event Bubbling demonstration
document.querySelector('#container').addEventListener('click', function() {
    log('Container clicked (bubbling)');
});

document.querySelector('#box').addEventListener('click', function(event) {
    log('Box clicked (bubbling)');
    // Uncomment next line to stop bubbling:
    // event.stopPropagation();
});

// Event Delegation - add new buttons dynamically
let buttonCount = 3;

document.querySelector('#btn3').addEventListener('click', function() {
    buttonCount++;
    const newButton = document.createElement('button');
    newButton.textContent = 'Button ' + buttonCount;
    newButton.id = 'btn' + buttonCount;
    document.querySelector('#box').appendChild(newButton);
    log('New button added: ' + newButton.id);
});

// Remove Event Listener demonstration
function removableHandler() {
    log('Removable handler called!');
}

// Add removable event listener
document.querySelector('#remove-listener-btn').addEventListener('click', removableHandler);

// Add double-click listener to remove the single-click listener
document.querySelector('#remove-listener-btn').addEventListener('dblclick', function() {
    document.querySelector('#remove-listener-btn').removeEventListener('click', removableHandler);
    log('Event listener removed! Try clicking the button again.');
});

log('Event handling demo ready! Try clicking, hovering, typing, and submitting.');