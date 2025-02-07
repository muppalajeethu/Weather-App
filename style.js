const apikey = "812a676309ce498a009f77f418746182";
const apiurl =                                  
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const weatherIcon = document.getElementById("Weather-icon");

async function checkWeather(location) {
  try {
    location = location.trim();
    if (!location) {
      showError("Please enter a valid city, state, or country name!");
      return;
    }

    const response = await fetch(`${apiurl}${location}&appid=${apikey}`);

    if (!response.ok) {
      showError("Location not found. Check the spelling and try again!");
      return;
    }

    const data = await response.json();

    // Update UI with API data
    document.getElementById(
      "city"
    ).innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById("temp").innerText = `${Math.round(
      data.main.temp
    )}°C`;
    document.getElementById("humidity").innerText = `${data.main.humidity}%`;
    document.getElementById("wind").innerText = `${data.wind.speed} km/h`;

    // Improved weather images mapping
    const weatherImages = {
      Clear: "images/clear.png",
      Clouds: "images/cloud.png",
      Rain: "images/rain.png",
      Drizzle: "images/drizzle.png",
      Mist: "images/mist.png",
      Fog: "images/fog.png",
      Thunderstorm: "images/thunderstorm.png",
      Snow: "images/snow.png",
      Haze: "images/haze.png",
      Smoke: "images/smoke.png",
      Tornado: "images/tornado.png",
      Sand: "images/sandstorm.png",
      Dust: "images/dust.png",
      Squall: "images/squall.png",
      Ash: "images/volcanic.png", // Volcanic ash
    };

    // Set the appropriate weather icon or default
    const weatherCondition = data.weather[0].main;
    weatherIcon.src = weatherImages[weatherCondition] || "images/default.png";

    // Show weather data and hide error
    document.getElementById("Weather").style.display = "block";
    document.getElementById("error").style.display = "none";
  } catch (error) {
    console.error("Error fetching weather data:", error);
    showError("Something went wrong. Try again!");
  }
}

// Function to display error messages
function showError(message) {
  document.getElementById("error").innerText = message;
  document.getElementById("error").style.display = "block";
  document.getElementById("Weather").style.display = "none";
}

// Function to handle search
function handleSearch() {
  const location = searchInput.value;
  checkWeather(location);
}

// Event listener for search button click
searchBtn.addEventListener("click", handleSearch);

// Event listener for Enter key press in the input field
searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});
