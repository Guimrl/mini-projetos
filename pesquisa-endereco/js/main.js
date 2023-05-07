
function getDataAddressByCEP(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let xmlHttp = new XMLHttpRequest();
    const endereco = document.getElementById('endereco');
    const bairro = document.getElementById('bairro');
    const cidade = document.getElementById('cidade');
    const uf = document.getElementById('uf');
    const ibge = document.getElementById('ibge');

    xmlHttp.open('GET', url);

    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let jsonDataTxt = xmlHttp.responseText;
            let res = JSON.parse(jsonDataTxt);
            // console.log(res)
            endereco.value = "";
            bairro.value = "";
            cidade.value = "";
            uf.value = "";
            ibge.value = "";

            if (res.erro == undefined) {
                endereco.value = res.logradouro;
                bairro.value = res.bairro;
                cidade.value = res.localidade;
                uf.value = res.uf;
                ibge.value = res.ibge;
            }
        }
    }
    xmlHttp.send();
}
