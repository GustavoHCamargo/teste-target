function isFibonacci(num) {
    let a = 0, b = 1, c = 1;

    while (c < num) {
        c = a + b;
        a = b;
        b = c;
    }

    if (c === num) {
        return `${num} pertence à sequência de Fibonacci.`;
    } else {
        return `${num} não pertence à sequência de Fibonacci.`;
    }
}

let numeroInformado = 21;
console.log(isFibonacci(numeroInformado));