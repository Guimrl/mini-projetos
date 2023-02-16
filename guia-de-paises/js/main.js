let pesquisar = document.getElementById("pesquisar");
let input = document.getElementById("input-pais");

pesquisar.addEventListener("click", () => {
    let nomePais = input.value;
    let url = `https://restcountries.com/v3.1/name/${nomePais}?fullText=true`;
    console.log(url);
});
