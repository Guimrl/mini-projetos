let relogio = () => {
    let data = new Date();
    let hrs = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();
    let periodo = "AM";
    let tempo = `${hrs}:${min}:${$sec}`;
    document.getElementById("conteudo").innerText = tempo;
    setTimeout(relogio, 1000);
}

relogio();