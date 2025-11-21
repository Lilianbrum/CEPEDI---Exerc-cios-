// --- Valores de Teste ---

// Tipos diferentes com valores semelhantes
const numero = 10;
const stringNumero = "10";
const booleanoTrue = true; // Em coerção, 'true' é frequentemente convertido para 1
const stringTrue = "true";

// Valores Falsy
const numeroZero = 0;
const stringVazia = "";
const valorNull = null;
const valorUndefined = undefined;

// --- Teste de Operadores Relacionais ---

console.log("--- 1. Operadores Relacionais (>, <, >=, <=) ---");

// Comparação de número com número
console.log(`1.1. ${numero} > 5? -> ${numero > 5}`); // true
console.log(`1.2. ${numero} < 5? -> ${numero < 5}`); // false
console.log(`1.3. ${numero} >= 10? -> ${numero >= 10}`); // true

// Comparação de número com string (coerção ocorre: "10" é convertido para 10)
console.log(`1.4. ${numero} <= ${stringNumero}? -> ${numero <= stringNumero}`); // true
console.log(`1.5. ${numero} > ${stringNumero}? -> ${numero > stringNumero}`); // false (10 não é maior que 10)

// Comparação com booleano (coerção ocorre: true é convertido para 1)
console.log(`1.6. ${numero} > ${booleanoTrue}? -> ${numero > booleanoTrue}`); // true (10 > 1)

console.log("-------------------------------------------------");

// --- Teste de Igualdade Solta (==) ---

console.log("--- 2. Operador de Igualdade Solta (==) com Coerção ---");

// Compara valores. Tenta tornar os tipos iguais antes da comparação.
console.log(`2.1. ${numero} == ${stringNumero}? -> ${numero == stringNumero}`); // true (String "10" coerge para Número 10)
console.log(`2.2. ${numeroZero} == ${stringVazia}? -> ${numeroZero == stringVazia}`); // true (String vazia coerge para Número 0)
console.log(`2.3. ${booleanoTrue} == ${numero}? -> ${booleanoTrue == numero}`); // false (true coerge para 1, 1 != 10)
console.log(`2.4. ${booleanoTrue} == ${numeroZero}? -> ${booleanoTrue == numeroZero}`); // false (true coerge para 1, 1 != 0)
console.log(`2.5. ${valorNull} == ${valorUndefined}? -> ${valorNull == valorUndefined}`); // true (Regra especial: null só é igual a undefined)
console.log(`2.6. ${valorNull} == ${numeroZero}? -> ${valorNull == numeroZero}`); // false (null não coerge para 0 em ==)

console.log("-------------------------------------------------");

// --- Teste de Igualdade Estrita (===) ---

console.log("--- 3. Operador de Igualdade Estrita (===) sem Coerção ---");

// Compara valores E tipos. Não tenta conversão.
console.log(`3.1. ${numero} === ${stringNumero}? -> ${numero === stringNumero}`); // false (Tipo: number vs string)
console.log(`3.2. ${numeroZero} === ${stringVazia}? -> ${numeroZero === stringVazia}`); // false (Tipo: number vs string)
console.log(`3.3. ${booleanoTrue} === ${numero}? -> ${booleanoTrue === numero}`); // false (Tipo: boolean vs number)
console.log(`3.4. ${booleanoTrue} === ${numeroZero}? -> ${booleanoTrue === numeroZero}`); // false (Tipo: boolean vs number)
console.log(`3.5. ${valorNull} === ${valorUndefined}? -> ${valorNull === valorUndefined}`); // false (Tipo: object/null vs undefined)
console.log(`3.6. 10 === 10? -> ${10 === 10}`); // true (Valor e Tipo idênticos)