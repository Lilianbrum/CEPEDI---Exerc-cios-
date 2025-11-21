class Retangulo {
    constructor(nome, largura, altura) {
        this.nome = nome;
        this.largura = largura;
        this.altura = altura;
    }

    // Retorna o nome do objeto
    obterNome() {
        return this.nome;
    }

    // Calcula o perímetro do retângulo
    calcularPerimetro() {
        return 2 * (this.largura + this.altura);
    }

    // Calcula a área do retângulo
    calcularArea() {
        return this.largura * this.altura;
    }

    // Atualiza a largura com uma nova medida
    atualizarLargura(novaLargura) {
        this.largura = novaLargura;
    }

    // Atualiza a altura com uma nova medida
    atualizarAltura(novaAltura) {
        this.altura = novaAltura;
    }
}