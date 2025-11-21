function calcularMediaTurma() {
    console.log("=== CALCULADORA DE MÉDIA DA TURMA ===");
    
    // Solicitar a quantidade de notas
    let quantidadeNotas;
    do {
        quantidadeNotas = parseInt(prompt("Quantas notas você deseja calcular?"));
    } while (isNaN(quantidadeNotas) || quantidadeNotas <= 0);
    
    let notas = [];
    let soma = 0;
    
    // Coletar as notas
    for (let i = 0; i < quantidadeNotas; i++) {
        let nota;
        do {
            nota = parseFloat(prompt(`Digite a nota ${i + 1} (0-10):`));
        } while (isNaN(nota) || nota < 0 || nota > 10);
        
        notas.push(nota);
        soma += nota;
    }
    
    // Calcular a média
    const media = soma / quantidadeNotas;
    
    // Exibir resultados
    console.log("\n RESULTADOS:");
    console.log(`Notas inseridas: ${notas.join(", ")}`);
    console.log(`Quantidade de notas: ${quantidadeNotas}`);
    console.log(`Soma total: ${soma.toFixed(2)}`);
    console.log(`Média da turma: ${media.toFixed(2)}`);
    
    // Classificação da média
    if (media >= 9) {
        console.log(" Excelente!");
    } else if (media >= 7) {
        console.log(" Bom!");
    } else if (media >= 5) {
        console.log("  Regular!");
    } else {
        console.log(" Precisa melhorar!");
    }
    
    return media.toFixed(2);
}