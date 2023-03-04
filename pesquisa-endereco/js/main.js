function getDataAddressByCEP(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let xmlHttp = new XMLHttpRequest();

    xmlHttp.open('GET', url);

    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let jsonDataTxt = xmlHttp.responseText;
            let res = JSON.parse(jsonDataTxt);
            // console.log(res)
            document.getElementById('endereco').value = res.logradouro;
            document.getElementById('bairro').value = res.bairro;
            document.getElementById('cidade').value = res.localidade;
            document.getElementById('uf').value = res.uf;
            document.getElementById('ibge').value = res.ibge;
        }
    }
    xmlHttp.send();
}