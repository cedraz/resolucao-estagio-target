function fibonacci(n) {
    let firstNum = 0;
    let secondNum = 1;
    let numeroDaSequencia = 0;
    while (numeroDaSequencia < n) {
        numeroDaSequencia = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = numeroDaSequencia;
    }
    if (numeroDaSequencia === n) {
        console.log("Pertence a sequência de Fibonacci")
        return true;
    } else {
        console.log("Não pertence a sequência de Fibonacci")
        return false;
    }
}

// Insira o número que você deseja avaliar 
// se pertence ou não a sequência de Fibonacci
fibonacci(13)