import { getAllPosts, toggleVisibilityCard } from './posts.js';

const url = 'https://jsonplaceholder.typicode.com/posts/';

const posts = await getAllPosts(url);

const cardsElement = document.querySelector('.cards');
const searchButtonElement = document.getElementById('search-button');
const searchBoxElement = document.getElementById('search-box');

for (let i = 1, length = 10; i < length; i++) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    
    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    
    cardDiv.append(cardBodyDiv);

    const titleCardElement = document.createElement('h2');

    titleCardElement.classList.add('card-title');
    titleCardElement.textContent = posts[i].title;

    cardBodyDiv.append(titleCardElement);

    cardsElement.appendChild(cardDiv);
}

const cards = document.getElementsByClassName('card');

searchButtonElement.addEventListener('click', () => {
    const value = searchBoxElement.value;

    toggleVisibilityCard(cards, value);
});
