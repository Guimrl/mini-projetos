const canvas = document.getElementById("canvas");
const body = document.querySelector('body');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var corAtual = '';
var tamLinha = 5;
let x = null;
let y = null;
let draw = false;

body.style.backgroundColor = "#FFFFFF";
var input = document.getElementById("favcolor");

input.addEventListener("input", function () {
    corAtual = input.value;
    body.style.backgroundColor = corAtual;
}, false);

const canvasContext = canvas.getContext("2d");
canvasContext.lineWidth = tamLinha;

document.getElementById("inputId").oninput = function () {
    draw = null;
    tamLinha = document.getElementById("inputId").value;;
    document.getElementById("outputId").innerHTML = tamLinha;
    canvasContext.lineWidth = tamLinha;
}

let cores = document.querySelectorAll(".color");
cores = Array.from(cores);
cores.forEach(cor => {
    cor.addEventListener("click", () => {
        canvasContext.strokeStyle = cor.dataset.color;
    });
});

let limpar = document.querySelector(".clear");
limpar.addEventListener("click", () => {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
});

let download = document.querySelector(".save");
download.addEventListener("click", () => {
    let arquivo = canvas.toDataURL("imag/png");
    let a = document.createElement("a");
    a.href = arquivo;
    a.download = "sketch.png";
    a.click();
});

window.addEventListener("touchstart", (e) => {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
    draw = true;
});

window.addEventListener("touchend", (e) => draw = false);

window.addEventListener("touchmove", (e) => {
    if (!draw) {
        return;
    }
    let atualX = e.touches[0].clientX;
    let atualY = e.touches[0].clientY;
    canvasContext.beginPath();
    canvasContext.moveTo(x, y);
    canvasContext.lineTo(atualX, atualY);
    canvasContext.stroke();
    x = atualX;
    y = atualY;
});
