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
const body = document.getElementById('top');

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
    const key = keyInput.value;
    // Use localStorage.getItem(key) to retrieve
    const val = localStorage.getItem(key);
    // Display the result in output area
    if (val) {
        showMessage(`Retrieved: ${key} = ${val}`);
        // showMessage(`retrieved: ${val}`);
    // Handle case when key doesn't exist (returns null)
    } else { showMessage('You must provide an existing key'); }
}

// TODO: Implement removeItem function
// Remove items with localStorage.removeItem()
function removeItem() {
    // Get key from input field
    const key = keyInput.value;
    // Use localStorage.removeItem(key) to remove
    if (key) {
        const val = localStorage.getItem(key);
        localStorage.removeItem(key);
        // Update the display
        displayStorageContents();
        // Show confirmation message
        showMessage(`Removed: ${key} = ${val}`);
    } else { showMessage("You must provide an existing key"); }
}

// TODO: Implement clearAll function
// Clear all storage with localStorage.clear()
function clearAll() {
    // Use localStorage.clear() to remove everything
    localStorage.clear();
    // Update the display
    displayStorageContents();
    // Show confirmation message
    showMessage('Storage cleared');
}

// TODO: Implement displayStorageContents function
// Show all items currently in localStorage
function displayStorageContents() {
// Loop through all localStorage keys
    let display = '<p><h3>Storage contents:</h3></p>'
    const keys = Object.keys(localStorage);
    if (keys.length > 0) {
        keys.forEach( (key) => {
            let val = localStorage.getItem(key);
            if (key == 'userPreferences') {
                const valObject = JSON.parse(val);
                const objectKeys = Object.keys(valObject);
                let inner = ''
                objectKeys.forEach( (objectKey) => {
                    inner += `<p>   -   <strong>${objectKey}</strong> = ${valObject[objectKey]}</p>`
                });
                val = inner;
                console.log(valObject);
            }
        // Display each key-value pair in the output area
            display += `<p><strong>${key}</strong> = ${val}</p>`;
        });
    // Handle empty storage case
    } else { display = 'No items in storage'; }

    output.innerHTML = display;
}

// TODO: Implement savePreferences function
// Save form data to localStorage automatically
function savePreferences() {
    // Get theme and username values
    const theme = themeSelect.value;
    const username = usernameInput.value.trim();
    console.log(username);
    // Create a preferences object containing both values
    if (username) {
        const preferences = {
        theme: theme,
        username: username,
        savedAt: new Date().toISOString(),
        };
        // Convert object to JSON string using JSON.stringify()
        // preferences = JSON.stringify(preferences);
        // Store the JSON string in localStorage with key 'userPreferences'
        localStorage.setItem("userPreferences", JSON.stringify(preferences));
        // Apply theme immediately
        applyTheme(theme);
        // Show success message
        displayStorageContents();
        message = 'Preferences saved!';
    } else {message = 'Please enter a username'}
    showMessage(message);
}

// TODO: Implement loadPreferences function
// Restore form data from localStorage on page load
function loadPreferences() {
    let message = ''
    // Get saved preferences JSON string from localStorage using key 'userPreferences'
    const preferences = localStorage.getItem('userPreferences');
    if (preferences) {
        // Parse the JSON string back to object using JSON.parse()
        const preferencesObject = JSON.parse(preferences);
        // Set form values to saved data from the preferences object
        themeSelect.value = preferencesObject.theme;
        usernameInput.value = preferencesObject.username;
        // Apply saved theme to page
        applyTheme(preferencesObject.theme);
        message = `Preferences applied for username: ${preferencesObject.username}`;
        // Handle case when no preferences are saved (null check)
    } else { message = 'No preferences saved' }
    showMessage(message);
}

// TODO: Implement applyTheme function
// Build persistent user preferences features
function applyTheme(theme) {
    // Add or remove 'dark-theme' class from body
    // console.log(`theme: ${theme}`);
    if (theme == 'dark') {
        body.classList.add('dark-theme')
    } else if (theme == 'light') {
        body.classList.remove('dark-theme');
    }
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
displayStorageContents();

console.log('LocalStorage demo ready - complete the TODO items!');