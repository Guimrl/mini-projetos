for (let i = 0; i < projetos.length; i++) {
    let section = document.querySelector('#conteudo');
    let tag = document.createElement("a");
    let urlPadrao = "https://guimrl.github.io/mini-projetos/";
    tag.href = urlPadrao + projetos[i].url;
    tag.classList.add("btn");
    tag.textContent = projetos[i].title;
    tag.target = "_blank";

    section.insertAdjacentElement("beforeend", tag);
}
