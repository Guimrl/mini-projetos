const upperValue = document.querySelector("#upper-number");
const resultValue = document.querySelector("#result-number");
const reset = 0;
let buttons = document.querySelectorAll('.btn');

const clearValues = () => {
    upperValue.textContent = '0';
    resultValue.textContent = '0';
}

const checkLastDigit = (input, upperValue, reg) => {
    if((!reg.test(input) && !reg.test(upperValue.substr(upperValue.length - 1)))) {
        return true;
    } else {
        return false;
    }
}

const sum = (a, b) => parseFloat(a) + parseFloat(b);

const subtraction = (a, b) => parseFloat(a) - parseFloat(b);

const multiplication = (a, b) => parseFloat(a) * parseFloat(b);

const division = (a, b) => parseFloat(a) / parseFloat(b);

const refresh = (total) => {
    upperValue.textContent = total;
    resultValue.textContent = total;
}

const resolution = () => {}

const btnPress = () => {}

for(let i = 0; buttons.length > i; i++) {
    buttons[i].addEventListener('click', btnPress);
}
