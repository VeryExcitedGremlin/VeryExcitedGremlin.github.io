// LocalStorage Practice - Starter Version

// TODO: Local Storage Operations
// localStorage.setItem(key, value) - stores data
// localStorage.getItem(key) - retrieves data
// localStorage.removeItem(key) - removes specific item
// localStorage.clear() - removes all items

// Get DOM elements
const keyInput = document.querySelector('#key-input');
const valueInput = document.querySelector('#value-input');
const setBtn = document.querySelector('#set-btn');
const getBtn = document.querySelector('#get-btn');
const removeBtn = document.querySelector('#remove-btn');
const clearBtn = document.querySelector('#clear-btn');
const output = document.querySelector('#output');

// Preference elements
const themeSelect = document.querySelector('#theme-select');
const usernameInput = document.querySelector('#username-input');
const savePreferencesBtn = document.querySelector('#save-preferences-btn');

// TODO: Implement setItem function
// Store data using localStorage.setItem()
function setItem() {
    // Get key and value from input fields
    const key = keyInput.value;
    const val = valueInput.value;
    // Use localStorage.setItem(key, value) to store
    if (key && val) {
        localStorage.setItem(key, val);
    // Update the display
        displayStorageContents();
        showMessage(`Stored: ${key} = ${val}`);
    // Clear input fields after storing
        keyInput.value = '';
        valueInput.value = '';
    } else {showMessage('You must provide a key and a value');}
}

function showMessage(message) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  messageDiv.style.cssText = `
    position: fixed;
    top: 23px;
    right: 23px;
    background: #007cba;
    color: white;
    padding: 10px;
    border-radius: 4px;
    z-index: 1000;
  `;
  document.body.appendChild(messageDiv);
  setTimeout(() => {document.body.removeChild(messageDiv);}, 3000);
}

// TODO: Implement getItem function  
// Retrieve data using localStorage.getItem()
function getItem() {
    // Get key from input field
    // Use localStorage.getItem(key) to retrieve
    // Display the result in output area
    // Handle case when key doesn't exist (returns null)
}

// TODO: Implement removeItem function
// Remove items with localStorage.removeItem()
function removeItem() {
    // Get key from input field
    // Use localStorage.removeItem(key) to remove
    // Update the display
    // Show confirmation message
}

// TODO: Implement clearAll function
// Clear all storage with localStorage.clear()
function clearAll() {
    // Use localStorage.clear() to remove everything
    // Update the display
    // Show confirmation message
}

// TODO: Implement displayStorageContents function
// Show all items currently in localStorage
function displayStorageContents() {
    // Loop through all localStorage keys
    // Display each key-value pair in the output area
    // Handle empty storage case
}

// TODO: Implement savePreferences function
// Save form data to localStorage automatically
function savePreferences() {
    // Get theme and username values
    // Create a preferences object containing both values
    // Convert object to JSON string using JSON.stringify()
    // Store the JSON string in localStorage with key 'userPreferences'
    // Apply theme immediately
    // Show success message
}

// TODO: Implement loadPreferences function
// Restore form data from localStorage on page load
function loadPreferences() {
    // Get saved preferences JSON string from localStorage using key 'userPreferences'
    // Parse the JSON string back to object using JSON.parse()
    // Handle case when no preferences are saved (null check)
    // Set form values to saved data from the preferences object
    // Apply saved theme to page
}

// TODO: Implement applyTheme function
// Build persistent user preferences features
function applyTheme(theme) {
    // Add or remove 'dark-theme' class from body
    // Update page appearance based on theme choice
}

// TODO: Add event listeners
setBtn.addEventListener('click', setItem);
getBtn.addEventListener('click', getItem);
removeBtn.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearAll);
savePreferencesBtn.addEventListener('click', savePreferences);

// TODO: Load preferences when page loads
loadPreferences();

console.log('LocalStorage demo ready - complete the TODO items!');