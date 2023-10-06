const section = document.querySelector('#conteudo');

async function getApi(url) {
    const res = await fetch(url);
    const projects = await res.json();
    projects.sort((a, b) => a.title.localeCompare(b.title));

    projects.forEach(project => {
        const tag = document.createElement("a");
        tag.href = `${project.url}`;
        tag.classList.add("btn");
        tag.textContent = project.title;
        tag.target = "_blank";

        section.insertAdjacentElement("beforeend", tag);
    });

}

getApi(process.env.API_URL);
