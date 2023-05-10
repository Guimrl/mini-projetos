
function generatePassword() {
    let checkNum = document.querySelector("#numbers-yes");
    let checkUpper = document.querySelector("#uppercase-yes");
    let checkSpecial = document.querySelector("#specialcharacters-yes");
    let length = document.querySelector("#length").value;
    let chars = "abcdefghijklmnopqrstuvxywz";
    let nums = "1234567890";
    let specialChars = "!@#$%&*?";
    let password = "";
    let num;
    let upper;
    let isEsp;

    if (checkNum.checked === true) {
        num = true;
    } else {
        num = false;
    }

    if (checkUpper.checked === true) {
        upper = true;
    } else {
        upper = false;
    }

    if (checkSpecial.checked === true) {
        isEsp = true;
    } else {
        isEsp = false
    }

    if (upper === true) {
        chars += chars.toUpperCase();
        console.log(`upper: ${chars}`)
    }

    if (num === true) {
        chars += nums;
        console.log(`nums: ${chars}`)
    }

    if (isEsp === true) {
        chars += specialChars;
        console.log(`Esp: ${chars}`)
    }

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * chars.length);
        password += chars.substring(random, random + 1);
    }

    console.log(`Senha gerada: ${password}`);
}

generatePassword();
