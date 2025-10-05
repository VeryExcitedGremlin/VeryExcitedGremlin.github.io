// LocalStorage Practice - Complete Version

// Get DOM elements
const keyInput = document.querySelector("#key-input");
const valueInput = document.querySelector("#value-input");
const setBtn = document.querySelector("#set-btn");
const getBtn = document.querySelector("#get-btn");
const removeBtn = document.querySelector("#remove-btn");
const clearBtn = document.querySelector("#clear-btn");
const output = document.querySelector("#output");

// Preference elements
const themeSelect = document.querySelector("#theme-select");
const usernameInput = document.querySelector("#username-input");
const savePreferencesBtn = document.querySelector("#save-preferences-btn");

// Store data using localStorage.setItem()
function setItem() {
  const key = keyInput.value.trim();
  const value = valueInput.value.trim();

  if (key && value) {
    localStorage.setItem(key, value);
    displayStorageContents();
    keyInput.value = "";
    valueInput.value = "";
    showMessage(`Stored: ${key} = ${value}`);
  } else {
    showMessage("Please enter both key and value");
  }
}

// Retrieve data using localStorage.getItem()
function getItem() {
  const key = keyInput.value.trim();

  if (key) {
    const value = localStorage.getItem(key);
    if (value !== null) {
      showMessage(`Retrieved: ${key} = ${value}`);
      valueInput.value = value;
    } else {
      showMessage(`Key "${key}" not found`);
    }
  } else {
    showMessage("Please enter a key to retrieve");
  }
}

// Remove items with localStorage.removeItem()
function removeItem() {
  const key = keyInput.value.trim();

  if (key) {
    localStorage.removeItem(key);
    displayStorageContents();
    showMessage(`Removed: ${key}`);
    keyInput.value = "";
  } else {
    showMessage("Please enter a key to remove");
  }
}

// Clear all storage with localStorage.clear()
function clearAll() {
  localStorage.clear();
  displayStorageContents();
  showMessage("All storage cleared");
}

// Show all items currently in localStorage
function displayStorageContents() {
  if (localStorage.length === 0) {
    output.innerHTML = "<p>No items in storage</p>";
    return;
  }

  let html = "<h3>Current Storage:</h3>";
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    html += `<p><strong>${key}:</strong> ${value}</p>`;
  }
  output.innerHTML = html;
}

// Save form data to localStorage automatically
function savePreferences() {
  const theme = themeSelect.value;
  const username = usernameInput.value.trim();

  // Create preferences object
  const preferences = {
    theme: theme,
    username: username,
    savedAt: new Date().toISOString(),
  };

  // Store as JSON string
  localStorage.setItem("userPreferences", JSON.stringify(preferences));

  applyTheme(theme);
  displayStorageContents();
  showMessage("Preferences saved!");
}

// Restore form data from localStorage on page load
function loadPreferences() {
  const savedPreferencesJson = localStorage.getItem("userPreferences");

  if (savedPreferencesJson) {
    try {
      // Parse JSON string back to object
      const preferences = JSON.parse(savedPreferencesJson);

      // Set form values from preferences object
      if (preferences.theme) {
        themeSelect.value = preferences.theme;
        applyTheme(preferences.theme);
      }

      if (preferences.username) {
        usernameInput.value = preferences.username;
      }
    } catch (error) {
      console.error("Error parsing preferences:", error);
      showMessage("Error loading preferences");
    }
  }

  displayStorageContents();
}

// Build persistent user preferences features
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
}

// Helper function to show messages
function showMessage(message) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #007cba;
        color: white;
        padding: 10px;
        border-radius: 4px;
        z-index: 1000;
    `;

  document.body.appendChild(messageDiv);

  setTimeout(() => {
    document.body.removeChild(messageDiv);
  }, 3000);
}

// Add event listeners
setBtn.addEventListener("click", setItem);
getBtn.addEventListener("click", getItem);
removeBtn.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearAll);
savePreferencesBtn.addEventListener("click", savePreferences);

// Load preferences when page loads
loadPreferences();
