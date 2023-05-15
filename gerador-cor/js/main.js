let btn = document.querySelector("#btn");
let color;

let random = () => {
    color = '#';
    let hex = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

btn.addEventListener("click", () => {
    document.body.style.backgroundColor = random();

});

