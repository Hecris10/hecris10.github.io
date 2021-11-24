const xapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=b27caf901959760897ab73d613cb808e&units=imperial";

var fiveDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

fetch(xapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const weatherlist = jsObject['list'];

        var count = 0;
        weatherlist.forEach(element => {
            if (element.dt_txt != null && element.dt_txt != undefined && element.dt_txt.includes("18:00")) {
                var dateWeather = new Date(element.dt_txt);
                var dName = fiveDays[dateWeather.getDay()];
                var dTemp = Math.round(element.main.temp);
                var icon = element.weather[0].icon;
                var iconurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
                count++;

                let section = document.querySelector('#day' + count);
                let name = document.createElement("p");
                name.setAttribute("id", "weatherDayName");
                name.textContent = dName;
                console.log('forecast-name-' + count);
                document.querySelector('#forecast-name-' + count).textContent = dName;



                let img = document.createElement("img");
                img.setAttribute("src", iconurl);
                img.setAttribute("alt", dName);



                let dayTemp = document.createElement("p");
                dayTemp.setAttribute('class', 'temperature');
                dayTemp.textContent = dTemp + "ºF";


                section.appendChild(img);
                section.appendChild(dayTemp);


            }
        });
    })