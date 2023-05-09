
function generatePassword() {
    let chars = "abcdef";
    let nums = "1234";
    let length = 8;
    let password = "";
    let num = false;
    let upper = false;

    if (num = true) {
        chars = chars + nums;
        console.log(chars)
    }
    
    if (upper = true) {
        chars = chars + chars.toUpperCase();
        console.log(chars)
    }

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * chars.length);
        password += chars.substring(random, random + 1);
    }

    console.log(password)
}

generatePassword();
