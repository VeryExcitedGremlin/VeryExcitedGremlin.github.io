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
// const submitForm = document.querySelector('#submit');
// console.log(submitForm);

// TODO: Get all input elements
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const ageInput = document.getElementById('age');
const countrySelect = document.getElementById('country');
const termsCheckbox = document.getElementById('terms');

const inputElements = [usernameInput, emailInput, passwordInput,
    ageInput, termsCheckbox]

// TODO: Handle form element focus and blur events

function handleFocus(event) {
    // TODO: Add styling when input gets focus
    // Remove error class, add focus styling
    event.target.classList.remove('error');
    const errorElement = document.querySelector(`#${event.target.id}-error`);
    if (errorElement) {errorElement.textContent = ''}
}

function handleBlur(event) {
    // TODO: Validate field when it loses focus
    // Show validation message if needed
    const field = event.target
    // console.log(field.id);
    // const errorElement = document.querySelector(`#${field.id}-error`);
    // console.log(errorElement);
    const errorMessage = validateSingleField(field);

    showError(field, errorMessage);
}

function validateSingleField(field) {
    let errorMessage = ''
    switch (field.id) {
        case 'username':
            errorMessage = validateUsername(field.value);
            break;
        case 'email':
            errorMessage = validateEmail(field.value);
            break;
        case 'password':
            errorMessage = validatePassword(field.value);
            break;
        case 'age':
            errorMessage = validateAge(field.value);
            break;
        // case 'country':

        case 'terms':
            errorMessage = validateTerms(field);
            break;
    }
    return errorMessage;
}

function showError(field, errorMessage) {
    const errorElement = document.querySelector(`#${field.id}-error`);
    if (errorMessage) {
        field.classList.add("error");
        errorElement.textContent = errorMessage;
    } else {
        field.classList.remove("error");
        field.classList.add("valid");
        errorElement.textContent = "";
    }
}

// TODO: Individual validation functions - each should return null for valid, error message for invalid

// TODO: Username validation function
// Check if value exists and meets minimum length requirement (3+ characters)
function validateUsername(value) {
    // TODO: Check if value is empty after trimming whitespace
    value = value.trim()
    if (!value) {
        return 'Username Required';
    // TODO: Check if trimmed value length is less than 3 characters
    } else if (value.length < 3) {
        return 'Username must be at least 3 characters'
    // TODO: Return appropriate error messages or null if valid
    } else {return null}
}

// TODO: Email validation function  
// Use regular expression to check email format
function validateEmail(value) {
    // TODO: Create email regex pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // TODO: Check if value is empty after trimming
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    value = value.trim()
    if (!value) {
        return 'Email Required';
    // TODO: Test value against regex pattern
    } else if (!emailRegex.test(value)) {
        return 'Please enter a valid email';
    // TODO: Return appropriate error messages or null if valid
    } else {return null}
}

// TODO: Password validation function
// Check existence and minimum length for security
function validatePassword(value) {
    value = value.trim()
    // TODO: Check if password value exists (not empty)
    if (!value) {
        return 'Password Required';
    // TODO: Check if password length is at least 6 characters
    } else if (value.length < 6) {
        return 'Password must be at least 6 characters';
    // TODO: Return appropriate error messages or null if valid
    } else {return null}
}

// TODO: Age validation function
// Optional field, but if provided must be within reasonable range
function validateAge(value) {
    // TODO: Only validate if value is provided
    if (!value) {
        return 'Age Required';
    // TODO: Convert to integer and check if it's a valid number
    } else if (parseFloat(value)) {
        value = parseFloat(value)
    // TODO: Check if age is between 13 and 120
        if (value < 13) {
            return 'You must be at least 13 to register';
        } else if (value > 120) {
            return "That's way too old!";
    // TODO: Return appropriate error messages or null if valid
        }
    } else {return null}
}

// TODO: Terms validation function
// Required checkbox must be checked
function validateTerms(isChecked) {
    // console.log(isChecked);
    // TODO: Check if checkbox is checked
    // console.log(isChecked);
    if (!isChecked.checked) {
    // TODO: Return error message if not checked, null if checked
        return 'You must agree to the Terms and Conditions';
    } else {return null}
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
    const usernameError = validateUsername(usernameInput.value);
    // TODO: If error returned, add to errors object and set isValid to false
    if (usernameError) {
        errors.username = usernameError;
        isValid = false;
    }
    // TODO: Call validateEmail() with emailInput.value
    const emailError = validateEmail(emailInput.value);
    // TODO: If error returned, add to errors object and set isValid to false
    if (emailError) {
        errors.email = emailError;
        isValid = false;
    }
    // TODO: Call validatePassword() with passwordInput.value
    const passwordError = validatePassword(passwordInput.value);
    // TODO: If error returned, add to errors object and set isValid to false
    if (passwordError) {
        errors.password = passwordError;
        isValid = false;
    }
    // TODO: Call validateAge() with ageInput.value
    const ageError = validateAge(ageInput.value);
    // TODO: If error returned, add to errors object and set isValid to false
    if (ageError) {
        errors.age = ageError;
        isValid = false;
    }
    // TODO: Call validateTerms() with termsCheckbox.checked
    const termsError = validateTerms(termsCheckbox.value);
    // TODO: If error returned, add to errors object and set isValid to false
    if (termsError) {
        errors.terms = termsError;
        isValid = false;
    }
    // return { isValid, errors };
    return [isValid, errors]
}


