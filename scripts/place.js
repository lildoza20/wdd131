const temperature = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("windspeed").textContent);

function calculateWindChill(temp, speed) {
    return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
}

let windChill = "N/A";

if (temperature <= 50 && windSpeed > 3) {
    windChill = '${calculateWindChill(temperature, windSpeed).toFixed(1)} °F';
}

document.getElementById("windchill").textContent = windChill;