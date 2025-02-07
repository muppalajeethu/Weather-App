const apikey = "812a676309ce498a009f77f418746182";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?appid=units=metric&q=hyderbad";

const SearchBox = document.getElementById("Search input");
const searchbtn = document.getElementById("search button");
const weatherIcon = document.getElementById("Weather-icon");

async function CheckWeather(city) {
  const respone = await fetch(apiurl + city + &appid=${apikey});

  if (respone.status == 404) {
    document.getElementById("error").style.display = "block";
    document.getElementById(weather).style.display = "none";
  } else {
    var data = await response.json();

    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML =
      math.roandam(data.main.temp) + "°C";
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.main.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/cloud.png";
    }
    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    }
    if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    }
    if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    }
    if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    document.getElementById("Weather").style.display = "block";
    document.getElementById("error").style.display = "none";
  }
}
searchbtn.addEventListener("click", () => {
  CheckWeather(SearchBox.value);
});

CheckWeather(city)const apikey = "812a676309ce498a009f77f418746182";
const apiurl = `https://api.openweathermap.org/data/2.5/weather?appid=${apikey}&units=metric&q=`;

const SearchBox = document.getElementById("Search-input");
const searchbtn = document.getElementById("search-button");
const weatherIcon = document.getElementById("Weather-icon");

async function checkWeather(city) {
  try {
    const response = await fetch(`${apiurl}${city}`);

    if (response.status === 404) {
      document.getElementById("error").style.display = "block";
      document.getElementById("Weather").style.display = "none";
    } else {
      const data = await response.json();

      document.getElementById("city").innerHTML = data.name;
      document.getElementById("temp").innerHTML = `${Math.round(data.main.temp)}°C`;
      document.getElementById("humidity").innerHTML = `${data.main.humidity}%`;
      document.getElementById("wind").innerHTML = `${data.main.speed}km/h`;

      switch (data.weather[0].main) {
        case "Clouds":
          weatherIcon.src = "images/cloud.png";
          break;
        case "Clear":
          weatherIcon.src = "images/clear.png";
          break;
        case "Rain":
          weatherIcon.src = "images/rain.png";
          break;
        case "Drizzle":
          weatherIcon.src = "images/drizzle.png";
          break;
        case "Mist":
          weatherIcon.src = "images/mist.png";
          break;
        default:
          weatherIcon.src = "images/default.png";
      }

      document.getElementById("Weather").style.display = "block";
      document.getElementById("error").style.display = "none";
    }
  } catch (error) {
    console.error(error);
  }
}

searchbtn.addEventListener("click", () => {
  checkWeather(SearchBox.value);
});