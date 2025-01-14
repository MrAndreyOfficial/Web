const cards = document.getElementsByClassName('card');
const headings = document.getElementsByClassName('card-title');
const paragraphs = document.getElementsByTagName('p');

export default function search(data) {
    const cardsLength = headings.length;

    for (let i = 0; i < cardsLength; i++) {
        const card = cards[i];

        const headingValue = headings[i].innerHTML.toUpperCase();
        const paragraphValue = paragraphs[i].innerHTML.toUpperCase();

        if (headingValue.includes(data) || paragraphValue.includes(data)) {
            show(card);
        }
        else {
            hide(card);
        }
    }
}

function show(element) {
    element.style.display = "block";
}

function hide(element) {
    element.style.display = "none";
}
