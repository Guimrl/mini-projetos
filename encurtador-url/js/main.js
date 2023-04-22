function encurtarUrl() {
    let url = document.getElementById("input").value;
    let headers = {
        "Content-Type": "application/json",
        "apiKey": "fe4f8c854a7c4e8ba1687a3aaed56d8f"
    }

    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    }).then(response => response.json())
        .then(json => {
            let inputUrl = document.getElementById("input");
            inputUrl.value = json.shortUrl;
        }
        ).catch(e => console.error(e))

}

function copiar() {
    let inputUrl = document.getElementById("input");
    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputUrl.value);
    alert(`URL copiada: ${inputUrl.value}`);
}
