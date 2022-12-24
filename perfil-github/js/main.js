const url = 'https://api.github.com/users/';
const form = document.getElementById('form');
const pesquisar = document.getElementById('pesquisa');
console.log(url)
async function getUsuario(nomeDeUsuario) {
    try {
        const { data } = await axios(url + nomeDeUsuario);

    } catch(err) {
        if(err.resposta.status == 404) {
            erroCard('Usuário não encontrado');
        }
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuario = pesquisar.value;
    if(usuario) {
        getUsuario(usuario);

        pesquisar.value = '';
    }
})

erroCard(msg) {
    const cardHTML = `
    <div class="card">
        <h1>${msg}</h1>
    </div>
    `
}
