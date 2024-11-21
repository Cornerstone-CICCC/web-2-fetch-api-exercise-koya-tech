// YOUR JS CODE HERE
const data = fetch('https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1')
    .then(response => response.json())
    .then(data => {
        updateWeatherInfo(data);
        // console.log(data.timezone);
        return data;
    });

function updateWeatherInfo(data) {
    const windspeedElement = document.querySelector('.windspeed span');
    windspeedElement.textContent = data.current.wind_speed_10m + ' m/s';

    const locationElement = document.querySelector('.location');
    locationElement.textContent = `Location: ${data.timezone}`;

    const lastUpdatedElement = document.querySelector('.updateTime span');
    lastUpdatedElement.textContent = new Date(data.current.time).toLocaleString();
}