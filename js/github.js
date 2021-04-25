const { DateTime } = require('luxon');

const featuredProjects = ["habite", "consoul.log"]

async function getRepos() {
    const response = await fetch("/api/repos");
    const data = await response.json();

    const repos = data.filter(repo => {
        return (
            // within the last 6 weeks
            DateTime.fromISO(repo.updated_at) > DateTime.now().minus({ weeks: 8 }) &&
            // has a description
            repo.description !== null &&
            // not already featured
            !featuredProjects.includes(repo.name)
        )
    })

    renderRepos(repos);
}

function renderRepos(repos) {
    const repoSection = document.querySelector(".repos");
    repos.forEach(repo => {
        repoSection.append(createRepoCard(repo))
    });
}

function createRepoCard(repo) {

    const repoCard = document.createElement('div');
    repoCard.className = "item repo";
    repoCard.innerHTML = (
        `
            <h3>${repo.name}
                <a class="icon github" href="${repo.html_url}" target="_blank"></a>
                ${repo.homepage ? `<a class="icon ext-link" href="${repo.homepage}" target="_blank"></a>` : ""} 
            </h3>
            
            <p>${repo.description}</p>
        <div class="repo-details">
        </div>
        `
    )
    return repoCard;
}

module.exports = {
    getRepos
}
