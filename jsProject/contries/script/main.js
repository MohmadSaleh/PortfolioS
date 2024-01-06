import { countries, createCardsList, likedCountries } from "./services/dom.service.js";
import { sortAlphabet, sortByPopulationLgToSm, sortByPopulationSmToLg } from './services/sort.service.js'
function sort12() {
    if ((document.getElementById('sort').value) == 'one') {
        createCardsList(sortAlphabet(countries));
    }
    if ((document.getElementById('sort').value) == 'two') {
        createCardsList(sortByPopulationLgToSm(countries));
    }
    if ((document.getElementById('sort').value) == 'three') {
        createCardsList(sortByPopulationSmToLg(countries));
    }
    else {
        createCardsList(countries);
    }
}
sort12();
/* createCardsList(countries); */

// let obj = {
//     1: 'a',
//     2: 'b'
// }
// let j = JSON.stringify(obj)
// console.log(obj);
// console.log(JSON.parse(j));

// const p = document.createElement('p');
// p.textContent = 'blabla';
// p.className = 'text-light';

// document.body.appendChild(p);