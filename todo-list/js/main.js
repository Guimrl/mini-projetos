const form = document.getElementById('form');
const listaDeTarefas = document.getElementById('todos');
const input = document.getElementById('input');

form.addEventListener('submit', () => {
    addTarefa();
})

function addTarefa(tarefa) {
    let campoTarefa = input.value;

    if(campoTarefa) {
        const tarefaEl = document.createElement('li');
        if(tarefa && tarefa.concluida) {
            tarefaEl.classList.add('concluida');
        }

        tarefaEl.innerHTML = campoTarefa;

        listaDeTarefas.appendChild(tarefaEl);

        input.value = '';
    }

}