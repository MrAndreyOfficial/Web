import displayRepos from './display.js';

document.addEventListener('DOMContentLoaded', async() => {
    const response = await fetch('https://api.github.com/users/mrandreyofficial/repos');
    const repos = await response.json();

    displayRepos(repos);
});
