let relogio = () => {
    let data = new Date();
    let hrs = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();

    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let tempo = `${hrs}:${min}:${sec}`;
    document.getElementById("conteudo").innerText = tempo;
    setTimeout(relogio, 1000);
}

relogio();
