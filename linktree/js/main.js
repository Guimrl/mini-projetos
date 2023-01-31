const url = 'https://api.github.com/users/guimrl';
const img = document.querySelector('#foto');

async function api() {
    axios.get(url).then(res => {
        criaImagemPerfil(res);
    }).catch(erro => {
        if(erro.request.status === 404) {
            console.log(`
                Erro 404, 
                Mensagem: ${erro}`
            );
        } else {
            console.log(erro);
        }
    }).finally(() => {
        console.log('Página carregada');
    })
}

function criaImagemPerfil(res) {
    const imagem = res.data.avatar_url;

    const htmlImagem = `
    <img src="${imagem}" alt="Guilherme Amaral vestindo
    uma camiseta preta, com barba bem aparada e cabelo curto, em um fundo
    colorido com tonalidades de laranja e branco.">`;

    img.innerHTML = htmlImagem;
}

api();
