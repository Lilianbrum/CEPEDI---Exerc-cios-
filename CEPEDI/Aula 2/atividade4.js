// Dados do Produto
const nomeProduto = "Mouse Gamer Ergonômico";
const marca = "TechXtreme";
const modelo = "VX-Pro Max";
const preco = 129.90;
const codigo = "MG045PRO";

// ---------------------------------------------------------------------
// 1. Concatenação Tradicional (usando o operador +)
// Usado para combinar strings e variáveis

console.log("--- 1. Concatenação Tradicional ---");

let saidaConcatenacao = "Produto: " + nomeProduto + " - Marca: " + marca +
    " - Preço: R$" + preco.toFixed(2) + " - Código: " + codigo;

console.log(saidaConcatenacao);

// ---------------------------------------------------------------------
// 2. Template Literals (usando crases ` ` e ${} )
// Forma moderna e mais legível de construir strings complexas

console.log("\n--- 2. Template Literals ---");

let saidaTemplateLiteral = `
    Detalhes do Produto:
    Nome: ${nomeProduto}
    Modelo: ${modelo} (${marca})
    Preço: R$ ${preco.toFixed(2)}
    OFERTA! Use o código ${codigo} no checkout.
`;

console.log(saidaTemplateLiteral);

// ---------------------------------------------------------------------
// 3. Aplicação de Métodos de String para Formatação
// toUpperCase(), toLowerCase(), slice(), includes()

console.log("\n--- 3. Aplicação de Métodos de String ---");

// Método 1: toUpperCase() - Converte a string para letras maiúsculas
let nomeMaiusculo = nomeProduto.toUpperCase();
console.log(`Nome em Maiúsculas: ${nomeMaiusculo}`); // MOUSE GAMER ERGONÔMICO

// Método 2: toLowerCase() - Converte a string para letras minúsculas
let marcaMinuscula = marca.toLowerCase();
console.log(`Marca em Minúsculas: ${marcaMinuscula}`); // techxtreme

// Método 3: slice() - Extrai uma parte da string (os 3 primeiros caracteres do código)
// O slice(0, 3) retorna os caracteres da posição 0 até a 2.
let prefixoCodigo = codigo.slice(0, 3);
console.log(`Prefixo do Código: ${prefixoCodigo}`); // MG0

// Método 4: includes() - Verifica se uma string contém outra, retornando true ou false
let temGamer = nomeProduto.includes("Gamer");
console.log(`O nome inclui a palavra "Gamer"? ${temGamer}`); // true

// Método 5: replace() - Substitui uma ocorrência na string
let nomeEditado = nomeProduto.replace("Ergonômico", "Sem Fio");
console.log(`Nome com edição: ${nomeEditado}`); // Mouse Gamer Sem Fio