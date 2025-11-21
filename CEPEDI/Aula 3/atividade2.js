/**
 * Recebe o comprimento de três lados e determina o tipo de triângulo.
 * @param {number} l1 - Comprimento do primeiro lado.
 * @param {number} l2 - Comprimento do segundo lado.
 * @param {number} l3 - Comprimento do terceiro lado.
 * @returns {string} O tipo de triângulo ou uma mensagem de erro.
 */
function verificarTipoTriangulo(l1, l2, l3) {
    // 1. Validação de Triângulo (Teorema da Desigualdade Triangular)
    // A soma de dois lados deve ser SEMPRE maior que o terceiro lado.
    if (l1 + l2 <= l3 || l1 + l3 <= l2 || l2 + l3 <= l1) {
        return `⚠️ Os comprimentos ${l1}, ${l2} e ${l3} NÃO formam um triângulo válido.`;
    }

    // 2. Classificação do Tipo de Triângulo

    // Equilátero: Todos os três lados são iguais.
    // Usamos o operador de igualdade estrita (===) para garantir a comparação de valor e tipo.
    if (l1 === l2 && l2 === l3) {
        return `✅ Triângulo Equilátero: Todos os lados têm comprimento ${l1}.`;
    }

    // Isósceles: Exatamente dois lados são iguais.
    // Esta condição só é verificada se a anterior (Equilátero) for falsa.
    // O operador || (OR lógico) verifica se pelo menos uma das três possibilidades é verdadeira.
    else if (l1 === l2 || l1 === l3 || l2 === l3) {
        return `⭐ Triângulo Isósceles: Possui dois lados iguais.`;
    }

    // Escaleno: Todos os três lados são diferentes.
    // Esta é a condição padrão se não for Equilátero nem Isósceles.
    else {
        return `➖ Triângulo Escaleno: Todos os lados são diferentes (lados: ${l1}, ${l2}, ${l3}).`;
    }
}

// --- Exemplos de Uso ---

console.log("--- Testes de Classificação ---");
console.log(verificarTipoTriangulo(5, 5, 5));     // Equilátero
console.log(verificarTipoTriangulo(10, 10, 15));  // Isósceles
console.log(verificarTipoTriangulo(7, 9, 7));     // Isósceles
console.log(verificarTipoTriangulo(4, 5, 6));     // Escaleno
console.log(verificarTipoTriangulo(3, 4, 5));     // Escaleno (Exemplo de triângulo retângulo)

console.log("\n--- Testes de Validade (Dica) ---");
console.log(verificarTipoTriangulo(1, 2, 10));    // Não é triângulo (1 + 2 <= 10)
console.log(verificarTipoTriangulo(5, 5, 10));    // Não é triângulo (5 + 5 <= 10)
console.log(verificarTipoTriangulo(0, 5, 5));     // Não é triângulo (Comprimento zero/negativo)