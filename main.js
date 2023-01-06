


for (let i = 0; i < projetos.length; i++) {
    let section = document.querySelector('#conteudo');
    let tag = document.createElement("a");
    tag.href = projetos[i].url;
    tag.classList.add("btn");
    tag.textContent = projetos[i].title;
    tag.target = "_blank";

    section.insertAdjacentElement("beforeend", tag);
}
