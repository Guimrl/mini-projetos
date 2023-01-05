
const projetos = [
    {
        title: "parallax",
        url: "https://guimrl.github.io/mini-projetos/parallax-bg/"
    },
    {
        title: "Perfil Github",
        url: "https://guimrl.github.io/mini-projetos/perfil-github/"
    },
    {
        title: "Cronômetro",
        url: "https://guimrl.github.io/mini-projetos/cronometro/"
    },
    {
        title: "Calculadora",
        url: "https://guimrl.github.io/mini-projetos/calculadora/"
    },
    {
        title: "Mouse Tracker",
        url: "https://guimrl.github.io/mini-projetos/mouse-tracker/"
    },
    {
        title: "Bloco de Notas",
        url: "https://guimrl.github.io/mini-projetos/bloco-de-notas/"
    }
];

for (let i = 0; i < projetos.length; i++) {
    let section = document.querySelector('#conteudo');
    let tag = document.createElement("a");
    tag.href = projetos[i].url;
    tag.classList.add("btn");
    tag.textContent = projetos[i].title;
    tag.target = "_blank";

    section.insertAdjacentElement("beforeend", tag);
}
