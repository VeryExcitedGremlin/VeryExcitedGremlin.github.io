// Form Processing Practice - Complete Version

// Get form and form elements
const form = document.querySelector("#registration-form");
const formOutput = document.querySelector("#form-output");
const formdataOutput = document.querySelector("#formdata-output");
const showFormdataBtn = document.querySelector("#show-formdata");
const addExtraDataBtn = document.querySelector("#add-extra-data");

// Get all input elements
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const ageInput = document.querySelector("#age");
const countrySelect = document.querySelector("#country");
const termsCheckbox = document.querySelector("#terms");

// Handle form element focus and blur events
function handleFocus(event) {
  event.target.classList.remove("error");
  const errorElement = document.querySelector(`#${event.target.id}-error`);
  if (errorElement) errorElement.textContent = "";
}

function handleBlur(event) {
  validateSingleField(event.target);
}

// Individual validation functions - each returns null for valid, error message for invalid

// Username validation: Check if value exists and meets minimum length requirement
function validateUsername(value) {
  if (!value.trim()) {
    return "Username is required";
  }
  if (value.trim().length < 3) {
    return "Username must be at least 3 characters";
  }
  return null;
}

// Email validation: Use regular expression to check email format
function validateEmail(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value.trim()) {
    return "Email is required";
  }
  if (!emailRegex.test(value)) {
    return "Please enter a valid email address";
  }
  return null;
}

// Password validation: Check existence and minimum length for security
function validatePassword(value) {
  if (!value) {
    return "Password is required";
  }
  if (value.length < 6) {
    return "Password must be at least 6 characters";
  }
  return null;
}

// Age validation: Optional field, but if provided must be within reasonable range
function validateAge(value) {
  if (value) {
    const age = parseInt(value);
    if (isNaN(age) || age < 13 || age > 120) {
      return "Age must be between 13 and 120";
    }
  }
  return null;
}

// Terms validation: Required checkbox must be checked
function validateTerms(isChecked) {
  if (!isChecked) {
    return "You must agree to the terms and conditions";
  }
  return null;
}

function validateSingleField(field) {
  let errorMessage = null;

  switch (field.id) {
    case "username":
      errorMessage = validateUsername(field.value);
      break;
    case "email":
      errorMessage = validateEmail(field.value);
      break;
    case "password":
      errorMessage = validatePassword(field.value);
      break;
    case "age":
      errorMessage = validateAge(field.value);
      break;
    case "terms":
      errorMessage = validateTerms(field.checked);
      break;
  }

  showFieldError(field.id, errorMessage);
}

// Form Validation and Processing - uses individual validation functions
function validateForm() {
  const errors = {};
  let isValid = true;

  // Run each validation function and collect errors
  const usernameError = validateUsername(usernameInput.value);
  if (usernameError) {
    errors.username = usernameError;
    isValid = false;
  }

  const emailError = validateEmail(emailInput.value);
  if (emailError) {
    errors.email = emailError;
    isValid = false;
  }

  const passwordError = validatePassword(passwordInput.value);
  if (passwordError) {
    errors.password = passwordError;
    isValid = false;
  }

  const ageError = validateAge(ageInput.value);
  if (ageError) {
    errors.age = ageError;
    isValid = false;
  }

  const termsError = validateTerms(termsCheckbox.checked);
  if (termsError) {
    errors.terms = termsError;
    isValid = false;
  }

  return { isValid, errors };
}

function showValidationErrors(errors) {
  clearValidationErrors();

  Object.keys(errors).forEach((fieldName) => {
    showFieldError(fieldName, errors[fieldName]);
  });
}

function showFieldError(fieldName, errorMessage) {
  const field = document.querySelector(`#${fieldName}`);
  const errorElement = document.querySelector(`#${fieldName}-error`);

  if (errorMessage) {
    field.classList.add("error");
    errorElement.textContent = errorMessage;
  } else {
    field.classList.remove("error");
    field.classList.add("valid");
    errorElement.textContent = "";
  }
}

