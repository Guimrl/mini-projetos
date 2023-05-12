
function generatePassword() {
    let content = document.querySelector("#content");
    let numRadio = document.querySelector("#numbers-yes");
    let upperRadio = document.querySelector("#uppercase-yes");
    let specialRadio = document.querySelector("#specialcharacters-yes");
    let length = document.querySelector("#length").value;
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let nums = "1234567890";
    let special = "!@#$%&*?";
    let password = "";
    let isNum;
    let isUpper;
    let isEsp;

    isNum = numRadio.checked ? true : false;
    isUpper = upperRadio.checked ? true : false;
    isEsp = specialRadio.checked ? true : false;

    if (isUpper === true) {
        chars += chars.toUpperCase();
    }

    if (isNum === true) {
        chars += nums;
    }

    if (isEsp === true) {
        chars += special;
    }

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * chars.length);
        password += chars.substring(random, random + 1);
    }
    // console.log(`Senha gerada: ${password}`);

    content.innerHTML = password;
    content.addEventListener("click", () => {
        let inputSelect = document.querySelector("#content");
        navigator.clipboard.writeText(inputSelect.textContent);
        document.querySelector("small").innerHTML = "Senha copiada!";
    })
}

window.addEventListener("submit", (e) => {
    e.preventDefault();
    generatePassword();
});
