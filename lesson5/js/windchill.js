function wind_Chill_Factor(temperature, wind_Speed) {
    let factor = (35.74 + (0.6215 * temperature) - (35.75 * Math.pow(wind_Speed, 0.16)) + (0.4275 * temperature * Math.pow(wind_Speed, 0.16)));
    return factor;
}

var temperature = parseFloat(document.querySelector('#temperature').textContent);
console.log(temperature);
var wind_speed = parseFloat(document.getElementById("wind_speed").textContent);
console.log(wind_speed);

if (temperature <= 50 && wind_speed > 3) {
    var windchill = wind_Chill_Factor(temperature, wind_speed);
    document.querySelector("#chill").textContent = windchill.toFixed(0);

} else {
    document.querySelector("#chill").textContent = 'N/A';
}