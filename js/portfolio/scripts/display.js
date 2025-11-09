export default function displayRepos(repos) {
    const projectList = document.querySelector('.project-list');

    for (const repo of repos) {
        const cardElement = document.createElement('li');
        cardElement.classList.add('card', 'p-4');

        const cardHeaderElement = document.createElement('div');
        cardHeaderElement.classList.add('card-header');
        
        const cardTitleElement = document.createElement('h2');
        cardTitleElement.classList.add('title', 'my-3');
        
        cardTitleElement.textContent = `${repo.name} projects`;

        cardHeaderElement.append(cardTitleElement);

        const cardFooterElement = document.createElement('div');
        cardFooterElement.classList.add('card-footer', 'mt-3', 'pt-3');

        const gitHubLinkElement = document.createElement('a');

        gitHubLinkElement.classList.add('button', 'is-primary');
        gitHubLinkElement.textContent = 'GitHub';

        gitHubLinkElement.href = repo.html_url;
        gitHubLinkElement.setAttribute('target', '_blank');

        cardFooterElement.appendChild(gitHubLinkElement);

        cardElement.append(cardHeaderElement, cardFooterElement);
        
        projectList.appendChild(cardElement);
    }
}
