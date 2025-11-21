// Objeto contaBancaria
const contaBancaria = {
    // Propriedades
    titular: "João Silva",
    saldo: 1000,
    
    // Métodos
    depositar: function(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(` Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
            return true;
        } else {
            console.log(" Valor de depósito deve ser positivo!");
            return false;
        }
    },
    
    retirar: function(valor) {
        if (valor <= 0) {
            console.log("Valor de retirada deve ser positivo!");
            return false;
        } else if (valor > this.saldo) {
            console.log(` Saldo insuficiente! Tentativa: R$ ${valor.toFixed(2)} | Saldo: R$ ${this.saldo.toFixed(2)}`);
            return false;
        } else {
            this.saldo -= valor;
            console.log(` Retirada de R$ ${valor.toFixed(2)} realizada com sucesso!`);
            return true;
        }
    },
    
    exibirSaldo: function() {
        console.log(` Titular: ${this.titular}`);
        console.log(` Saldo atual: R$ ${this.saldo.toFixed(2)}`);
        return this.saldo;
    },
    
    // Método extra para exibir informações completas
    exibirInfoCompleta: function() {
        console.log('\n EXTRATO BANCÁRIO');
        console.log('='.repeat(40));
        console.log(` Titular: ${this.titular}`);
        console.log(` Saldo: R$ ${this.saldo.toFixed(2)}`);
        console.log('='.repeat(40));
    }
};

// SIMULAÇÃO DAS OPERAÇÕES SOLICITADAS
function simularOperacoes() {
    console.log(' SIMULAÇÃO DE OPERAÇÕES BANCÁRIAS');
    console.log('='.repeat(50));
    
    // ■ Exibir saldo inicial
    console.log('\n1.  SALDO INICIAL:');
    contaBancaria.exibirSaldo();
    
    // ■ Depositar 500
    console.log('\n2.  OPERAÇÃO: DEPÓSITO DE R$ 500,00');
    contaBancaria.depositar(500);
    
    // ■ Exibir saldo
    console.log('\n3.  SALDO APÓS DEPÓSITO:');
    contaBancaria.exibirSaldo();
    
    // ■ Retirar 200
    console.log('\n4.  OPERAÇÃO: RETIRADA DE R$ 200,00');
    contaBancaria.retirar(200);
    
    // ■ Exibir saldo
    console.log('\n5.  SALDO APÓS RETIRADA:');
    contaBancaria.exibirSaldo();
    
    // ■ Retirar 1000
    console.log('\n6.  OPERAÇÃO: RETIRADA DE R$ 1000,00');
    contaBancaria.retirar(1000);
    
    // ■ Exibir saldo final
    console.log('\n7.  SALDO FINAL:');
    contaBancaria.exibirInfoCompleta();
}

// EXECUTAR SIMULAÇÃO
simularOperacoes();

// VERSÃO ALTERNATIVA COM MAIS DETALHES
function simularOperacoesDetalhadas() {
    console.log('\n\n SIMULAÇÃO DETALHADA');
    console.log('='.repeat(50));
    
    const operacoes = [
        { tipo: 'saldo', valor: 0, descricao: 'Exibir saldo inicial' },
        { tipo: 'deposito', valor: 500, descricao: 'Depositar R$ 500,00' },
        { tipo: 'saldo', valor: 0, descricao: 'Exibir saldo após depósito' },
        { tipo: 'retirada', valor: 200, descricao: 'Retirar R$ 200,00' },
        { tipo: 'saldo', valor: 0, descricao: 'Exibir saldo após retirada' },
        { tipo: 'retirada', valor: 1000, descricao: 'Retirar R$ 1000,00' },
        { tipo: 'saldo', valor: 0, descricao: 'Exibir saldo final' }
    ];
    
    let saldoAnterior = contaBancaria.saldo;
    
    operacoes.forEach((op, index) => {
        console.log(`\n${index + 1}. ${op.descricao}`);
        console.log('-'.repeat(40));
        
        switch(op.tipo) {
            case 'saldo':
                console.log(` Saldo anterior: R$ ${saldoAnterior.toFixed(2)}`);
                contaBancaria.exibirSaldo();
                break;
            case 'deposito':
                console.log(` Valor do depósito: R$ ${op.valor.toFixed(2)}`);
                contaBancaria.depositar(op.valor);
                break;
            case 'retirada':
                console.log(` Valor da retirada: R$ ${op.valor.toFixed(2)}`);
                contaBancaria.retirar(op.valor);
                break;
        }
        
        saldoAnterior = contaBancaria.saldo;
    });
}

// TESTES ADICIONAIS
function testarCasosExtras() {
    console.log('\n\n TESTES ADICIONAIS');
    console.log('='.repeat(50));
    
    // Criar uma nova conta para testes
    const contaTeste = {
        titular: "Maria Santos",
        saldo: 500,
        depositar: contaBancaria.depositar,
        retirar: contaBancaria.retirar,
        exibirSaldo: contaBancaria.exibirSaldo
    };
    
    console.log('\n CONTA DE TESTE:');
    contaTeste.exibirSaldo();
    
    console.log('\n Teste: Retirada com valor negativo');
    contaTeste.retirar(-100);
    
    console.log('\n Teste: Depósito com valor zero');
    contaTeste.depositar(0);
    
    console.log('\n  Teste: Retirada maior que saldo');
    contaTeste.retirar(1000);
    
    console.log('\n Teste: Operações válidas');
    contaTeste.depositar(300);
    contaTeste.retirar(200);
    contaTeste.exibirSaldo();
}

// EXECUTAR TODAS AS SIMULAÇÕES
console.log('=== OBJETO CONTA BANCÁRIA ===');
simularOperacoes();
simularOperacoesDetalhadas();
testarCasosExtras();

// EXPORTAR PARA USO EM OUTROS ARQUIVOS
if (typeof module !== 'undefined' && module.exports) {
    module.exports = contaBancaria;
}