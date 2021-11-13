const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const prophets = jsonObject["prophets"];
        prophets.forEach((prophet) => {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let birth = document.createElement("p");
            let place = document.createElement("p");
            let image = document.createElement("img");

            h2.textContent = (prophet.name + " " + prophet.lastname);
            birth.textContent = "Date of Birth: " + prophet.birthdate;
            place.textContent = "Place of Birth: " + prophet.birthplace;
            image.setAttribute("src", prophet.imageurl);
            image.setAttribute("alt", prophet.name + " " + prophet.lastname + "!");

            card.appendChild(h2);
            card.appendChild(birth);
            card.appendChild(place);
            card.appendChild(image);

            document.querySelector("div.cards").appendChild(card);
        });
    });