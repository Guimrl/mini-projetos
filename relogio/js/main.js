const diasDaSemana = {
    0: "Dom",
    1: "Seg",
    2: "Ter",
    3: "Qua",
    4: "Qui",
    5: "Sex",
    6: "Sáb"
};

const mesesDoAno = {
    0: "Janeiro",
    1: "Fevereiro",
    2: "Março",
    3: "Abril",
    4: "Maio",
    5: "Junho",
    6: "Julho",
    7: "Agosto",
    8: "Setembro",
    9: "Outubro",
    10: "Novembro",
    11: "Dezembro"
};

let relogio = () => {
    let data = new Date();
    let hrs = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();
    let hoje = data.getDay();
    let dia = data.getDate();
    let mes = data.getMonth();

    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let horario = `${hrs}:${min}:${sec}`;
    document.getElementById("relogio").innerText = horario;
    setTimeout(relogio, 1000);
    let diaDeHoje = `${diasDaSemana[hoje]}, ${dia} de ${mesesDoAno[mes]}`;
    document.getElementById("calendario").innerText = diaDeHoje;
}

relogio();
