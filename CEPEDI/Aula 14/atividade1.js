import React, { useState, useEffect } from 'react';
import './ContaBancaria.css';

const ContaBancaria = () => {
    // Objeto contaBancaria
    const [contaBancaria, setContaBancaria] = useState({
        titular: "João Silva",
        saldo: 1000,
        
        // Métodos
        depositar: function(valor) {
            if (valor > 0) {
                this.saldo += valor;
                return ` Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`;
            } else {
                return " Valor de depósito deve ser positivo!";
            }
        },
        
        retirar: function(valor) {
            if (valor <= 0) {
                return " Valor de retirada deve ser positivo!";
            } else if (valor > this.saldo) {
                return " Saldo insuficiente para esta retirada!";
            } else {
                this.saldo -= valor;
                return ` Retirada de R$ ${valor.toFixed(2)} realizada com sucesso!`;
            }
        },
        
        exibirSaldo: function() {
            return ` Saldo atual: R$ ${this.saldo.toFixed(2)}`;
        }
    });

    const [mensagem, setMensagem] = useState('');
    const [valorInput, setValorInput] = useState('');
    const [historico, setHistorico] = useState([]);

    // Atualizar mensagem inicial
    useEffect(() => {
        setMensagem(contaBancaria.exibirSaldo());
    }, []);

    // Função para atualizar o estado após operações
    const atualizarConta = (novaConta) => {
        setContaBancaria({...novaConta});
        setContaBancaria(prevConta => {
            const contaAtualizada = {...prevConta};
            return contaAtualizada;
        });
    };

    const handleDepositar = () => {
        const valor = parseFloat(valorInput);
        if (isNaN(valor)) {
            setMensagem(" Por favor, digite um valor válido!");
            return;
        }

        const novaConta = {...contaBancaria};
        const resultado = novaConta.depositar(valor);
        
        setMensagem(resultado);
        atualizarConta(novaConta);
        
        // Adicionar ao histórico
        if (resultado.includes('')) {
            setHistorico(prev => [...prev, {
                tipo: 'deposito',
                valor: valor,
                saldoAnterior: contaBancaria.saldo,
                saldoAtual: novaConta.saldo,
                timestamp: new Date().toLocaleTimeString()
            }]);
        }
        
        setValorInput('');
    };

    const handleRetirar = () => {
        const valor = parseFloat(valorInput);
        if (isNaN(valor)) {
            setMensagem(" Por favor, digite um valor válido!");
            return;
        }

        const novaConta = {...contaBancaria};
        const resultado = novaConta.retirar(valor);
        
        setMensagem(resultado);
        atualizarConta(novaConta);
        
        // Adicionar ao histórico
        if (resultado.includes('')) {
            setHistorico(prev => [...prev, {
                tipo: 'retirada',
                valor: valor,
                saldoAnterior: contaBancaria.saldo,
                saldoAtual: novaConta.saldo,
                timestamp: new Date().toLocaleTimeString()
            }]);
        }
        
        setValorInput('');
    };

    const handleExibirSaldo = () => {
        const novaConta = {...contaBancaria};
        setMensagem(novaConta.exibirSaldo());
    };

    const limparHistorico = () => {
        setHistorico([]);
    };

    return (
        <div className="conta-bancaria">
            <div className="conta-header">
                <h1> Sistema Bancário</h1>
                <div className="conta-info">
                    <h2>Titular: {contaBancaria.titular}</h2>
                    <div className="saldo-atual">
                        {contaBancaria.exibirSaldo()}
                    </div>
                </div>
            </div>

            <div className="operacoes">
                <div className="input-group">
                    <input
                        type="number"
                        value={valorInput}
                        onChange={(e) => setValorInput(e.target.value)}
                        placeholder="Digite o valor"
                        min="0"
                        step="0.01"
                    />
                    <div className="botoes">
                        <button onClick={handleDepositar} className="btn depositar">
                             Depositar
                        </button>
                        <button onClick={handleRetirar} className="btn retirar">
                             Retirar
                        </button>
                        <button onClick={handleExibirSaldo} className="btn saldo">
                             Ver Saldo
                        </button>
                    </div>
                </div>

                <div className="mensagem">
                    {mensagem}
                </div>
            </div>

            {historico.length > 0 && (
                <div className="historico">
                    <div className="historico-header">
                        <h3> Histórico de Transações</h3>
                        <button onClick={limparHistorico} className="btn-limpar">
                             Limpar
                        </button>
                    </div>
                    <div className="transacoes">
                        {historico.map((transacao, index) => (
                            <div key={index} className={`transacao ${transacao.tipo}`}>
                                <div className="transacao-info">
                                    <span className="tipo">
                                        {transacao.tipo === 'deposito' ? ' Depósito' : ' Retirada'}
                                    </span>
                                    <span className="valor">
                                        R$ {transacao.valor.toFixed(2)}
                                    </span>
                                    <span className="timestamp">
                                        {transacao.timestamp}
                                    </span>
                                </div>
                                <div className="saldo-transacao">
                                    Saldo: R$ {transacao.saldoAtual.toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Exemplo de uso direto no console */}
            <div className="exemplos">
                <h3> Exemplos de uso no console:</h3>
                <button onClick={() => {
                    const contaTeste = {...contaBancaria};
                    console.log("Exemplo de uso:");
                    console.log(contaTeste.exibirSaldo());
                    console.log(contaTeste.depositar(500));
                    console.log(contaTeste.exibirSaldo());
                    console.log(contaTeste.retirar(200));
                    console.log(contaTeste.exibirSaldo());
                }} className="btn-exemplo">
                    Executar Exemplos no Console
                </button>
            </div>
        </div>
    );
};

export default ContaBancaria;