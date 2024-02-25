let firstNumber; // global variables, undefined to start
let secondNumber;
let operation;

let resultElem = document.getElementById('result')

function clickNumber(num) {
    //process numbers as strings to support multi-digits
    let stringNum = new String(num);

            // if this is the first buttom clicked, store it as firstNumber
            if(!firstNumber) {
                firstNumber = stringNum;
                resultElem.innertext = firstNumber;
            }

            // if we have't chosen an operation yet, we're still on 
            else if (!operation) {
                firstNumber += stringNum;
                resultElem.innerText = firstNumber;
            }

            // if this is the first time we've clicked the second button, store it as a second number
            else if (!secondNumber) {
                secondNumber = stringNum;
                resultElem.innerText = secondNumber;
            }

            // we're still on the second number so save more digits 
            else {
                secondNumber += stringNum;
                resultElem.innerText = secondNumber;
}
}

function clockOperator(op) {
    operation = op;
}

function showResult() {
    let first = parseInt(firstNumber)
    let second = parseInt(secondNumber)
    let calculation = 0;

    switch (operation) {
        case '+': calculation = first + second; break;
        case'-': calculation = first - second; break;
        case'/': calculation = first / second; break;
        case'*': calculation = first * second; break;
    }

    clearResult()
    firstNumber = new String(calculation)
    resultElem.innerText = calculation;
}

function clearResult() {
    // result global wars
    firstNumber = undefined;
    secondNumber = undefined;;
    thirdNumber = undefined;
}


