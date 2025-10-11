// Helper function to fetch and parse JSON
async function fetchAndParse(url) {
  const response = await fetch(url);
  // Throw an error for bad responses (4xx or 5xx)
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
}

async function getWeatherDashboard(city) {
  const apiCalls = await Promise.allSettled([
    fetchAndParse(`/api/current-weather/${city}`), // 1 second
    fetchAndParse(`/api/forecast/${city}`), // 2 seconds
    fetchAndParse(`/api/air-quality/${city}`), // 5 seconds
    fetchAndParse(`/api/weather-alerts/${city}`), // 10 seconds
  ]);

  const results = {};

  // Check each result individually
  if (apiCalls[0].status === "fulfilled") {
    results.current = apiCalls[0].value;
  }

  if (apiCalls[1].status === "fulfilled") {
    results.forecast = apiCalls[1].value;
  } else {
    // Log the actual error for debugging
    console.error("Forecast Error:", apiCalls[1].reason);
    results.forecastError = "Forecast unavailable";
  }

  if (apiCalls[2].status === "fulfilled") {
    results.airQuality = apiCalls[2].value;
  }

  if (apiCalls[3].status === "fulfilled") {
    results.alerts = apiCalls[3].value;
  }

  return results;
}
