// --- Credenciais de Exemplo ---

const usuarioCorreto = "admin_js";
const senhaCorreta = "4ch4v3@";

// --- Dados de Entrada (que seriam fornecidos pelo usuário) ---

const usuarioDigitado = "admin_js";
const senhaDigitada = "4ch4v3@";
const estaAtivo = true; // Simula se a conta está ativa ou suspensa

// --- Aplicação dos Operadores Lógicos ---

console.log("--- Teste de Credenciais ---");

// 1. Operador Lógico E (&&)
// Condição: O usuário deve estar CORRETO E a senha deve estar CORRETA.
const credenciaisValidas = (usuarioDigitado === usuarioCorreto) && (senhaDigitada === senhaCorreta);

console.log(`\nVerificação de (Usuário CORRETO E Senha CORRETA): ${credenciaisValidas}`);

// 2. Operador Lógico E (&&) + Variável Booleana
// Condição de Acesso: Credenciais válidas E o status da conta é ativo.
const acessoConcedido = credenciaisValidas && estaAtivo;

console.log(`Verificação de (Credenciais VÁLIDAS E Conta ATIVA): ${acessoConcedido}`);

// 3. Operador Lógico OU (||)
// Cenário: Tentativa de redefinição de senha. É necessário ter o usuário CORRETO OU um código de segurança especial.
const codigoSeguranca = "CODE123";
const codigoDigitado = "CODE123";
const podeRedefinir = (usuarioDigitado === usuarioCorreto) || (codigoDigitado === codigoSeguranca);

console.log(`\nVerificação de (Usuário CORRETO OU Código de Segurança): ${podeRedefinir}`);

// 4. Operador Lógico NÃO (!)
// Cenário: Verificar se a conta está inativa (negando o estado 'estaAtivo').
const contaInativa = !estaAtivo;

console.log(`\nVerificação de (NÃO Conta Ativa): ${contaInativa}`);

// --- Resultado Final da Autenticação ---

console.log("\n--- Resultado da Autenticação ---");

if (acessoConcedido) {
    console.log(`\n**ACESSO CONCEDIDO!** Olá, ${usuarioDigitado}.`);
} else if (credenciaisValidas && contaInativa) {
    console.log(`\n**ACESSO NEGADO.** Suas credenciais estão corretas, mas sua conta está inativa.`);
} else {
    console.log("\n**ACESSO NEGADO.** Usuário ou senha incorretos.");
}