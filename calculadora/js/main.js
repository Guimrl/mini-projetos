const upperValue = document.querySelector("#upper-number");
const resultValue = document.querySelector("#result-number");
const reset = 0;
let buttons = document.querySelectorAll('.btn');

const clearValues = () => {
  upperValue.textContent = '0';
  resultValue.textContent = '0';
}

const checkLastDigit = (input, upperValue, reg) => {
  if ((!reg.test(input) && !reg.test(upperValue.substr(upperValue.length - 1)))) {
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

const resolution = () => {
  const upperValueArray = upperValue.textContent;
  const result = 0;

  for (let i = 0; i <= upperValueArray.length; i++) {
    let operation = 0;
    let actualItem = upperValueArray[i];

    if (actualItem == "x") {
      result = multiplication(upperValueArray[i - 1], upperValueArray[i + 1]);
      operation = 1;
    } else if (actualItem == "/") {
      result = division(upperValueArray[i - 1], upperValueArray[i + 1]);
      operation = 1;
    } else if (!upperValueArray.includes('x') && !upperValueArray.includes('/')) {
      if (actualItem == "+") {
        result = sum(upperValueArray[i - 1], upperValueArray[i + 1]);
        operation = 1;
      } else if (actualItem == "-") {
        result = subtraction(upperValueArray[i - 1], upperValueArray[i + 1]);
        operation = 1;
      }
    }

    if (operation) {
      upperValueArray[i - 1] = result;
      upperValueArray.splice(i, 2);
      i = 0;
    }

    if (result) {
      reset = 1;
    }

    refreshValues(result);
  }
}

const btnPress = () => {
  let input = textContent;
  let upperValue = upperValue.textContent;
  var reg = new RegExp('^\\d+$');

  if(reset && reg.test(input)) {
    upperValue = '0';
  }   

  reset = 0;

  if(input == 'AC') {
    clearValues();
  } else if(input == "=") {
      resolution();
  } else {
    if(checkLastDigit(input, upperValue, reg)) {
      return false;
    }
    if(!reg.test(input)) {
      input = ` ${input} `; 
    }
    
    if(upperValue == "0") {
      if(reg.test(input)) {
        upperValue.textContent = input;
      }
    } else {
      upperValue.textContent += input;
    }
  }
}

for(let i = 0; buttons.length > i; i++) {
  buttons[i].addEventListener('click', btnPress);
}
