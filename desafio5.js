function inverterString(str) {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

let stringOriginal = "exemplo";
let stringInvertida = inverterString(stringOriginal);
console.log("Original:", stringOriginal);
console.log("Invertida:", stringInvertida);
