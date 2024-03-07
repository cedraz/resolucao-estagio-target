function inverterString(string) {
    let stringInvertida = "";
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    return stringInvertida;
}

// Insira a string que você deseja inverter
console.log(inverterString("icaro"))