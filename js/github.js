async function getGitHubInfo() {
    const response = await fetch(" https://api.github.com/users/theduckfliesagain/repos");
    const data = await response.json();
    console.log(data);
}

// getGitHubInfo();