// fetch

// function in JS browser

// this grabs the
/* <form>
      <input type="text" name="city" id="city" />
      <button type="submit">Get Weather</button>
</form> */
// from the dom
const form = document.querySelector("form");

//we add an event listener to the submit
form.addEventListener("submit", (event) => {
  //grab the value from the form
  //call our function

  //prevent default
  event.preventDefault();
  console.log("event object", event);

  const city = event.currentTarget.elements.city.value;

  getCityWeather(city);
});

function getCityWeather(city) {
  const url = "https://goweather.xyz/weather/" + city;

  fetch(url)
    // wait for the reponse to come back
    .then((response) => response.json())
    // and convert the json to a javascript object
    .then((data) => {
      const h1 = document.createElement("h1");
      h1.textContent = data.description;
      document.body.appendChild(h1);
    });
}
