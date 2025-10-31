export async function getAllPosts(url) {
    const response = await fetch(url);
    const json = await response.json();

    return json;
}

export function toggleVisibilityCard(cards, valueForSearch) {
    for (const card of cards) {
        if (card.textContent.includes(valueForSearch)) {
            card.style.display = 'flex';
            continue;
        }

        card.style.display = 'none';
    }
}
