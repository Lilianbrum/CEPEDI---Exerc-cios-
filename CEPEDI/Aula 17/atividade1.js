class ContaBancaria {
    // Campos privados (encapsulados)
    #saldo;
    #historicoEntradas;
    #historicoSaidas;

    constructor(nomeTitular, saldoInicial = 0) {
        this.nomeTitular = nomeTitular;
        this.#saldo = saldoInicial;
        this.#historicoEntradas = [];
        this.#historicoSaidas = [];
    }

    // Consultar saldo
    consultarSaldo() {
        return this.#saldo;
    }

    // Depositar um valor
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            this.#historicoEntradas.push({
                tipo: "Depósito",
                valor: valor,
                data: new Date().toLocaleString()
            });
        } else {
            console.log("Valor inválido para depósito.");
        }
    }

    // Sacar um valor
    sacar(valor) {
        if (valor <= 0) {
            console.log("Valor inválido para saque.");
            return;
        }

        if (valor > this.#saldo) {
            console.log("Saldo insuficiente para saque.");
            return;
        }

        this.#saldo -= valor;
        this.#historicoSaidas.push({
            tipo: "Saque",
            valor: valor,
            data: new Date().toLocaleString()
        });
    }

    // Consultar histórico de entradas
    consultarHistoricoEntradas() {
        return this.#historicoEntradas;
    }

    // Consultar histórico de saídas
    consultarHistoricoSaidas() {
        return this.#historicoSaidas;
    }
}
