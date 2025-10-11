// ==========================================
// HOLLYWOOD SCRIPT LOADER - PROMISE PRACTICE
// ==========================================
//
// INSTRUCTIONS: Look for TODO sections throughout this file to complete the Promise practice exercises:
// - TODO 1: Complete the Promise creation in loadBlockbusterScript()
// - TODO 2: Demonstrate incorrect Promise usage (direct assignment)
// - TODO 3: Demonstrate correct Promise usage with .then() and .catch()
//
// Each TODO section is marked with "TODO START" and "TODO END" comments

/* 
 * BLOCKBUSTER SCRIPT DATA
 * Our epic movie script ready for loading
 * This simulates us loading from a file or API
 */
const scriptData = `
THE PIZZA HEIST: A CHEESY ADVENTURE
========================================

FADE IN:

EXT. PETE'S PIZZA PALACE - NIGHT

A dark figure approaches the glowing pizza palace. This is JACK MOZZARELLA, 
cheese detective extraordinaire.

                    JACK
          (whispering into his pizza slice phone)
     The pepperoni situation is worse than we thought, Chief.
     They've got the secret sauce formula.

A DELIVERY GUY emerges from the shadows.

                    DELIVERY GUY
          (dramatically)
     Did someone order... JUSTICE?
          (pause)
     Because it's gonna be thirty minutes or less,
     or your money back.

                    JACK
          (pulling out a breadstick like a sword)
     Not today, dough boy. Not today.

The two face off in an epic battle of carbs vs. justice.

                    DELIVERY GUY
     You'll never take me alive, copper!

                    JACK
     That's Detective Copper to you. And I prefer
     extra cheese with my arrests.

FADE TO BLACK.

THE END

Budget: $3.50 (mostly for actual pizza)
Expected Box Office: At least a free slice
Release Date: Next Tuesday, probably

A production so cheesy, it's actually good.
`;

/* 
 * INITIALIZATION LOG
 * Welcome message for our Hollywood script loader
 */
console.log("HOLLYWOOD SCRIPT LOADER INITIALIZED");
console.log("=====================================");
console.log("Ready to load the next blockbuster hit!");

/* 
 * PROMISE-BASED SCRIPT LOADER
 * Simulates downloading a script from Hollywood servers
 * Can optionally simulate server failures for error handling practice
 */
function loadBlockbusterScript(forceFail) {
    // TODO 1 START - Complete the Promise creation
    // Your task: Create a new Promise that simulates downloading a script from Hollywood servers
    // create a new promise and assign it to a variable using the new Promise syntax
    const promise = new Promise((resolve, reject) => {
        // inside of the promise callback function
        // setTimeout to simulate loading the data with 3 second duration
        setTimeout(() => {
            // within the timeout callback
            console.log("Script downloaded from Hollywood servers!");
            // if forceFail is true 
            if(forceFail){
                //reject with message
                reject("You failed your mission.");
            } else {
                // else resolve with the script data
                resolve(scriptData);
            }
        }, 3000);
    });
    // return the variable
    return promise;

    // TODO 1 END - Promise creation complete
}



/* 
 * SUCCESS BUTTON EVENT HANDLER
 * Demonstrates successful Promise resolution
 */
function handleScriptLoad(shouldFail = false) {
    // Disable both buttons during loading
    loadButton.disabled = true;
    failButton.disabled = true;
    
    // Update button text based on operation type
    if (shouldFail) {
        failButton.textContent = 'SIMULATING FAILURE...';
        loadButton.textContent = 'LIGHTS, CAMERA, ACTION!';
    } else {
        loadButton.textContent = 'ROLLING... PLEASE WAIT';
        failButton.textContent = 'SIMULATE FAILURE';
    }
    
    // Update status with movie-themed loading message
    statusDiv.textContent = 'Cameras rolling... Downloading script from Hollywood...';
    statusDiv.classList.remove('success', 'error');
    statusDiv.classList.add('loading');
    
    // Clear previous content
    contentDiv.classList.remove('script-loaded');
    
    // TODO 2 START - Demonstrate incorrect Promise usage
    // Your task: Show what happens when you try to use a Promise directly (without .then())
    // This demonstrates the WRONG way - storing a Promise directly in a variable
    // Call the Promise function and store the result directly (this won't give us the data)
    const directResult = loadBlockbusterScript(shouldFail);
    // Log what we actually get - it will be a Promise object, not the script data
    console.log("Direct result (this won't work!):", directResult);
    // TODO 2 END - Notice how this logs a Promise object, not the actual script data

    // TODO 3 START - Demonstrate correct Promise usage
    // Your task: Use .then() and .catch() to properly handle the Promise
    // This demonstrates the RIGHT way - using .then() to handle resolved Promises and .catch() for errors
    // Call the function that returns a Promise
    loadBlockbusterScript(shouldFail)
        // Chain a .then() to handle successful resolution
        .then((movieScript) => {
            // Log success message to console
            console.log("Script loaded successfully!");
            // Log the actual data we received from the Promise
            console.log("Movie script:", movieScript);
            
            // Update the status text to show success
            statusDiv.textContent = 'Script loaded! Ready for production!';
            // Remove the loading animation class
            statusDiv.classList.remove('loading');
            // Add success styling class
            statusDiv.classList.add('success');
            
            // Add success styling to content container
            contentDiv.classList.add('script-loaded');
            // Display the script content inside <pre> tags for formatting
            contentDiv.innerHTML = `<pre>${movieScript}</pre>`;
            
            // Re-enable the load button so user can try again
            loadButton.disabled = false;
            // Re-enable the fail button
            failButton.disabled = false;
            // Reset the load button text back to original
            loadButton.innerHTML = 'LIGHTS, CAMERA, ACTION!<br><span>Load The Script</span>';
            // Reset the fail button text back to original
            failButton.textContent = 'SIMULATE FAILURE';
        })
        // Chain a .catch() to handle Promise rejection/errors
        .catch((error) => {
            // Log the error to console for debugging
            console.error("PRODUCTION ERROR:", error);
            
            // Call helper function to update UI with error state
            updateWithError(error);
        });
     // TODO 3 END - Notice how .then() gets the actual data, and .catch() handles any errors

    
    // This runs immediately - demonstrating asynchronous behavior
    console.log("This runs immediately - the cameras are still rolling!");
}

/* 
 * DOM ELEMENT REFERENCES
 * Getting references to our interactive elements
 */
const loadButton = document.getElementById('load-script-btn');
const failButton = document.getElementById('fail-script-btn');
const statusDiv = document.getElementById('loading-status');
const contentDiv = document.getElementById('file-content');

// Success button event listener
loadButton.addEventListener('click', () => handleScriptLoad(false));

// Failure button event listener
failButton.addEventListener('click', () => handleScriptLoad(true));
function updateWithError(error) {
    statusDiv.textContent = 'Script loading failed! Check the console for details.';
    statusDiv.classList.remove('loading');
    statusDiv.classList.add('error');

    // Show error message
    contentDiv.innerHTML = `
                <div style="color: #ef4444; text-align: center; padding: 2rem;">
                    <h3>PRODUCTION HALTED</h3>
                    <p>${error.message}</p>
                    <p><em>The show must NOT go on... yet.</em></p>
                </div>
            `;

    // Re-enable buttons
    loadButton.disabled = false;
    failButton.disabled = false;
    loadButton.innerHTML = 'LIGHTS, CAMERA, ACTION!<br><span>Load The Script</span>';
    failButton.textContent = 'SIMULATE FAILURE';
}
