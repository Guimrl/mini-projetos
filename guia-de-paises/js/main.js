let pesquisar = document.getElementById("pesquisar");
let input = document.getElementById("input-pais");

pesquisar.addEventListener("click", () => {
    let nomePais = input.value;
    let url = `https://restcountries.com/v3.1/translation/${nomePais}`;

    fetch(url)
    .then((res) => res.json())
        .then((pais) => {
            resultado.innerHTML = `
            <img src="${pais[0].flags.svg}" alt="${pais[0].flags.alt}" class="bandeira">
            <h2>${pais[0].name.common} (${pais[0].translations.por.common})</h2>
            <h4>Capital:</h4>
            <span>${pais[0].capital[0]}</span><br>
            <h4>Continent:</h4>
            <span>${pais[0].continents[0]}</span><br>
            <h4>Population:</h4>
            <span>${pais[0].population}</span><br>
            <h4>Currency:</h4>
            <span>${pais[0].currencies[Object.keys(pais[0].currencies)].name} - ${Object.keys(pais[0].currencies)[0]} - ${pais[0].currencies[Object.keys(pais[0].currencies)].symbol}</span><br>
            
            <h4>languages:</h4>
            <span>${Object.values(pais[0].languages)
                .toString()
                .split(",")
                .join(", ")}
            </span>
            `;
        }).catch(() => {
            if (nomePais.lenght == 0) {
                resultado.innerHTML = `<h3>O campo não pode ser vazio</h3>`;
            } else {
                resultado.innerHTML = `<h3>Por favor insira um país válido<h3>`;
            }
        });
});
