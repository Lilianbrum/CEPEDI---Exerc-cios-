// ----------------------
// Classes
// ----------------------
class Animal {
    constructor(nome, numeroPatas) {
        this.nome = nome;
        this.numeroPatas = numeroPatas;
    }

    emitirSom() {
        return "Som genérico";
    }

    get obterNome() {
        return this.nome;
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        super(nome, 4);
    }

    emitirSom() {
        return "Au au!";
    }
}

class Gato extends Animal {
    constructor(nome) {
        super(nome, 4);
    }

    emitirSom() {
        return "Miau!";
    }
}

class Passaro extends Animal {
    constructor(nome) {
        super(nome, 2);
    }

    emitirSom() {
        return "Piu piu!";
    }
}


// ----------------------
// Menu Interativo
// ----------------------
const prompt = require("prompt-sync")();
let animais = []; // Array para armazenar os animais

function menu() {
    let opcao = 0;

    while (opcao !== 7) {
        console.log("\n===== MENU DE ANIMAIS =====");
        console.log("1. Cadastrar Cachorro");
        console.log("2. Cadastrar Gato");
        console.log("3. Cadastrar Pássaro");
        console.log("4. Cadastrar outro Animal");
        console.log("5. Listar todos os animais");
        console.log("6. Emitir sons de todos os animais");
        console.log("7. Sair");

        opcao = Number(prompt("Escolha uma opção: "));

        switch (opcao) {

            case 1:
                cadastrarCachorro();
                break;

            case 2:
                cadastrarGato();
                break;

            case 3:
                cadastrarPassaro();
                break;

            case 4:
                cadastrarOutroAnimal();
                break;

            case 5:
                listarAnimais();
                break;

            case 6:
                emitirSomAnimais();
                break;

            case 7:
                console.log("Saindo...");
                break;

            default:
                console.log("Opção inválida!");
        }
    }
}


// ----------------------
// Funções de cadastro
// ----------------------
function cadastrarCachorro() {
    const nome = prompt("Nome do cachorro: ");
    animais.push(new Cachorro(nome));
}

function cadastrarGato() {
    const nome = prompt("Nome do gato: ");
    animais.push(new Gato(nome));
}

function cadastrarPassaro() {
    const nome = prompt("Nome do pássaro: ");
    animais.push(new Passaro(nome));
}

function cadastrarOutroAnimal() {
    const nome = prompt("Nome do animal: ");
    const patas = Number(prompt("Número de patas: "));
    animais.push(new Animal(nome, patas));
}


// ----------------------
// Listar animais
// ----------------------
function listarAnimais() {
    if (animais.length === 0) {
        console.log("Nenhum animal cadastrado.");
        return;
    }

    console.log("\n--- Lista de Animais ---");
    animais.forEach((animal, index) => {
        console.log(`${index + 1}. ${animal.obterNome}`);
    });
}


// ----------------------
// Emitir sons
// ----------------------
function emitirSomAnimais() {
    if (animais.length === 0) {
        console.log("Nenhum animal cadastrado.");
        return;
    }

    console.log("\n--- Sons dos Animais ---");
    animais.forEach((animal, index) => {
        console.log(`${animal.obterNome}: ${animal.emitirSom()}`);
    });
}


// ----------------------
// Iniciar o menu
// ----------------------
menu();