function showValidationErrors(isValid, errors) {
    // TODO: Display validation error messages to users
    // Show new error messages for each field
    // console.log(errors);
    // let output = ''
    if (!isValid) {
        Object.keys(errors).forEach((element) => {
            // console.log(element);
            showError(document.getElementById(element), errors[element])
        })
    }
    // Clear all error messages
    // Show new errors
}

function clearValidationErrors() {
    inputElements.forEach( (field) => {
    // TODO: Clear all error message displays
        const errorField = document.querySelector(`#${field.id}-error`);
        console.log('errorField');
        console.log(errorField);
        errorField.textContent = '';
    // Remove error classes from inputs
        field.textContent = '';
        field.classList.remove('error');
        field.classList.remove('valid');
    });
    formOutput.textContent = "\n\nSubmit the form to see the data here\n\n\n";
}

// TODO: Handle form submission

function handleFormSubmit(event) {
  // TODO: Prevent form submission with event.preventDefault()
  event.preventDefault();
    const [isValid, errors] = validateForm();
    // console.log(isValid, errors);
    showValidationErrors(isValid, errors);

  // TODO: Get form data using multiple methods:
  // Method 1: Access individual elements
  // Method 2: Use form.elements collection
  // Method 3: Use FormData API
    // Clear previous error messages first
    formOutput.textContent = '';
    let message = ''
    inputElements.forEach( (field) => {
    // TODO: Validate the form data
        errorMessage = validateSingleField(field);
    // TODO: If invalid, show error messages
        if (errorMessage) {
            message += `${field.id}: error - ${errorMessage}\n`
    // TODO: If valid, display the data
        } else {
            message += `${field.id}: ${field.value}\n`
        }
    });
    formOutput.textContent = message;
}

// TODO: FormData API
// Create FormData objects from forms
// Access form data using FormData methods
// Append additional data to FormData objects
// Process form data for submission or storage

function showFormDataContents() {
    // TODO: Create FormData objects from forms
    const formData = new FormData(form);
    // console.log("'Show FormData Contents' Fired");
    // TODO: Access form data using FormData methods
    // Use formData.get(), formData.getAll(), formData.entries()
    // TODO: Display all form data entries
    // const ids = Array.from(form.querySelectorAll('*[id]'));
    // console.log(ids);
    const ids2 = Array.from(form.querySelectorAll("*[id]")).map((el) => el.id);
    // console.log(ids2);
    const ids3 = [];
    for (let i=0; i < ids2.length; i+=2) {
        ids3.push(ids2[i]);
        if (i==8){ i=7;}}
    // console.log(ids3);
    
    let message = 'Using formData.get():\n\n'
    ids3.forEach((el) => {
        if (el == 'password' && formData.get(el).length > 0) {
          message += `${el}: **Hidden**\n`;
        } else { message += `${el}: ${formData.get(el)}\n`}; });

    message += '\nUsing formData.entries:\n\n';
    for (let[key,val] of formData.entries()) {
        if (key == 'password' && val) {
            message += `${key}: **Hidden**\n`
        } else { message += `${key}: ${val}\n` }
    };

    // const message = `
    // ${formData.get()}
    // ${formData.getAll()}
    // ${formData.entries()}
    // `

    // const dataMethods = [get(), getAll(), entries()]
    // dataMethods.forEach( (func) => {
    //     message += formData.func + '\n'
    // });
    
    formdataOutput.textContent = message;
    return [formData, message];
}

function addExtraDataToForm() {
    // TODO: Append additional data to FormData objects
    let [formData, message] = showFormDataContents();
    // console.log(message);
    message += '\nformData with Extra Data:\n\n'
    // TODO: Add extra fields like timestamp, user agent, etc.
    // Use formData.append(key, value)
    formData.append('timestamp', new Date().toISOString());
    formData.append('userAgent', navigator.userAgent);
    formData.append('sessionID',
        'session_' + Math.random().toString(36).substr(2,9)
    );
    const moreData = ['timestamp', 'userAgent', 'sessionID'];
    // TODO: Show updated FormData contents
    moreData.forEach ( (el) => {
        message += `${el}: ${formData.get(el)}\n`;
    });
    formdataOutput.textContent = message;
}

// TODO: Add event listeners
form.addEventListener('submit', handleFormSubmit);
form.addEventListener('reset', clearValidationErrors);
showFormdataBtn.addEventListener('click', showFormDataContents);
addExtraDataBtn.addEventListener('click', addExtraDataToForm);

// TODO: Add focus/blur listeners to all inputs for validation feedback
// Add focus and blur event listeners to show visual feedback
// Example: input.addEventListener('focus', handleFocus);
// Example: input.addEventListener('blur', handleBlur);

inputElements.forEach((element) => {
    element.addEventListener('focus', handleFocus);
    element.addEventListener('blur', handleBlur);
});


console.log('Forms demo ready - complete the TODO items!');