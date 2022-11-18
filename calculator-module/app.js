exports.calculate = function (a, b,operator) {
    // calculate result using switch and return it
    switch(operator){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;
        case '%':
            return a%b;
        default:
            return "Invalid Operator";                            
    }
}