class ValoresInvalidosError extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = "ValoresInvalidosError";
    }
}

class DivisaoPorZeroError extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = "DivisãoPorZeroError"; 
    }
}