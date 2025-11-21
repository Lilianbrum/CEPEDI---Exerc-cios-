class Pessoa {
    #nome; #cpf; #endereco;
    constructor(nome) { this.#nome = nome }
    constructor(cpf) { this.#cpf = cpf }
    constructor(nome) { this.#endereco = endereco }

    get nome() { return this.#nome; }
    get cpf() { return this.#cpf; }
    get endereco() { return this.#endereco; }

}

class Endereco {
    #logradouro; #numero; #bairro; #cidade; #estado; #cep;
    constructor(logradouro, numero, bairro, cidade, estado, cep) {
        this.nome = nome;
        this.endereco = endereco;
    }
    instanceof() { console.log(`${this.nome} reside no endereco ${this.nome. endereco}.`); }


}

