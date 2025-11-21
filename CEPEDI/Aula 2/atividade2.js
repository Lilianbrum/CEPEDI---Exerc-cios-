// 1. Variáveis declaradas com CONST
// Usamos const para valores que não devem ser reatribuídos após a inicialização.

const nomeUsuario = "Ana Silva";
const emailUsuario = "ana.silva@exemplo.com";

// 2. Variáveis declaradas com LET
// Usamos let para valores que podem ser alterados ou atualizados no futuro.

let idadeUsuario = 28;
let statusAtivo = true; // Booleano: indica se o usuário está logado ou ativo
let numeroDeLogins = 1;

console.log("--- Cadastro Inicial do Usuário ---");
console.log(`Nome: ${nomeUsuario}`);
console.log(`Idade: ${idadeUsuario}`);
console.log(`Email: ${emailUsuario}`);
console.log(`Status Ativo: ${statusAtivo}`);
console.log(`Número de Logins: ${numeroDeLogins}`);

// ---------------------------------------------------------------------

// DEMONSTRAÇÃO DE ATUALIZAÇÃO (Apenas variáveis LET podem ser alteradas)

console.log("\n--- Simulação de Atualizações no Sistema ---");

// 1. Atualizando a Idade (Idade pode mudar)
idadeUsuario = 29;
console.log(`[Idade Atualizada] Novo valor de idadeUsuario (let): ${idadeUsuario}`);

// 2. Incrementando o Número de Logins (Contagem precisa ser incrementada)
numeroDeLogins = numeroDeLogins + 1; // Ou numeroDeLogins++;
console.log(`[Login Realizado] Novo valor de numeroDeLogins (let): ${numeroDeLogins}`);

// 3. Alterando o Status Ativo (Status muda ao fazer logout)
statusAtivo = false;
console.log(`[Logout Realizado] Novo valor de statusAtivo (let): ${statusAtivo}`);

// ---------------------------------------------------------------------

console.log("\n--- Status Final do Cadastro ---");
console.log(`Nome (const): ${nomeUsuario}`);
console.log(`Idade (let): ${idadeUsuario}`);
console.log(`Email (const): ${emailUsuario}`);
console.log(`Status Ativo (let): ${statusAtivo}`);
console.log(`Número de Logins (let): ${numeroDeLogins}`);

// TENTATIVA DE ERRO (Apenas para demonstração)
// Se você tentasse mudar uma const, o JavaScript lançaria um erro:
/*
nomeUsuario = "Novo Nome"; // Isso causaria: TypeError: Assignment to constant variable.
*/