//https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch

fetch("https://api.example.com/users", {
  method: "GET", // What you want to do
  headers: {
    // Extra information about your request
    "Content-Type": "application/json",
    //authorization can be added
  },
});

// RESPONSE structure (what you get back)
// {
//   status: 200,                   // Did it work?
//   headers: {...},                // Info about the response
//   body: {...}                    // The actual data you wanted
// }
