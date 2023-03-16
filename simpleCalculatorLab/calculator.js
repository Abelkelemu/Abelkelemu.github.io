exports.calculate = function (number1,number2,operation) {
    let result;
      switch(operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            result = number1 / number2;
            break;
    }
    return result;
};