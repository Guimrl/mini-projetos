class Calculator {

    constructor() {
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;    
    }
    //clear all
    clearValues() {
        this.upperValue.textContent = '0';
        this.resultValue.textContent = '0';
    }

    checkLastDigit(input, upperValue, reg) {
        if((!reg.test(input) && !reg.test(upperValue.substr(upperValue.length - 1)))) {
            return true;
        } else {
            return false;
        }
    }
    //method sum
    sum(n1, n2) {
        return parseFloat(n1) + parseFloat(n2)
    }
    //method subtraction
    subtraction(n1, n2) {
        return parseFloat(n1) - parseFloat (n2)
    }
    //method multiplication
    multiplication(n1, n2) {
        return parseFloat(n1) * parseFloat (n2)
    }
    //method division
    division(n1, n2) {
        return parseFloat(n1) / parseFloat (n2)
    }
    //refresh values
    refreshValues(total) {
        this.upperValue.textContent = total;
        this.resultValue.textContent = total;
    }
    //solve the operation
    resolution() {
        // explodes a string to array
        let upperValueArray = (this.upperValue.textContent).split(" ");
        //solve 
        let result = 0;

        for(let i = 0; i <= upperValueArray.length; i++) {

            let operation = 0;
            let actualItem = upperValueArray[i];

            //multiplies
            if(actualItem == "x") {
                result = calc.multiplication(upperValueArray[i - 1], upperValueArray[i + 1]);
                operation = 1;
            //divide
            } else if(actualItem == "/") {
                result = calc.division(upperValueArray[i - 1], upperValueArray[i + 1]);
                operation = 1;
                //check if the array still has multiplication and division to be done
            } else if(!upperValueArray.includes('x') && !upperValueArray.includes('/')) {
                //sum and subtraction
                if(actualItem == "+") {
                    result = calc.sum(upperValueArray[i - 1], upperValueArray[i + 1]);
                    operation = 1;
                } else if(actualItem == "-") {
                    result = calc.subtraction(upperValueArray[i - 1], upperValueArray[i + 1]);
                    operation = 1;
                }
            }
            //refresh array values to the next iteration
            if(operation) {
                //last index on result of op
                upperValueArray[i - 1] = result;
                //remove items already use for op
                upperValueArray.splice(i, 2);
                //refresh index value
                i = 0;
            }
        }

        if(result) {
            calc.reset = 1;
        }
        //refresh total
        calc.refreshValues(result);
    }

    btnPress() {
        let input = this.textContent;
        let upperValue = calc.upperValue.textContent;
        //verify if has number only
        var reg = new RegExp('^\\d+$');

        //if need to reset, clear display
        if(calc.reset && reg.test(input)) {
            upperValue = '0';
        }   
        
        //clear prop reset
        calc.reset = 0;

        //clear display
        if(input == 'AC') {
            calc.clearValues();

        } else if(input == "=") {
            calc.resolution();
        } else {
            //verify if need to add
            if(calc.checkLastDigit(input, upperValue, reg)) {
                return false;
            }

            //add space to op
            if(!reg.test(input)) {
                input = ` ${input} `; 
            }
            // upperValue == "0" && reg.test(input) ? calc.upperValue.textContent = input : calc.upperValue.textContent += input;
            if(upperValue == "0") {
                if(reg.test(input)) {
                calc.upperValue.textContent = input;
                }
            } else {
                calc.upperValue.textContent += input;
            }
        }
    }
}
//start obj
let calc = new Calculator;

//start btns
let buttons = document.querySelectorAll('.btn');

//map all buttons
for(let i = 0; buttons.length > i; i++) {
    buttons[i].addEventListener('click', calc.btnPress);
}