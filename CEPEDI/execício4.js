
class SaldoInsuficienteError extends Error {
    constructor(message) {
        super(message);
        this.name = "SaldoInsuficienteError";
    }
}

class ValorInvalidoError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValorInvalidoError";
    }
}

class ContaBancaria {
    #saldo;
    #titular;
    #entradas;
    #saidas;

    constructor(titular, saldoInicial = 0) {
        this.#titular = titular;
        this.#saldo = saldoInicial;
        this.#entradas = [];
        this.#saidas = [];
    }

    consultarSaldo() {
        return this.#saldo;
    }

    depositar(valor) {
        if (valor <= 0) {
            throw new ValorInvalidoError("O valor do depósito deve ser maior que zero.");
        }

        this.#saldo += valor;
        this.#entradas.push(valor);
    }

    sacar(valor) {
        if (valor <= 0) {
            throw new ValorInvalidoError("O valor do saque deve ser maior que zero.");
        }

        if (valor > this.#saldo) {
            throw new SaldoInsuficienteError("Saldo insuficiente para realizar o saque.");
        }

        this.#saldo -= valor;
        this.#saidas.push(valor);
    }

    consultarEntradas() {
        return [...this.#entradas];
    }

    consultarSaidas() {
        return [...this.#saidas]; 
    }
}

try {
    const conta = new ContaBancaria("Maria", 100);

    console.log("Saldo inicial:", conta.consultarSaldo());

    conta.depositar(50);
    console.log("Após depósito:", conta.consultarSaldo());

    conta.sacar(30);
    console.log("Após saque:", conta.consultarSaldo());

    // Exemplo de erro
    conta.sacar(1000);

} catch (erro) {
    if (erro instanceof SaldoInsuficienteError) {
        console.error("Erro de saldo:", erro.message);
    } else if (erro instanceof ValorInvalidoError) {
        console.error("Erro de valor:", erro.message);
    } else {
        console.error("Erro inesperado:", erro);
    }
}
