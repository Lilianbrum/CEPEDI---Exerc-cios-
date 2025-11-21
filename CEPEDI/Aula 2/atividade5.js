// Valores Falsy (que se comportam como false em um contexto booleano)
const valorFalsy1 = 0; // Número Zero
const valorFalsy2 = ""; // String vazia
const valorFalsy3 = null; // O valor nulo
const valorFalsy4 = undefined; // Valor indefinido
const valorFalsy5 = NaN; // Not a Number

// Valores Truthy (que se comportam como true em um contexto booleano)
const valorTruthy1 = 1; // Qualquer número diferente de zero (positivo ou negativo)
const valorTruthy2 = "Hello"; // Qualquer string com pelo menos um caractere
const valorTruthy3 = {}; // Objeto vazio
const valorTruthy4 = []; // Array vazio
const valorTruthy5 = "false"; // A string "false" (sim, é truthy!)

// --- Função de Validação ---

function verificarCondicao(valor, nomeDaVariavel) {
    // A conversão implícita de Truthy/Falsy ocorre aqui,
    // onde o JavaScript avalia o 'valor' dentro do 'if'.

    // O operador lógico de negação (!) será usado para ilustrar
    // como os valores Falsy são transformados em 'true'.

    if (valor) {
        // Se 'valor' é Truthy, a condição é avaliada como true.
        console.log(` ${nomeDaVariavel}: TRUTHY. O valor '${valor}' é considerado verdadeiro.`);
    } else {
        // Se 'valor' é Falsy, a condição é avaliada como false.
        console.log(` ${nomeDaVariavel}: FALSY. O valor '${valor}' é considerado falso.`);
    }

    // Demonstração adicional da conversão explícita para Booleano
    console.log(`   -> Convertido explicitamente (Boolean(${valor})): ${Boolean(valor)}`);
    console.log("---");
}

// --- Testando os Valores Falsy ---
console.log("--- VALORES FALSY (FALSOS) ---");
verificarCondicao(valorFalsy1, "Número Zero (0)");
verificarCondicao(valorFalsy2, "String Vazia (\"\")");
verificarCondicao(valorFalsy3, "Null");
verificarCondicao(valorFalsy4, "Undefined");
verificarCondicao(valorFalsy5, "NaN (Not a Number)");


// --- Testando os Valores Truthy ---
console.log("\n--- VALORES TRUTHY (VERDADEIROS) ---");
verificarCondicao(valorTruthy1, "Número Um (1)");
verificarCondicao(valorTruthy2, "String Preenchida (\"Hello\")");
verificarCondicao(valorTruthy3, "Objeto Vazio ({})");
verificarCondicao(valorTruthy4, "Array Vazio ([])");
verificarCondicao(valorTruthy5, "String \"false\"");

// --- Exemplo de Booleano Puro ---
console.log("\n--- BOOLEANOS PUROS ---");
verificarCondicao(true, "Booleano True");
verificarCondicao(false, "Booleano False");