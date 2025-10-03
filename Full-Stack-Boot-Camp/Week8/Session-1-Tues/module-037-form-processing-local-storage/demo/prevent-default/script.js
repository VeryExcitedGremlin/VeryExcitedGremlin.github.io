console.log("Connected");

const jobApplicationForm = document.querySelector("#job-application");

jobApplicationForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent traditional form submission
  //this prevents page refresh

  // typically you would take all of the data from the form

  // and send it off in API request off to a server

  // that data would then be stored for later retrieval in a database

  // we haven't gone over this so lets just look at the data

  console.log("currentTarget", event.currentTarget);

  const experienceInput = event.currentTarget.elements.experience;

  console.log("experience input", experienceInput);

  console.log("experience input value", experienceInput.value);


  if (!validateExperience(experienceInput.value)) {
    alert("Your experience is invalid");
  } else {
    // real submission code
    console.log("Form submitted!");
  }
});


// true or false
function validateExperience(text) {
  // does this have a particular value on it

  if (text.toLowerCase().includes("windows")) {
    return false;
  }
  //make this valid for now
  return true;
}

// https://developer.mozilla.org/en-US/docs/Web/API/FormData
