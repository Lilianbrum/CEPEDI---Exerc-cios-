// Classe base Animal
class Animal {
    constructor(nome, numeroPatas) {
        this.nome = nome;
        this.numeroPatas = numeroPatas;
    }

    // Método genérico
    emitirSom() {
        return "Som genérico";
    }

    // Getter para nome
    get obterNome() {
        return this.nome;
    }
}

// Classe Cachorro herdando de Animal
class Cachorro extends Animal {
    constructor(nome) {
        super(nome, 4); // Cachorro sempre tem 4 patas
    }

    emitirSom() {
        return "Au au!";
    }
}

// Classe Gato herdando de Animal
class Gato extends Animal {
    constructor(nome) {
        super(nome, 4);
    }

    emitirSom() {
        return "Miau!";
    }
}

// Classe Passaro herdando de Animal
class Passaro extends Animal {
    constructor(nome) {
        super(nome, 2);
    }

    emitirSom() {
        return "Piu piu!";
    }
}