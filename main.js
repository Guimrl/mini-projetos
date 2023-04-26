
const section = document.querySelector('#conteudo');

async function getApi() {
    const res = await fetch("https://api-mini-projetos.up.railway.app/projects")
    const projects = await res.json();
    projects.sort((a, b) => a.title.localeCompare(b.title));

    projects.forEach(project => {
        //console.log(project)
        const tag = document.createElement("a");
        tag.href = `${project.url}`;
        tag.classList.add("btn");
        tag.textContent = project.title;
        tag.target = "_blank";

        section.insertAdjacentElement("beforeend", tag);
    });

}

getApi();
