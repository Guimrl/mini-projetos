let pesquisar = document.getElementById("pesquisar");
let input = document.getElementById("input-pais");
const body = document.getElementsByTagName('body');

pesquisar.addEventListener("click", () => {
    let nomePais = input.value;
    // let url = `https://restcountries.com/v3.1/name/${nomePais}?fullText=true`;
    let url =`https://restcountries.com/v3.1/translation/${nomePais}`;
    // console.log(url);
    fetch(url)
        .then((res) => res.json())
            .then((pais) => {
            console.log(pais[0].translations.por.common);
            // console.log(pais[0].flags.svg)
            console.log(pais[0].name.common)
            // console.log(pais[0].capital[0]);
            // console.log(pais[0].continents[0])
            // console.log(pais[0].population)
            // console.log(pais[0].currencies[Object.keys(pais[0].currencies)].symbol)
            // console.log(Object.keys(pais[0].currencies)[0])
            // console.log(Object.values(pais[0].languages)
            // .toString()
            // .split(",")
            // .join(", "))
            
            resultado.innerHTML = `
            <img src="${pais[0].flags.svg}" class="bandeira">
            `;
    });
});
