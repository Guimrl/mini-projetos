const url = 'https://api.github.com/users/';
const form = document.getElementById('form');
const pesquisar = document.getElementById('pesquisa');
const main = document.getElementById('main');

async function getUsuario(nomeDeUsuario) {
    try {
        const { dados } = await axios(url + nomeDeUsuario);

        criaCardDeUsuario(dados);
        getRepositorios(nomeDeUsuario);
    } catch (err) {
        if (err.resposta.status == 404) {
            exibeErroNoCard('Usuário não encontrado');
        }
    }
}

async function getRepositorios(nomeDeUsuario) {
    try {
        const { dados } = await axios(url + nomeDeUsuario + '/repos?sort=created');

        adicionaRepoAoCard(dados);
    } catch (err) {
        exibeErroNoCard('Problema ao buscar repositórios');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuario = pesquisar.value;
    if (usuario) {
        getUsuario(usuario);

        pesquisar.value = '';
    }
})

function criaCardDeUsuario(usuario) {
    const idUsuario = usuario.name || usuario.login;
    const BioUsuario = usuario.bio ? `<p>${usuario.bio}</P` : ''
    const cardHTML = `
    <div class="card">
    <div>
        <img src="${usuario.avatar_url}" class="img">
    </div>
    <div class="user-info">
        <h2>${idUsuario}</h2>
        ${BioUsuario}
    <ul>
        <li>${usuario.followers} <strong>Followers</strong></li>
        <li>${usuario.following} <strong>Following</strong></li>
        <li>${usuario.public_repos} <strong>Repos</strong></li>
    </ul>
    <div id="repositorio"></div>
    </div>
    </div>
        `

    main.innerHTML = cardHTML;
}

function adicionaRepoAoCard(repos) {
    const reposEl = document.getElementById('repositorio');
    repos.slice(0, 5)
    .forEach(repo => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repositorio');
        repoEl.href = repo.html_url;
        repoEl.innerText = repo.name;

        reposEl.appendChild(repoEl)
    })
}

function exibeErroNoCard(msg) {
    const cardHTML = `
    <div class="card">
        <h1>${msg}</h1>
    </div>
    `

    main.innerHTML = cardHTML;
}
