import requestCurrentData from "./weatherData";

// Default place on load
let place = "Kathmandu";

// DOM Elements
const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");
const loading = document.querySelector(".loading");
const errorSection = document.querySelector(".error-section");
const errorMsg = document.querySelector(".error-msg");
const currentContainer = document.querySelector(".current-data");
const forecastContainer = document.querySelector(".forecast-data-container");
const tempToggle = document.querySelector(".temp-checkbox");
const locationInfo = document.querySelector(".location");
const date = document.querySelector(".date");
const weatherIcon = document.querySelector(".weather-icon");
const tempInfo = document.querySelector(".temperature");
const skyInfo = document.querySelector(".sky-info");
const feelsLikeInfo = document.querySelector(".feels-like-data");
const updateTime = document.querySelector(".update-time-data");
const windInfo = document.querySelector(".wind-data");
const visibilityInfo = document.querySelector(".visibility-data");
const sunriseInfo = document.querySelector(".sunrise-data");
const humidityInfo = document.querySelector(".humidity-data");
const cloudInfo = document.querySelector(".cloud-data");
const sunsetInfo = document.querySelector(".sunset-data");
const uvInfo = document.querySelector(".uv-data");
const rainInfo = document.querySelector(".rain-data");
const moonInfo = document.querySelector(".moon-data");
const day2 = document.querySelector(".day2");
const day3 = document.querySelector(".day3");
const forecastIcons = document.querySelectorAll(".forecast-icon");
const forecastTemps = document.querySelectorAll(".forecast-temp");
const rainForecasts = document.querySelectorAll(".rain-forecast-data");
const uvForecasts = document.querySelectorAll(".uv-forecast-data");

function returnDay(dayValue) {
  let day;
  switch (dayValue) {
    case 0:
    case 7:
      day = "Sunday";
      break;
    case 1:
    case 8:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = undefined;
      break;
  }
  return day;
}

function extractTime(fullTime) {
  const parts = fullTime.split(" ");
  const timePart = parts[1].split(":");
  let hour = parseInt(timePart[0], 10);

  const amPm = hour >= 12 ? "PM" : "AM";

  if (hour > 12) {
    hour -= 12;
  } else if (hour === 0) {
    hour = 12;
  }

  return `${hour.toString().padStart(2, "0")}:${timePart[1]} ${amPm}`;
}

function handleUvData(elementNode, data) {
  let uvCondition;
  const uvIndex = elementNode;
  elementNode.classList.remove("low", "moderate", "high", "very-high");
  if (data <= 2) {
    uvCondition = "Low";
  } else if (data > 2 && data <= 5) {
    uvCondition = "Moderate";
  } else if (data > 5 && data <= 7) {
    uvCondition = "High";
  } else {
    uvCondition = "Very High";
  }

  uvIndex.textContent = uvCondition;

  switch (uvCondition) {
    case "Low":
      elementNode.classList.add("low");
      break;
    case "Moderate":
      elementNode.classList.add("moderate");
      break;
    case "High":
      elementNode.classList.add("high");
      break;
    case "Very High":
      elementNode.classList.add("very-high");
      break;
    default:
      elementNode.classList.add("");
  }
}

function handleTemperature(weatherData) {
  if (tempToggle.checked) {
    tempInfo.textContent = `${Math.round(weatherData.current.temp_f)} °F`;
    feelsLikeInfo.textContent = `${Math.round(
      weatherData.current.feelslike_f,
    )} °F`;
    for (let i = 0; i < 3; i += 1) {
      forecastTemps[i].textContent = `${Math.round(
        weatherData.forecast.forecastday[i].day.avgtemp_f,
      )} °F`;
    }
  } else {
    tempInfo.textContent = `${Math.round(weatherData.current.temp_c)} °C`;
    feelsLikeInfo.textContent = `${Math.round(
      weatherData.current.feelslike_c,
    )} °C`;
    for (let i = 0; i < 3; i += 1) {
      forecastTemps[i].textContent = `${Math.round(
        weatherData.forecast.forecastday[i].day.avgtemp_c,
      )} °C`;
    }
  }
}

function updateDom(weatherData) {
  const today = new Date(weatherData.location.localtime);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  locationInfo.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;

  date.textContent = `${returnDay(today.getDay())} ${today.getDate()} ${
    month[today.getMonth()]
  } ${today.getFullYear()} | ${extractTime(weatherData.location.localtime)}`;

  weatherIcon.src = weatherData.current.condition.icon;
  skyInfo.textContent = weatherData.current.condition.text;
  updateTime.textContent = extractTime(weatherData.current.last_updated);
  windInfo.textContent = `${weatherData.current.wind_kph} kph`;
  visibilityInfo.textContent = `${weatherData.current.vis_km} km`;
  sunriseInfo.textContent = weatherData.forecast.forecastday[0].astro.sunrise;
  humidityInfo.textContent = `${weatherData.current.humidity}%`;
  cloudInfo.textContent = `${weatherData.current.cloud}%`;
  rainInfo.textContent = `${
    weatherData.forecast.forecastday[0].hour[today.getHours()].chance_of_rain
  }%`;
  sunsetInfo.textContent = weatherData.forecast.forecastday[0].astro.sunset;
  handleUvData(uvInfo, weatherData.current.uv);
  moonInfo.textContent = weatherData.forecast.forecastday[0].astro.moon_phase;
  day2.textContent = `${returnDay(today.getDay() + 1)}`;
  day3.textContent = `${returnDay(today.getDay() + 2)}`;

  for (let i = 0; i < 3; i += 1) {
    forecastIcons[i].src =
      weatherData.forecast.forecastday[i].day.condition.icon;
    rainForecasts[
      i
    ].textContent = `${weatherData.forecast.forecastday[i].day.daily_chance_of_rain}%`;
    handleUvData(uvForecasts[i], weatherData.forecast.forecastday[i].day.uv);
  }
  handleTemperature(weatherData);
}

async function handleWeatherData() {
  try {
    currentContainer.classList.add("hidden");
    forecastContainer.classList.add("hidden");
    loading.classList.remove("hidden");
    errorSection.classList.add("hidden");
    const weatherData = await requestCurrentData(place);
    updateDom(weatherData);
    loading.classList.add("hidden");
    currentContainer.classList.remove("hidden");
    forecastContainer.classList.remove("hidden");
  } catch (error) {
    loading.classList.add("hidden");
    errorSection.classList.remove("hidden");
    errorMsg.textContent = error.message;
  }
}

function handleSearch() {
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    place = searchBar.value;
    handleWeatherData();
  });
}

function handleTempToggle() {
  tempToggle.addEventListener("change", (e) => {
    if (tempToggle.checked) {
      handleWeatherData();
    } else {
      handleWeatherData();
    }
  });
}

export default function domHandler() {
  handleWeatherData();
  handleSearch();
  handleTempToggle();
}
