requesUrl = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requesUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const town = jsonObject["towns"];
        town.forEach((city) => {


            const eventdiv = document.createElement("div");
            eventdiv.setAttribute('class', 'eventdiv');
            if (city.name == "Preston" || city.name == "Soda Springs" || city.name == "Fish Haven") {
                const eventlist = city.events;
                console.log(eventlist);
                let container = document.createElement('div');
                if (city.name == "Soda Springs") {
                    container.setAttribute('class', 'sodasprings-event');
                } else if (city.name == "Fish Haven") {
                    container.setAttribute('class', 'fishhaven-event');
                } else {
                    container.setAttribute('class', 'preston-event');
                }
                container.setAttribute('class', 'event-container');

                var h3 = document.createElement('h3');
                h3.textContent = city.name;
                container.appendChild(h3);
                for (var i = 0; i < eventlist.length; i++) {
                    let p = document.createElement('p');
                    p.setAttribute('class', 'events-text');
                    p.textContent = eventlist[i];
                    container.appendChild(p);
                }

                eventdiv.appendChild(container);

            }

            let getEvent = document.getElementById("events");

            getEvent.appendChild(eventdiv);
        });


    })