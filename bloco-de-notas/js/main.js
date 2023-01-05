const addBtn = document.getElementById('add');
const notas = JSON.parse(localStorage.getItem('notas'));

if(notas) {
    notas.forEach(nota => addNovaNota(nota));
}

addBtn.addEventListener('click', () => addNovaNota());

function addNovaNota(txt = '') {
    const nota = document.createElement('div');

    nota.innerHTML = `
    <div class='opcoes'>
        <button class="editar">Editar</button>
        <button class="excluir">Ecluir</button>
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
    editarBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    //Excluir
    excluirBtn.addEventListener('click', () => {
        nota.remove();
        atualizar();
    })

    //Pega o valor da textArea
    textArea.addEventListener('input', (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);

        atualizar();
    })

    document.body.appendChild(nota);
}

function atualizar() {
    const notasTxt = document.querySelectorAll('textarea');
    const notas = [];

    notasTxt.forEach(nota => notas.push(nota.value));

    //armazena em localStorage
    localStorage.setItem('notas', JSON.stringify(notas));
}
