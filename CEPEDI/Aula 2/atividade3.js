// Constante para Pi (π), usada no cálculo do perímetro do círculo
const PI = Math.PI;

// 1. Calcule a área de um retângulo (largura × altura)
function calcularAreaRetangulo(largura, altura) {
    if (typeof largura !== 'number' || typeof altura !== 'number') {
        return "Erro: Largura e altura devem ser números.";
    }
    // Operador aritmético: Multiplicação (*)
    return largura * altura;
}

// 2. Calcule o perímetro de um círculo (2 × π × raio)
function calcularPerimetroCirculo(raio) {
    if (typeof raio !== 'number') {
        return "Erro: Raio deve ser um número.";
    }
    // Operadores aritméticos: Multiplicação (*)
    return 2 * PI * raio;
}

// 3. Calcule a média de três números (número 1 + número 2 + número 3) / 3
function calcularMedia(num1, num2, num3) {
    // É importante verificar se as entradas são números antes de calcular
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
        return "Erro: Todos os valores devem ser números.";
    }
    // Operadores aritméticos: Adição (+) e Divisão (/)
    return (num1 + num2 + num3) / 3;
}


// --- Testes e Resultados ---

console.log("--- 1. Área de um Retângulo (largura × altura) ---");
let largura = 10;
let altura = 5;
console.log(`Retângulo ${largura}x${altura}: ${calcularAreaRetangulo(largura, altura)}`); // Resultado: 50

console.log("\n--- 2. Perímetro de um Círculo (2 × π × raio) ---");
let raio = 7;
console.log(`Círculo com Raio ${raio}: ${calcularPerimetroCirculo(raio).toFixed(2)}`); // Resultado: 43.98

console.log("\n--- 3. Média de Três Números ---");
let n1 = 15;
let n2 = 20;
let n3 = 25;
console.log(`Média de ${n1}, ${n2}, ${n3}: ${calcularMedia(n1, n2, n3).toFixed(2)}`); // Resultado: 20.00

// ---------------------------------------------------------------------

// --- Demonstração de NaN (Not a Number) e Infinity ---

console.log("\n--- Demonstração de NaN (Not a Number) ---");
// Tentativa de multiplicação com um valor não numérico
let areaInvalida = calcularAreaRetangulo(10, "cinco");
console.log(`Área com input inválido: ${areaInvalida}`); // Resultado: Erro: Largura e altura devem ser números.

// Se não houvesse a checagem na função, o JS retornaria NaN:
let resultadoNaN = 10 * "cinco";
console.log(`10 * "cinco" em JS: ${resultadoNaN} (Tipo: ${typeof resultadoNaN})`);


console.log("\n--- Demonstração de Infinity (Infinito) ---");
// Divisão de um número por zero resulta em Infinity
let resultadoInfinity = 10 / 0;
console.log(`10 / 0: ${resultadoInfinity} (Tipo: ${typeof resultadoInfinity})`); // Resultado: Infinity

// Divisão de zero por zero resulta em NaN
let resultadoNaN_zero = 0 / 0;
console.log(`0 / 0: ${resultadoNaN_zero} (Tipo: ${typeof resultadoNaN_zero})`); // Resultado: NaN