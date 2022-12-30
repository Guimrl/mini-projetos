const addBtn = document.getElementById('add');

addBtn.addEventListener('click', () => addNovaNota());

function addNovaNota(txt = '') {
    const nota = document.createElement('div');

    nota.innerHTML = `
    <div>
        <button class="editar">Editar</button>
        <button class="excluir">Excluir</button>
    </div>
    <div class="main ${txt ? "" : "hidden"}"></div>
    <textarea class="${txt ? "hidden" : ""}"></textarea>
    `
    
    const editarBtn = nota.querySelector('.editar');
    const excluirBtn = nota.querySelector('.excluir');
    const main = nota.querySelector('.main')
    const textArea = nota.querySelector('textarea');

    textArea.value = txt;
    main.innerHTML = marked(txt);

    //Editar

    //Excluir

    //Pega o valor da textArea
    textArea.addEventListener('input', (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);

        atualizar();

        //armazena em localStorage?
    })

    document.body.appendChild(nota);
}

function atualizar() {
    const notasTxt = document.querySelectorAll('textarea');
    const notas = [];

    notasTxt.forEach(nota => notas.push(nota.value));
}
