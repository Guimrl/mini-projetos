// Parallax1
const h1 = document.querySelector("h1"),
    banner = document.getElementById("banner")

const usarOScroll = (event) => {
    const posicaoScroll = event.target.scrollingElement.scrollTop;
    if (posicaoScroll > 100) {
        banner.style.backgroundSize = "190%";
        h1.style.opacity = 0;
        h1.style.translate = "0 -50px";
        h1.style.scale = "0.9";
    } else {
        banner.style.backgroundSize = "150%";
        h1.style.opacity = 1;
        h1.style.translate = 0;
        h1.style.scale = 1;
    }
};

document.addEventListener("scroll", usarOScroll);


//Parallax3
const scroll = (event) => {
    const scrollPosition = event.target.scrollingElement.scrollTop;
    const imagem = document.querySelectorAll("img");

    imagem.forEach((element) => {
        element.style.transform = `translate(0, ${scrollPosition / 10}px)`;
    });
}

window.addEventListener("scroll", scroll);

//Parallax4
const cardWidth = 500,
    degIncrement = 6,
    card = document.getElementById("card");

const getRotateDeg = (input) => {
    if (input < cardWidth * 0.33) {
        return `-${degIncrement * 3}deg`;
    } else if (input >= cardWidth * 0.33 && input < cardWidth * 0.66) {
        return `-${degIncrement}deg`;
    } else if (input >= cardWidth * 0.66 && input < cardWidth * 0.5) {
        return "0deg";
    } else if (input >= cardWidth * 0.5 && input < cardWidth * 0.33) {
        return `${degIncrement}deg`;
    } else {
        return `${degIncrement * 3}deg`;
    }
};

const onMouseMove = (event) => {
    const { target } = event;
    const rect = target.getBoundingClientRect();

    const rotateX = getRotateDeg(event.clientY - rect.top);
    const rotateY = getRotateDeg(event.clientX - rect.left);

    card.style.transform = `rotateX(${rotateX}) rotateY(${rotateY})`;
};

const onMouseLeave = () => {
    card.style.transform = `none`;
};
