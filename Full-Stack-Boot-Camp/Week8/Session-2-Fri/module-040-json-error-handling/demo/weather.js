// endpoints on APIS

// Go weather

const url = "https://goweather.xyz/weather/Berlin";

// common errors
// go to a resource that doesn't exist

// gives us back a 404 - not found
const typoUrl = "https://goweather.xyz/wether/Berlin";

fetch(typoUrl) // does a GET request
  // wait for the reponse to come back
  .then((response) => {
    // check just the clientside responses
    if (response.status >= 400 && response.status < 500) {
      const errorMessage = handleClientErrors(response);
      // throw key word that throws an error programatically
      throw new Error(errorMessage);
    }

    return response.json();
  })
  .then((data) => {
    console.log("break");

    console.log("response body now js object", data);

    const h1 = document.createElement("h1");
    h1.textContent = data.description;
    document.body.appendChild(h1);

    // how can you add the temperature to the
    // dom and the page?
  })
  .catch((error) => {
    console.log("caught error", error);
    document.querySelector("#user-error").innerHTML = `
      <div class="error-message">
        <h3>Oops! ${error.message}</h3>
      </div>
    `;
  });

function handleClientErrors(response) {
  switch (response.status) {
    case 400:
      return "Bad Request - Check your data format";
    case 401:
      return "Unauthorized - You need to log in first";
    case 403:
      return "Forbidden - You don't have permission for this";
    case 404:
      return "Not Found - This item doesn't exist";
    case 422:
      return "Invalid Data - Check your input fields";
    default:
      return `Client Error ${response.status} - Check your request`;
  }
}
