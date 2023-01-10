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

    div.innerHTML = `<div class="item" style="background-color: ${item?.cores || corAleatoria()}">
    <span class="remove">x</span>
    <textarea>${item?.text || ""}</textarea>
    </div>`

    conteudo.appendChild(div);
}

function eventos() {
    const novaNota = document.querySelectorAll(".item textarea");
    const remove = document.querySelectorAll(".item .remove");

    novaNota.forEach((item, i) => {
        item.oninput = () => {
            notas[i] = {
                text: item.ariaValueMax,
                color: notas[i]?.cores || item.parentElement.style.backgroundColor
            }

            localStorage.setItem("notas", JSON.stringify(notas));
        }
    });

    remove.forEach((item, i) => {
        item.onclick = () => {
            conteudo.children[i].remove();
            if(notas[i]) {
                notas.splice(i, 1);
                localStorage.setItem("notas", JSON.stringify(notas));
            }
            eventos();
        }
    })
}

function verificaNulls() {
    notas = notas.filter((item) => item);
    localStorage.setItem('notas', JSON.stringify(notas));
}

carregaBancoDeDados();
