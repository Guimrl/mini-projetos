const addBtn = document.getElementById('add');
const conteudo = document.getElementById('conteudo');
const notas = localStorage.getItem("notas") ? JSON.parse(localStorage.getItem("notas")) : [];


addBtn.addEventListener('click', () => {
    novaNota();
    eventos();
});

const cores = [
    "#845EC2",
    "#008F7A",
    "#008E9B",
    "#FFC75F",
    "#FF8066",
    "#BA3CAF"
];

const corAleatoria = () => cores[Math.floor(Math.random() * cores.length)];

function carregaBancoDeDados() {
    conteudo.innerHTML = "";
    verificaNulls();

    notas.forEach((item, i) => {
        novaNota(item, i);
    });

    eventos();
}

function novaNota(item) {
    const div = document.createElement('div');

    div.innerHTML = `<div class="item" style="background-color: ${item?.color || corAleatoria()}">
    <span class="remove">x</span>
    <textarea>${item?.text || ""}</textarea>
    </div>`

    conteudo.appendChild(div);
}

function verificaNulls() {
    notas = notas.filter((item) => item);
    localStorage.setItem('notas', JSON.stringify(notas));
}

carregaBancoDeDados();
