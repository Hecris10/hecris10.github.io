const requesUrl = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requesUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const town = jsonObject["towns"];
        town.forEach((city) => {

            if (city.name == "Preston" || city.name == "Soda Springs" || city.name == "Fish Haven") {
                let section = document.getElementById("sections");
                let div = document.createElement("div");
                let citydiv = document.createElement("div");
                let card = document.createElement("div");
                card.setAttribute("class", "card");
                let h2 = document.createElement("h2");
                let motto = document.createElement("p");
                let year = document.createElement("p");
                year.setAttribute("class", "text");
                let population = document.createElement("p");
                population.setAttribute("class", "text");
                let rain = document.createElement("p");
                rain.setAttribute("class", "text");
                let image = document.createElement("img");
                image.setAttribute('alt', city.name);
                image.setAttribute('src', './images/' + city.name.replace(" ", "") + '.jpg');
                image.setAttribute("id", "img-" + city.name.replace(" ", ""));

                h2.textContent = city.name;
                motto.textContent = city.motto;
                motto.setAttribute("class", "motto");
                year.textContent = "Year Founded " + city.yearFounded;
                population.textContent = "Population " + city.currentPopulation;
                rain.textContent = "Annual Rain Fall " + city.averageRainfall + " inches";

                div.appendChild(h2);
                div.appendChild(motto);
                div.appendChild(year);
                div.appendChild(population);
                div.appendChild(rain);
                div.setAttribute("class", "city");
                citydiv.setAttribute("id", city.name.replace(" ", ""));
                citydiv.setAttribute("class", "citydiv");
                citydiv.appendChild(div);
                card.appendChild(citydiv);
                card.appendChild(image);
                card.setAttribute("id", "card-" + city.name.replace(" ", ""));
                section.appendChild(card);
            }


        });


    })