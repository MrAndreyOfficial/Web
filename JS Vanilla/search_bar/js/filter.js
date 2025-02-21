export default function filterByContent(contentSearch) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.style.display = 'revert';

        if (!card.getElementsByTagName('q')[0].innerText.toLowerCase().includes(contentSearch)) {
            card.style.display = 'none';
        }
    });
}
