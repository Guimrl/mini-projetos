window.onload = () => {

    let segundos = 00;
    let milesimos = 00;
    let adicionaMilesimos = document.getElementById("milesimos");
    let adicionaSegundos = document.getElementById("segundos");
    let botaoStart = document.getElementById("btn-start");
    let botaoStop = document.getElementById("btn-stop");
    let botaoReset = document.getElementById("btn-reset");

    let intervalo;

    botaoStart.onclick = () => {
        clearInterval(intervalo);

        intervalo = setInterval(contagem, 10);
    }

    botaoStop.onclick = () => {
        clearInterval(intervalo);
    }

    botaoReset.onclick = () => {
        clearInterval(intervalo);

        milesimos = "00";
        segundos = "00";
        adicionaMilesimos.innerHTML = milesimos;
        adicionaSegundos.innerHTML = segundos;
    }

    function contagem() {
        milesimos++;

        if(milesimos <= 9) {
            adicionaMilesimos.innerHTML = "0" + milesimos;
        }

        if(milesimos > 9) {
            adicionaMilesimos.innerHTML = milesimos;
        }

        if(milesimos > 99) {
            console.log("segundos");
            segundos++;

            adicionaSegundos.innerHTML = "0" + segundos;

            milesimos = 0;

            adicionaMilesimos.innerHTML = "0" + 0;
        }

        if(segundos > 9) {
            adicionaSegundos.innerHTML = segundos;
        }
    }
}