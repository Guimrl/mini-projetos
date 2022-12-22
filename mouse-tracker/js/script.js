var duck = document.querySelector('#duck');

document.onmousemove = (event) => {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    
    duck.style.transition = "0s";
    duck.style.left = x;
    duck.style.top = y;
}

document.onmouseout = (event) => {
    duck.style.transition = "0.7s";
    duck.style.left = "50%";
    duck.style.top = "50%";
}