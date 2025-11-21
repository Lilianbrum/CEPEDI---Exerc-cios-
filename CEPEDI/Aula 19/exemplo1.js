class Empresa {
    #nome;
    constructor(nome) { this.#nome = nome }
    get nome() { return this.#nome; }
}

class Colaborador {
    #nome; #empresa;
    constructor(nome, empresa) {
        this.nome = nome;
        this.#empresa = empresa;
    }
    instanceof() { console.log(`${this.nome} trabalha na empresa ${this.empresa.nome}.`); }


}

objetoEmpresa = new Empresa("IFMG");
colaboradorObjeto = new Empregado("Lilian", objetoEmpresa);
colaboradorObjeto.info(); 