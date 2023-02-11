let relogio = () => {
    let data = new Date();
    let hrs = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();
    let periodo = "AM";
    if (hrs == 0) {
        hrs = 12;
    }

    if (hrs > 12) {
        hrs = hrs - 12;
        periodo = "PM";
    }

    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let tempo = `${hrs}:${min}:${sec}:${periodo}`;
    document.getElementById("conteudo").innerText = tempo;
    setTimeout(relogio, 1000);
}

relogio();
