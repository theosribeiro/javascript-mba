function calculadora(x, y, operacao) {
    if (operacao == '*')
        return x * y;
    else if (operacao == '/')
        return x / y;
    else if (operacao == '+')
        return x + y;
    else 
        return x - y;
}

console.log(calculadora(1,1,'+'));
console.log(calculadora(1,1,'-'));
console.log(calculadora(3,2,'*'));
console.log(calculadora(5,10,'/'));