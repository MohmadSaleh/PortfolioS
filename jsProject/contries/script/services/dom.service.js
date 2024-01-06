import { countries, reset, search } from "./countries.service.js";
import { getData, likedCountries, updateData } from "./localStorage.service.js";
/* import { sort } from "./services/sort.service.js"; */

const cards = document.getElementById("cards");

const searchInput = document.getElementById("search");

searchInput.addEventListener('keyup', (event) => {
    reset();
    cards.innerHTML = '';

    if (!event.target.value || event.target.value == '') {
        return createCardsList(countries);
    }

    search(event.target.value);
    createCardsList(countries);
});

const createCard = (country) => {
    const card = document.createElement("div");
    card.className = 'card m-2 col-md-3 col-sm-12 shadow';

    const cardImg = document.createElement("img");
    cardImg.className = 'card-img-top img border rounded shadow mt-3';
    cardImg.src = country.flags.png;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h3');
    cardTitle.className = 'card-title';
    cardTitle.textContent = country.name.common;

    const population = document.createElement('p');
    population.className = 'card-text';
    population.textContent = `population: ${country.population}`;

    const capital = document.createElement('p');
    capital.className = 'card-text';
    capital.textContent = `capital: ${country.capital}`;

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer d-flex justify-content-center';

    const heart = document.createElement('i');
    heart.addEventListener('click', () => {
        updateData(country.name.common);
        if (heart.classList[heart.classList.length - 1] == 'text-dark') {
            heart.className = 'fa fa-heart text-danger';
        }
    });

    let isLiked = false;
    getData();

    if (likedCountries.includes(country.name.common)) {
        isLiked = true;
    }

    heart.className = `fa fa-heart ${isLiked ? 'text-danger' : 'text-dark'}`;

    card.appendChild(cardImg);


    cardBody.appendChild(cardTitle);
    cardBody.appendChild(population);
    cardBody.appendChild(capital);

    card.appendChild(cardBody);

    cardFooter.appendChild(heart);
    card.appendChild(cardFooter);

    cards.appendChild(card);
}

const createCardsList = async (countriesList) => {
    for (const item of countriesList) {
        createCard(item);
    }
}








export { createCardsList, countries, likedCountries };