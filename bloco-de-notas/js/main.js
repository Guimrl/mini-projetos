const addBtn = document.querySelector("#add");
const conteudo = document.querySelector("#conteudo");
const notas_db = localStorage.getItem("notas_db") ? JSON.parse(localStorage.getItem("notas_db")) : [];

addBtn.onclick = () => {
    novaNota();
    eventos();
}

const cores = [
    "#845EC2",
    "#008F7A",
    "#008E9B",
    "#FFC75F",
    "#FF8066",
    "#BA3CAF",
];

const corAleatoria = () => cores[Math.floor(Math.random() * cores.length)];

function carregaBancoDeDados() {
    conteudo.innerHTML = "";
    verificaNulls();

    notas_db.forEach((item, i) => {
        novaNota(item, i);
    });

    eventos();
}

function novaNota(item) {
    const div = document.createElement("div");

    div.innerHTML = `<div class="item" style="background-color: ${item?.cor || corAleatoria()
        }">
    <span class="remove">X</span>
    <textarea>${item?.text || ""}</textarea>
  </div>`;

    conteudo.appendChild(div);
}

function eventos() {
    const novaNota = document.querySelectorAll(".item textarea");
    const remove = document.querySelectorAll(".item .remove");

    novaNota.forEach((item, i) => {
        item.oninput = () => {
            notas_db[i] = {
                text: item.value,
                cor: notas_db[i]?.cor || item.parentElement.style.backgroundColor,
            };

            localStorage.setItem("notas_db", JSON.stringify(notas_db));
        };
    });

    remove.forEach((item, i) => {
        item.onclick = () => {
            conteudo.children[i].remove();
            if (notas_db[i]) {
                notas_db.splice(i, 1);
                localStorage.setItem("notas_db", JSON.stringify(notas_db));
            }
            eventos();
        };
    });
}

function verificaNulls() {
    notas_db = notas_db.filter((item) => item);
    localStorage.setItem("notas_db", JSON.stringify(notas_db));
}

carregaBancoDeDados();
