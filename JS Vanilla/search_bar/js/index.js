import getAllDataFromUrl from './data.js';
import filterByContent from './filter.js';

document.addEventListener('DOMContentLoaded', async () => {
   await displayData();

   const searchButtonElement = document.getElementById('search-button');
   const quoteNameBox = document.getElementById('quote-name');

   searchButtonElement.addEventListener('click', () => {
        const searchStr = quoteNameBox.value;

        filterByContent(searchStr.toLowerCase());
   });
});

async function displayData() {
    const dataUrl = 'https://dummyjson.com/quotes';
    
    const quotes = await getAllDataFromUrl(dataUrl);

    const cards = document.querySelector('.cards');

    for (const quote of quotes.quotes) {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const bodyContent = document.createElement('q');
        bodyContent.classList.add('is-size-4');
        bodyContent.textContent = quote.quote;

        const cardFooter = document.createElement('div');

        cardFooter.classList.add('card-footer', 'is-justify-content-end', 'pr-4', 'py-3');

        const footerContent = document.createElement('p');

        footerContent.textContent = quote.author;

        cardFooter.appendChild(footerContent);

        cardContent.appendChild(bodyContent);

        card.append(cardContent, cardFooter);
        cards.appendChild(card);
    }
}
