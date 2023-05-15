let btn = document.querySelector("#btn");
let display = document.querySelector("#display");
let canvas = document.querySelector("#canvas");
let small = document.querySelector("small");
let color;

let random = () => {
    color = "#";
    let hex = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

btn.addEventListener("click", () => {
    canvas.style.backgroundColor = random();
    display.innerHTML = color;
    small.innerHTML = "Clique sobre a cor para copiá-la!";
});

[canvas, display].forEach((el) => {
    el.addEventListener("click", () => {
        navigator.clipboard.writeText(display.textContent);
        small.innerHTML = "Cor copiada!";
    });
});
