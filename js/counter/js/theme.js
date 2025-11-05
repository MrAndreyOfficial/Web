import { loadDataLocal, saveDataLocal } from './storage.js';

const theme = loadDataLocal('theme') || 'light';
const htmlElement = document.querySelector('html');

htmlElement.setAttribute('data-theme', theme);

export function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
    }
    else {
        htmlElement.setAttribute('data-theme', 'dark');
    }

    saveDataLocal('theme', htmlElement.getAttribute('data-theme'));
}
