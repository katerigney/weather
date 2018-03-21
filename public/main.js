//as a user, I should type in a city name or ZIP code and see the current weather for that location on my screen

//display search box

//on search click, determine if the information input is a zip code or city
const weatherSearch = () => {
  let weatherSearchQuery = document.querySelector(".searchBox").value;
  console.log(weatherSearchQuery)
  if (isNaN(weatherSearchQuery)) {
    pullWeatherForCity(weatherSearchQuery);
  }
  else {
    pullWeatherForZIP(weatherSearchQuery);
  }
}

//if zip, get API URL for zip

const pullWeatherForZIP = (zipCode) => {
  const weatherURLforZIP = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&APPID=77cb4f5c8963d2633252da804b410344&units=imperial";
  console.log("starting request");
  pullWeather(weatherURLforZIP);
}

//if city, get API URL for city

const pullWeatherForCity = (cityName) => {
  const weatherURLforCity = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=77cb4f5c8963d2633252da804b410344&units=imperial";
  console.log("starting request");
  pullWeather(weatherURLforCity);
}

//using APIs, pull and display weather date for search

const pullWeather = (URL) => {
  fetch(URL).then((response) => {
    console.log("response came back", response)
    if (response.status === 200) {
      return response.json();
    }
  }).then((weather) => {
    console.log(weather);
//add element to the DOM
    const output = document.querySelector(".weatherDataDisplay")
    output.textContent = `It is currently ${weather.main.temp} degrees and ${weather.weather[0].main} in ${weather.name}`;
  })
  console.log('fired request');
}