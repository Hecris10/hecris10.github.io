const urlEvents = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(urlEvents)
    .then((response) => response.json())
    .then((jsObject) => {


        const eventdiv = document.createElement("p");

        const lista = jsObject["towns"];

        for (var i = 0; i < 3; i++) {
            const eventlist = lista[i]["events"];
            console.log(eventlist);

        }

        let getEvent = document.getElementById("events");

        getEvent.appendChild(eventdiv);


    });