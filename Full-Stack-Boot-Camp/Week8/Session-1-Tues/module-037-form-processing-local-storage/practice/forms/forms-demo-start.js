// Form Processing Practice - Starter Version

// TODO: Form Element Selection and Access
// Select form elements using various DOM methods
// Access form data using form.elements collection
// Get input values from different input types

// Get form and form elements
const form = document.querySelector('#registration-form');
const formOutput = document.querySelector('#form-output');
const formdataOutput = document.querySelector('#formdata-output');
const showFormdataBtn = document.querySelector('#show-formdata');
const addExtraDataBtn = document.querySelector('#add-extra-data');

// TODO: Get all input elements
// const usernameInput = 
// const emailInput = 
// const passwordInput = 
// const ageInput = 
// const countrySelect = 
// const termsCheckbox = 

// TODO: Handle form element focus and blur events
// Add focus and blur event listeners to show visual feedback
// Example: input.addEventListener('focus', handleFocus);
// Example: input.addEventListener('blur', handleBlur);

function handleFocus(event) {
    // TODO: Add styling when input gets focus
    // Remove error class, add focus styling
}

function handleBlur(event) {
    // TODO: Validate field when it loses focus
    // Show validation message if needed
}

// TODO: Individual validation functions - each should return null for valid, error message for invalid

// TODO: Username validation function
// Check if value exists and meets minimum length requirement (3+ characters)
function validateUsername(value) {
    // TODO: Check if value is empty after trimming whitespace
    // TODO: Check if trimmed value length is less than 3 characters
    // TODO: Return appropriate error messages or null if valid
}

// TODO: Email validation function  
// Use regular expression to check email format
function validateEmail(value) {
    // TODO: Create email regex pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // TODO: Check if value is empty after trimming
    // TODO: Test value against regex pattern
    // TODO: Return appropriate error messages or null if valid
}

// TODO: Password validation function
// Check existence and minimum length for security
function validatePassword(value) {
    // TODO: Check if password value exists (not empty)
    // TODO: Check if password length is at least 6 characters
    // TODO: Return appropriate error messages or null if valid
}

// TODO: Age validation function
// Optional field, but if provided must be within reasonable range
function validateAge(value) {
    // TODO: Only validate if value is provided
    // TODO: Convert to integer and check if it's a valid number
    // TODO: Check if age is between 13 and 120
    // TODO: Return appropriate error messages or null if valid
}

// TODO: Terms validation function
// Required checkbox must be checked
function validateTerms(isChecked) {
    // TODO: Check if checkbox is checked
    // TODO: Return error message if not checked, null if checked
}

// TODO: Form Validation and Processing
// Implement client-side form validation
// Prevent form submission with event.preventDefault()
// Validate required fields and data formats
// Display validation error messages to users

function validateForm() {
    // TODO: Validate each field using the individual validation functions
    // Return object with isValid boolean and errors object
    
    const errors = {};
    let isValid = true;
    
    // TODO: Call validateUsername() with usernameInput.value
    // TODO: If error returned, add to errors object and set isValid to false
    
    // TODO: Call validateEmail() with emailInput.value
    // TODO: If error returned, add to errors object and set isValid to false
    
    // TODO: Call validatePassword() with passwordInput.value
    // TODO: If error returned, add to errors object and set isValid to false
    
    // TODO: Call validateAge() with ageInput.value
    // TODO: If error returned, add to errors object and set isValid to false
    
    // TODO: Call validateTerms() with termsCheckbox.checked
    // TODO: If error returned, add to errors object and set isValid to false
    
    return { isValid, errors };
}

function showValidationErrors(errors) {
    // TODO: Display validation error messages to users
    // Clear previous error messages first
    // Show new error messages for each field
    
    // Clear all error messages
    // Show new errors
}

function clearValidationErrors() {
    // TODO: Clear all error message displays
    // Remove error classes from inputs
}

// TODO: Handle form submission
function handleFormSubmit(event) {
    // TODO: Prevent form submission with event.preventDefault()
    
    // TODO: Get form data using multiple methods:
    // Method 1: Access individual elements
    // Method 2: Use form.elements collection
    // Method 3: Use FormData API
    
    // TODO: Validate the form data
    
    // TODO: If valid, display the data
    // TODO: If invalid, show error messages
}

// TODO: FormData API
// Create FormData objects from forms
// Access form data using FormData methods
// Append additional data to FormData objects
// Process form data for submission or storage

function showFormDataContents() {
    // TODO: Create FormData objects from forms
    const formData = new FormData(form);
    
    // TODO: Access form data using FormData methods
    // Use formData.get(), formData.getAll(), formData.entries()
    
    // TODO: Display all form data entries
}

function addExtraDataToForm() {
    // TODO: Append additional data to FormData objects
    const formData = new FormData(form);
    
    // TODO: Add extra fields like timestamp, user agent, etc.
    // Use formData.append(key, value)
    
    // TODO: Show updated FormData contents
}

// TODO: Add event listeners
// form.addEventListener('submit', handleFormSubmit);
// showFormdataBtn.addEventListener('click', showFormDataContents);
// addExtraDataBtn.addEventListener('click', addExtraDataToForm);

// TODO: Add focus/blur listeners to all inputs for validation feedback

console.log('Forms demo ready - complete the TODO items!');