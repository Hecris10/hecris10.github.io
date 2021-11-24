requesUrl = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requesUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const town = jsonObject["towns"];
        town.forEach((city) => {



            if (city.name == "Preston" || city.name == "Soda Springs" || city.name == "Fish Haven") {
                const eventdiv = document.createElement("div");
                eventdiv.setAttribute('class', 'eventdiv');
                const eventlist = city.events;
                console.log(eventlist);
                let container = document.createElement('div');
                if (city.name == "Soda Springs") {
                    container.setAttribute('id', 'sodasprings-event');

                } else if (city.name == "Fish Haven") {
                    container.setAttribute('id', 'fishhaven-event');

                } else {
                    container.setAttribute('id', 'preston-event');

                }
                container.setAttribute('class', 'event-container');

                var h3 = document.createElement('h3');

                h3.textContent = city.name;
                container.appendChild(h3);
                container.appendChild(document.createElement('hr'));
                for (var i = 0; i < eventlist.length; i++) {
                    let p = document.createElement('p');
                    p.setAttribute('class', 'events-text');
                    p.textContent = eventlist[i];
                    container.appendChild(p);
                }

                let getEvent = document.getElementById("events");

                getEvent.appendChild(container);

            }


        });


    })