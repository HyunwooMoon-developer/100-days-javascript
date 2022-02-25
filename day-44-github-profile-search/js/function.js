import * as v from './variable.js';

//Get User
export async function getUser(username) {
  const res = await fetch(v.url + username);
  const data = await res.json();

  if (!res.ok) {
    errorMessage('User not Found!');
  } else {
    displayData(data);
    getRpepos(username);
  }
}

//Get Repos
async function getRpepos(username) {
  const res = await fetch(v.url + username + '/repos');
  const data = await res.json();

  displayRepos(data);
}

//Error Message
export function errorMessage(msg) {
  v.profile.innerHTML = '';
  document.querySelector('.hide').getElementsByClassName.display = 'none';
  return (v.repos.innerHTML = `<p className="alert alert-danger">${msg}</p>`);
}

//Display Data
function displayData(user) {
  const html = `
  <img
  src="${user.avatar_url}"
  alt="${user.name}"
  class="img-thumbnail rounded-circle"
/>
<h2>${user.name}</h2>
<p>${user.login}</p>
<div class="d-grid">
  <a href="https://github.com/${user.login}" target="_blank" rel="noopener" class="btn btn-outline-secondary">View Profile</a>
</div>
<p class="pt-2">
  <span>${user.followers} Followers</span>
  <span>${user.following} Following</span>
</p>
<p>${user.public_repos}</p>
<p><i class="fas fa-marker-alt"></i>${user.location}</p>
`;
  v.profile.innerHTML = html;
}

//Display Repos
function displayRepos(data) {
  let repoData = data.map((repo) => {
    return `
    <span className="repo border border-rounded p-3">
      <a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a>
      <p>
      <strong>Stars : ${repo.starzers_count} | </strong>
      <strong>Watcher : ${repo.watchers_count} | </strong>
      <strong>Forks: ${repo.forks_count}</strong>
      </p>
    </span>
    `;
  });
  v.repos.innerHTML = repoData.slice(0, 8).join('');
  document.querySelector('.hide').getElementsByClassName.display = 'block';
}
