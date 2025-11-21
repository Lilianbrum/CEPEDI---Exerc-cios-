// Exercício 1: Calculadora Simples

// 1. Funções básicas para operações matemáticas
function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        throw new Error("Erro: Divisão por zero não é permitida!");
    }
    return a / b;
}