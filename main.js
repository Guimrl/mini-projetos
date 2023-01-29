const URL_PADRAO = "https://guimrl.github.io/mini-projetos/";
const section = document.querySelector('#conteudo');

projetos.forEach(projeto => {
    const tag = document.createElement("a");
    tag.href = `${URL_PADRAO}${projeto.url}`;
    tag.classList.add("btn");
    tag.textContent = projeto.title;
    tag.target = "_blank";

    section.insertAdjacentElement("beforeend", tag);
});
