const textAreaElement = document.getElementById('text-area');

const wordsCountElement = document.getElementById('words-count');
const charactersCountElement = document.getElementById('characters-count');

textAreaElement.addEventListener('input', () => {
    const wordsCount = textAreaElement.value.replace(/\s/g, "").length;
    const charactersCount = textAreaElement.value.length;

    wordsCountElement.textContent = `${wordsCount} Words`;
    charactersCountElement.textContent = `${charactersCount} characters`;
});
