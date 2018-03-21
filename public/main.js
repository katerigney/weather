//as a user, I should type in a city name or ZIP code and see the current weather for that location on my screen

//display search box

//on search click, determine if the information input is a zip code or city


//if it is a ZIP code, fetch the data for the ZIP code 

let zipName = 33705 //testing

const pullWeatherForZIP = () => {
  const weatherURLforZIP = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipName + "&APPID=77cb4f5c8963d2633252da804b410344&units=imperial";

  console.log("starting request");
  fetch(weatherURLforZIP).then((response) => {
    console.log("response came back", response)
    if (response.status === 200) {
      return response.json();
    }
  }).then((weatherForZIP) => {
    console.log(weatherForZIP);
//add element to the DOM
    const output = document.querySelector(".weatherDataDisplay")
    output.textContent = `It is currently ${weatherForZIP.main.temp} degrees in ${weatherForZIP.name}`;
  })
  console.log('fired request');
}

//if search is a city, fetch the data for the city.

let cityName = "London" //testing

const pullWeatherForCity = () => {
  const weatherURLforCity = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=77cb4f5c8963d2633252da804b410344&units=imperial";

  console.log("starting request");
  fetch(weatherURLforCity).then((response) => {
    console.log("response came back", response)
    if (response.status === 200) {
      return response.json();
    }
  }).then((weatherForCity) => {
    console.log(weatherForCity);
    const output = document.querySelector(".weatherDataDisplay")
    output.textContent = `It is currently ${weatherForCity.main.temp} degrees in ${weatherForCity.name}`;
  })
  console.log('fired request');
}



// Allow the user to type in a place, click the search button, and , using openweathermap.org, get the current weather for that location

// display the weather to user by adding elements to the DOM.

// allow the user to search by zip or city name