class Departamento {
    #nome; 
    constructor (nome) {this.#nome = nome;}
    get nome (){return this.#nome;}
}
class Empresa {
    #nome; #departamentos; 
    constructor(nome){
        this.#nome = nome;
        this.#departamentos = [];
}
get nome() {return this.#nome;}
}

