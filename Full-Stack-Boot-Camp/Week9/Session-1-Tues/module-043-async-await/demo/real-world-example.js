// pretend we have a site with a load button

// <div id="content"></div>
// <button id="loadButton">Load</button>

document
  .querySelector("#loadButton")
  .addEventListener("click", async (event) => {
    try {
      // Show loading state
      event.target.textContent = "Loading...";
      // Disable the button
      event.target.disabled = true;

      // Fetch data
      const response = await fetch("/api/data");
      const data = await response.json();

      // Update UI
      document.querySelector("#content").textContent = data.content; //string on data.content
    } catch (error) {
      document.querySelector("#content").textContent = "Error loading data";
    } finally {
      // try -> catch -> finally (always runs after try or catch)
      // Reset button
      // No matter if the try completes successfully
      // or if the cath get hit
      // run the following code
      event.target.textContent = "Load Data";
      event.target.disabled = false;
    }
  });