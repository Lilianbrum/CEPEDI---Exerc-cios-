// GERADOR DE SEQUÊNCIA DE FIBONACCI

function gerarFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const sequencia = [0, 1];
    
    for (let i = 2; i < n; i++) {
        const proximo = sequencia[i - 1] + sequencia[i - 2];
        sequencia.push(proximo);
    }
    
    return sequencia;
}