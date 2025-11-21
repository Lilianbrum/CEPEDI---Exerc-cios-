function calcularMediaSimples(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    
    if (media >= 7) {
        return `Média: ${media.toFixed(2)} - APROVADO`;
    } else if (media >= 5) {
        return `Média: ${media.toFixed(2)} - RECUPERAÇÃO`;
    } else {
        return `Média: ${media.toFixed(2)} - REPROVADO`;
    }
}