function clearValidationErrors() {
  const errorElements = document.querySelectorAll(".error-message");
  const inputElements = document.querySelectorAll("input, select");

  errorElements.forEach((el) => (el.textContent = ""));
  inputElements.forEach((el) => el.classList.remove("error", "valid"));
}

// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const validation = validateForm();

  if (validation.isValid) {
    // Method 1: Access individual elements
    const formData1 = {
      username: usernameInput.value,
      email: emailInput.value,
      password: "***hidden***",
      age: ageInput.value,
      country: countrySelect.value,
      terms: termsCheckbox.checked,
    };

    // Method 2: Use form.elements collection
    const formData2 = {};
    for (let element of form.elements) {
      if (element.name) {
        if (element.type === "checkbox") {
          formData2[element.name] = element.checked;
        } else if (element.name === "password") {
          formData2[element.name] = "***hidden***";
        } else {
          formData2[element.name] = element.value;
        }
      }
    }

    // Method 3: FormData API
    const formData3 = new FormData(form);
    const formDataObj = {};
    for (let [key, value] of formData3.entries()) {
      if (key === "password") {
        formDataObj[key] = "***hidden***";
      } else {
        formDataObj[key] = value;
      }
    }

    // Display results
    formOutput.innerHTML = `
<h3>Form Submitted Successfully!</h3>
<h4>Method 1 - Individual Elements:</h4>
${JSON.stringify(formData1, null, 2)}

<h4>Method 2 - form.elements Collection:</h4>
${JSON.stringify(formData2, null, 2)}

<h4>Method 3 - FormData API:</h4>
${JSON.stringify(formDataObj, null, 2)}
        `;
  } else {
    showValidationErrors(validation.errors);
    formOutput.innerHTML =
      '<p style="color: red;">Please fix the errors above and try again.</p>';
  }
}

// FormData API demonstrations
function showFormDataContents() {
  const formData = new FormData(form);
  let output = "FormData Contents:\n\n";

  // Method 1: Using entries()
  output += "Using formData.entries():\n";
  for (let [key, value] of formData.entries()) {
    if (key === "password") {
      output += `${key}: ***hidden***\n`;
    } else {
      output += `${key}: ${value}\n`;
    }
  }

  // Method 2: Using get() for specific keys
  output += "\nUsing formData.get():\n";
  output += `Username: ${formData.get("username")}\n`;
  output += `Email: ${formData.get("email")}\n`;
  output += `Country: ${formData.get("country")}\n`;

  formdataOutput.textContent = output;
}

function addExtraDataToForm() {
  const formData = new FormData(form);

  // Append additional data
  formData.append("timestamp", new Date().toISOString());
  formData.append("userAgent", navigator.userAgent);
  formData.append(
    "sessionId",
    "session_" + Math.random().toString(36).substr(2, 9)
  );

  let output = "FormData with Extra Data:\n\n";
  for (let [key, value] of formData.entries()) {
    if (key === "password") {
      output += `${key}: ***hidden***\n`;
    } else if (key === "userAgent") {
      output += `${key}: ${value.substring(0, 50)}...\n`;
    } else {
      output += `${key}: ${value}\n`;
    }
  }

  formdataOutput.textContent = output;
}

// Add event listeners
form.addEventListener("submit", handleFormSubmit);
showFormdataBtn.addEventListener("click", showFormDataContents);
addExtraDataBtn.addEventListener("click", addExtraDataToForm);

// Add focus/blur listeners to all inputs
const inputElements = [
  usernameInput,
  emailInput,
  passwordInput,
  ageInput,
  countrySelect,
  termsCheckbox,
];
inputElements.forEach((element) => {
  element.addEventListener("focus", handleFocus);
  element.addEventListener("blur", handleBlur);
});

console.log("Forms demo ready! Try filling out and submitting the form.");
