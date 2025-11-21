// Dados iniciais
let saldo = 500.00;
const rendimentoMensal = 0.01; // 1% ao mês

console.log("--- Saldo da Conta Poupança Mês a Mês (1% a.m.) ---");
console.log(`Saldo Inicial: R$ ${saldo.toFixed(2)}`);

// --- 1º Mês ---
// Rendimento: Saldo * 1%
let rendimentoMes1 = saldo * rendimentoMensal;
saldo += rendimentoMes1;
console.log(`\n1º Mês:`);
console.log(`  Rendimento: + R$ ${rendimentoMes1.toFixed(2)}`);
console.log(`  Saldo ao final do 1º Mês: R$ ${saldo.toFixed(2)}`);

// --- 2º Mês ---
// Rendimento: Novo saldo * 1%
let rendimentoMes2 = saldo * rendimentoMensal;
saldo += rendimentoMes2;
// Depósito Adicional
const depositoAdicional = 200.00;
saldo += depositoAdicional;

console.log(`\n2º Mês:`);
console.log(`  Rendimento: + R$ ${rendimentoMes2.toFixed(2)}`);
console.log(`  Depósito Adicional: + R$ ${depositoAdicional.toFixed(2)}`);
console.log(`  Saldo ao final do 2º Mês: R$ ${saldo.toFixed(2)}`);

// --- 3º Mês ---
// Rendimento: Saldo anterior * 1%
let rendimentoMes3 = saldo * rendimentoMensal;
saldo += rendimentoMes3;
// Retirada
const retirada = 50.00;
saldo -= retirada;

console.log(`\n3º Mês:`);
console.log(`  Rendimento: + R$ ${rendimentoMes3.toFixed(2)}`);
console.log(`  Retirada: - R$ ${retirada.toFixed(2)}`);
console.log(`  Saldo ao final do 3º Mês: R$ ${saldo.toFixed(2)}`);

// --- 4º Mês ---
// Rendimento: Saldo anterior * 1%
let rendimentoMes4 = saldo * rendimentoMensal;
saldo += rendimentoMes4;

console.log(`\n4º Mês:`);
console.log(`  Rendimento: + R$ ${rendimentoMes4.toFixed(2)}`);
console.log(`  Saldo ao final do 4º Mês: R$ ${saldo.toFixed(2)}`);

console.log("\n--------------------------------------------------");
console.log(`O saldo final da conta ao final do quarto mês será: **R$ ${saldo.toFixed(2)}**`);
console.log("--------------------------------------------------");