let pesquisar = document.getElementById("pesquisar");
let input = document.getElementById("input-pais");

pesquisar.addEventListener("click", () => {
    let nomePais = input.value;
    let url = `https://restcountries.com/v3.1/name/${nomePais}?fullText=true`;
    console.log(url);
    fetch(url)
        .then((res) => res.json())
            .then((pais) => {
            console.log(pais[0]);
            // console.log(pais[0].capital[0]);
            // console.log(pais[0].currencies[Object.keys(pais[0].currencies)].name)
            resultado.innerHTML = `
            <img src="${pais[0].flags.svg}" class="bandeira">
            `;
    });
});
