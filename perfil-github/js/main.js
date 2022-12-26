const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const pesquisar = document.getElementById('pesquisar');

async function getUser(nomeDeUsuario) {
    try {
        const { data } = await axios(APIURL + nomeDeUsuario);

        createUserCard(data);
        getRepos(nomeDeUsuario);
    } catch(err) {
        if(err.response.status == 404) {
            createErrorCard('Usuário não encontrado');
        }
    }
}

async function getRepos(nomeDeUsuario) {
    try {
        const { data } = await axios(APIURL + nomeDeUsuario + '/repos?sort=created');

        addReposToCard(data);
    } catch(err) {
        createErrorCard('Problema ao buscar repositório');
    }
}

function createUserCard(user) {
    const userID = user.name || user.login;
    const userBio = user.bio ? `<p>${user.bio}</p>` : '';
    const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers } <strong> Followers</strong></li>
        <li>${user.following } <strong> Following</strong></li>
        <li>${user.public_repos } <strong> Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `
    main.innerHTML = cardHTML;
    
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');

    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoEl = document.createElement('a');
            repoEl.classList.add('repo');
            repoEl.href = repo.html_url;
            repoEl.target = '_blank';
            repoEl.innerText = repo.name;

            reposEl.appendChild(repoEl);
        })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = pesquisar.value;

    if(user) {
        getUser(user);

        pesquisar.value = '';
    }
})
