const handleScroll = (event) => {
    const scrollPosition = event.target.scrollingElement.scrollTop;
    console.log("oi")
    const images = document.querySelectorAll("img");
    console.log("images", images);
    images.forEach((element) => {
        element.style.transform = `translate(0, ${scrollPosition / 10}px)`;
    });
}

window.addEventListener("scroll", handleScroll);