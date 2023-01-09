const form = document.getElementById('form');
const listaDeTarefas = document.getElementById('todos');
const input = document.getElementById('input');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    addTarefa();
})

function addTarefa(tarefa) {
    let campoTarefa = input.value;

    if(tarefa) {
        campoTarefa = tarefa.texto;
    }

    if(campoTarefa) {
        const tarefaEl = document.createElement('li');
        
        if(tarefa && tarefa.concluida) {
            tarefaEl.classList.add('concluida');
        }

        tarefaEl.innerHTML = campoTarefa;

        tarefaEl.addEventListener('click', () => {
            tarefaEl.classList.toggle('concluida');
            atualizar();
        })

        tarefaEl.addEventListener('contextmenu', (evento) => {
            evento.preventDefault();

            tarefaEl.remove();
            atualizar();
        })

        listaDeTarefas.appendChild(tarefaEl);

        input.value = '';

        atualizar();
    }

}

function atualizar() {
    const tarefasEl = document.querySelectorAll('li');

    const tarefas = [];

    tarefasEl.forEach(tarefaEl => {
        tarefas.push({
            texto: tarefaEl.innerText,
            concluida: tarefaEl.classList.contains('concluida')
        })
    })
}