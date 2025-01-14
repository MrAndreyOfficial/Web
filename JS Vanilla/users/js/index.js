import getDataFromUrl from './data.js';
import search from './search.js';

const users = await getDataFromUrl('https://dummyjson.com/users');
const cardsContainer = document.querySelector('.cards');

for (const user of users.users) {
    const cardElement = document.createElement('div');

    cardElement.classList.add('card');

    const cardHeaderElement = document.createElement('div');
    const cardBodyElement = document.createElement('div');

    cardHeaderElement.classList.add('card-header');
    cardBodyElement.classList.add('card-body');

    const cardHeaderTitleElement = document.createElement('h3');
    cardHeaderTitleElement.textContent = `${user.firstName} ${user.lastName}`;
    cardHeaderTitleElement.classList.add('card-title');

    const cardBodyDescriptionElement = document.createElement('p');
    cardBodyDescriptionElement.innerHTML = `Email: ${user.email}<br>Phone: ${user.phone}`;

    cardHeaderElement.append(cardHeaderTitleElement);
    cardBodyElement.append(cardBodyDescriptionElement);

    cardElement.append(cardHeaderElement);
    cardElement.append(cardBodyElement);

    cardsContainer.append(cardElement);
}

const searchButtonElement = document.getElementById('search-button');
const searchBarElement = document.getElementById('search-bar')

searchButtonElement.addEventListener('click', () => {
    const value = searchBarElement.value.toUpperCase();

    search(value);
});
