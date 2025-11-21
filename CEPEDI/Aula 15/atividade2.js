class Aluno {
    constructor(nome) {
        this.nome = nome;      // Nome do aluno
        this.notas = [];       // Array de notas
    }

    // Retorna o nome do aluno
    obterNome() {
        return this.nome;
    }

    // Adiciona uma nova nota ao array
    adicionarNota(nota) {
        this.notas.push(nota);
    }

    // Calcula a média das notas do aluno
    calcularMedia() {
        if (this.notas.length === 0) {
            return 0; // Evita divisão por zero
        }

        const soma = this.notas.reduce((total, n) => total + n, 0);
        return soma / this.notas.length;
    }
}

// Exemplo de uso:
const aluno1 = new Aluno("Lilian");

aluno1.adicionarNota(8);
aluno1.adicionarNota(7.5);
aluno1.adicionarNota(9);

console.log(aluno1.obterNome());      // "Lilian"
console.log(aluno1.calcularMedia());  // 8.16...