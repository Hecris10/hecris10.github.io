requesUrl = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requesUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const town = jsonObject["towns"];
        town.forEach((city) => {



            if (city.name == "Soda Springs") {
                const eventdiv = document.createElement("div");
                eventdiv.setAttribute('class', 'eventdiv');
                const eventlist = city.events;
                console.log(eventlist);
                let container = document.createElement('div');



                for (var i = 0; i < eventlist.length; i++) {
                    let p = document.createElement('p');
                    p.setAttribute('class', 'events-text');
                    p.textContent = eventlist[i];
                    container.appendChild(p);
                }

                let getEvent = document.getElementById("upcoming-events");

                getEvent.appendChild(container);

            }


        });


    })