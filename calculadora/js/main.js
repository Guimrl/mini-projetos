const upperValue = document.querySelector("#upper-number");
const resultValue = document.querySelector("#result-number");
let reset = 0;
const buttons = document.querySelectorAll('.btn');

const sum = (a, b) => parseFloat(a) + parseFloat(b);
const subtraction = (a, b) => parseFloat(a) - parseFloat(b);
const multiplication = (a, b) => parseFloat(a) * parseFloat(b);
const division = (a, b) => parseFloat(a) / parseFloat(b);

const clearValues = () => {
  upperValue.textContent = '0';
  resultValue.textContent = '0';
}

const checkLastDigit = (input, upperValueText, reg) => {
  if (!reg.test(input) && !reg.test(upperValueText.substr(upperValueText.length - 1))) {
    return true;
  } else {
    return false;
  }
}

const refresh = (total) => {
  upperValue.textContent = total.toString();
  resultValue.textContent = total.toString();
}

const resolveOperation = (operator, a, b) => {
  switch (operator) {
    case '+':
      return sum(a, b);
    case '-':
      return subtraction(a, b);
    case 'x':
      return multiplication(a, b);
    case '/':
      return division(a, b);
    default:
      return NaN;
  }
}

const resolution = () => {
  const upperValueArray = upperValue.textContent.split(' ');

  if (upperValueArray.length < 3) {
    return;
  }

  let result = 0;

  for (let i = 0; i < upperValueArray.length; i++) {
    let actualItem = upperValueArray[i];

    if (['+', '-', 'x', '/'].includes(actualItem)) {
      result = resolveOperation(actualItem, parseFloat(upperValueArray[i - 1]), parseFloat(upperValueArray[i + 1]));

      if (!isNaN(result)) {
        upperValueArray[i - 1] = result.toString();
        upperValueArray.splice(i, 2);
        i = 0;
      } else {
        break;
      }
    }
  }

  refresh(result);
}

const btnPress = (input, upperValueText, reset) => {
  var reg = new RegExp('^\\d+$');

  if (reset && reg.test(input)) {
    upperValue.textContent = '0';
  }

  reset = 0;

  if (input == 'AC') {
    clearValues();
  } else if (input == '=') {
    resolution();
  } else {
    if (checkLastDigit(input, upperValueText, reg)) {
      return false;
    }
    if (!reg.test(input)) {
      input = ` ${input} `;
    }

    if (upperValueText == '0') {
      if (reg.test(input)) {
        upperValue.textContent = input;
      }
    } else {
      upperValue.textContent += input;
    }
  }
}

buttons.forEach((button) => {
  const input = button.textContent;
  button.addEventListener('click', () => {
    btnPress(input, upperValue.textContent, reset);
  });
});
