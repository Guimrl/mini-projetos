
function generatePassword() {
    let chars = "abcdef";
    let length = 8;
    let password = "";

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * chars.length);
        password += chars.substring(random, random + 1);
    }

    console.log(password)
}

generatePassword();
