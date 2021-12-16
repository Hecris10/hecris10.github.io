const xapiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.627003&lon=-90.199402&appid=b27caf901959760897ab73d613cb808e&units=imperial"

var day_of_week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thi', 'Fri', 'Sat']
var date = new Date();
var n = date.getDay();

fetch(xapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const weatherlist = jsObject['list'];

        currentTemp = jsObject['current']['temp'];
        console.log(currentTemp)

        var currentDescription = (jsObject['current']['weather'][0]['description']);

        var humidity = (jsObject['current']['humidity'])

        var currentIco = (jsObject['current']['weather'][0]['icon'])
        currentIco = "http://openweathermap.org/img/wn/" + currentIco + "@2x.png"

        document.querySelector('#current-name').textContent = day_of_week[n];
        document.querySelector('#current-temp').textContent = currentTemp;
        var img = document.querySelector('#currentIco');
        img.setAttribute('src', currentIco);
        document.querySelector('#current-condition').textContent = currentDescription;
        document.querySelector('#current-humidity').textContent = humidity;



        for (var i = 1; i < 4; i++) {
            var t = document.querySelector('#day' + i);

            var days = day_of_week[n + i];


            var threeTemp = jsObject['daily'][i]['temp']['day'];

            var threeIcon = (jsObject['daily'][i]['weather'][0]['icon']);
            threeIcon = "http://openweathermap.org/img/wn/" + threeIcon + "@2x.png"

            var tName = document.createElement('p');
            tName.textContent = days;

            tImage = document.createElement('img');
            tImage.setAttribute('src', threeIcon);
            tImage.setAttribute('alt', 'day-' + i + 'forecast');

            var tTempo = document.createElement('p')
            tTempo.textContent = threeTemp;
            console.log(threeTemp);
            t.appendChild(tName);
            t.appendChild(tImage);
            t.appendChild(tTempo);

        }

    });