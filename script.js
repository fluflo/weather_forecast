const main = document.querySelector("main");
const body = document.querySelector("body");

function fetchWeatherData(){
    main.replaceChildren(createLoadingScreen());
    setTimeout(() => {
        fetch("https://api.open-meteo.com/v1/forecast?latitude=46.516&longitude=6.6328&current=temperature_2m,apparent_temperature,is_day,precipitation,rain,weathercode,windspeed_10m&hourly=temperature_2m,apparent_temperature,weathercode&forecast_days=3")
            .then(response => response.json())
            .then(displayWeatherData)
    }, 1000);
    
}

function changeMode(){
    body.classList.toggle("dark");
}

function createLoadingScreen(){
    const loadingScreen = document.createElement("div");
    loadingScreen.classList.add("lds-dual-ring");
    return loadingScreen;
}

function displayWeatherData(weatherData){
    const isDarkMode = weatherData.current.is_day;
    main.replaceChildren();
    main.appendChild(createCurrentWeatherSection(weatherData.current, weatherData.current_units));
    main.appendChild(createForecastWeatherSection(weatherData.hourly, weatherData.hourly_units));
    if (isDarkMode) body.classList.add("dark");
}

function generateHourlyForecastObject(hourlyForecast){
    const forecasts = [];
    for (index in hourlyForecast.time){
        forecasts.push({
            time: new Date(hourlyForecast.time[index] + "Z"),
            temperature_2m: hourlyForecast.temperature_2m[index],
            apparent_temperature: hourlyForecast.apparent_temperature[index],
            weathercode: hourlyForecast.weathercode[index]
        });
    }
    return forecasts;
}

function createForecastWeatherSection(hourlyForecast, hourlyUnits){
    const section = document.createElement("section");
    const heading2 = document.createElement("h2");
    const div = document.createElement("div");

    heading2.textContent = "3-day forecast"
    section.classList.add("hourlyForecasts");

    generateHourlyForecastObject(hourlyForecast).forEach((forecast, index) => {
        if (index % 6 === 0 && forecast.time > new Date()){
            div.appendChild(createDailyForecastWeaterSection(forecast, hourlyUnits));
        } 
    });

    section.appendChild(heading2);
    section.appendChild(div);
    return section;
}

function createDailyForecastWeaterSection(forecast, units){
    const hourlySection = document.createElement("section");
    hourlySection.classList.add("hourlyForecast");
    hourlySection.appendChild(createForecastTime(forecast.time));
    hourlySection.appendChild(createWeatherIcon(forecast.weathercode, isDayTime(forecast.time)))
    hourlySection.appendChild(createCurrentTemperature(forecast.temperature_2m, units.temperature_2m));
    hourlySection.appendChild(createApparentTemperature(forecast.apparent_temperature, units.apparent_temperature))
    return hourlySection
}

function createCurrentWeatherSection(currentWeather, currentUnits){
    const section = document.createElement("section");
    section.classList.add("currentWeather");
    section.id = "currentWeather";
    section.appendChild(createCurrentTemperature(currentWeather.temperature_2m, currentUnits.temperature_2m));
    section.appendChild(createWeatherIcon(currentWeather.weathercode, currentWeather.is_day));
    section.appendChild(createApparentTemperature(currentWeather.apparent_temperature, currentUnits.apparent_temperature));
    section.appendChild(createWeatherDescription(currentWeather.weathercode));
    section.appendChild(createCurrentTime(new Date(currentWeather.time + "Z")));
    return section;
}

function createCurrentTemperature(currentTemperature, unit){
    const heading2 = document.createElement("h2");
    heading2.textContent = `${currentTemperature} ${unit}`;
    return heading2;
}

function createApparentTemperature(currentTemperature, unit){
    const paragraph = document.createElement("p");
    paragraph.textContent = `Feels like ${currentTemperature} ${unit}`;
    return paragraph;
}

function createWeatherDescription(wmoCode){
    const paragraph = document.createElement("p");
    paragraph.textContent = WMO_CODES_TO_STRING[wmoCode].description;
    return paragraph;
}

function createWeatherIcon(wmoCode, isDay){
    const image = document.createElement("img");
    image.classList.add("weatherIcon");
    image.src = isDay ? WMO_CODES_TO_STRING[wmoCode].image_day : WMO_CODES_TO_STRING[wmoCode].image_night;
    return image;
}

function createCurrentTime(time) {
    const paragraph = document.createElement("p");
    paragraph.classList.add("currentTime");
    paragraph.textContent = `Last refreshed ${time.toLocaleTimeString().slice(0,5)}`;
    return paragraph;
}

function createForecastTime(time) {
    const heading3 = document.createElement("h3");
    heading3.classList.add("forecastTime");
    heading3.textContent = `${time.toLocaleString().slice(0,-3)}`;
    return heading3;
}

function isDayTime(time){
    return time.getHours() < 19 && time.getHours() > 6;
}

fetchWeatherData()