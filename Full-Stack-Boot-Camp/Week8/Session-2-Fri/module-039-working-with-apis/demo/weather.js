// fetch

// function in JS browser

const url = "https://goweather.xyz/weather/Berlin";

fetch(url)
  // wait for the reponse to come back
  .then((response) => response.json())
  // and convert the json to a javascript object
  .then((data) => {
    // data is the object from the reponse body that we got
    // now as a JS object
    console.log("break"); // use this to help with line 17 by
    // going to Dev Tools > Sources > weather.js
    // > click to add breakpoint to left of line 14
    // > refresh
    console.log("response body now js object", data);

    // how can I access temperature and log it out?
    console.log("temperature", data.temperature);

    // how do I access the 2 item on forcast and then grab the wind value?

    console.log("2nd forecast wind value", data.forecast[1].wind);

    const h1 = document.createElement("h1");
    h1.textContent = data.description;
    document.body.appendChild(h1);
  });

// can't access data here

console.log("data is undefined because out of scope / not defined error", data);
