function validadorInterativo() {
    console.log('VALIDADOR INTERATIVO DE NÚMEROS PRIMOS');
    console.log('Digite um número para verificar se é primo');
    console.log('Digite "intervalo" para buscar primos em um intervalo');
    console.log('Digite "fatorar" para decompor um número em fatores primos');
    console.log('Digite "sair" para encerrar');

    function processarEntrada() {
        const entrada = prompt('\nDigite um número ou comando:');

        if (!entrada) return;

        const comando = entrada.toLowerCase().trim();

        switch (comando) {
            case 'sair':
                console.log(' Programa encerrado!');
                return;

            case 'intervalo':
                const inicio = parseInt(prompt('Digite o início do intervalo:'));
                const fim = parseInt(prompt('Digite o fim do intervalo:'));
                if (!isNaN(inicio) && !isNaN(fim)) {
                    encontrarPrimosNoIntervalo(inicio, fim);
                }
                break;

            case 'fatorar':
                const numFatorar = parseInt(prompt('Digite o número para fatorar:'));
                if (!isNaN(numFatorar)) {
                    decomporEmFatoresPrimos(numFatorar);
                }
                break;

            default:
                const numero = parseInt(comando);
                if (!isNaN(numero)) {
                    verificarPrimoDetalhado(numero);
                } else {
                    console.log(' Entrada inválida! Digite um número ou comando válido.');
                }
        }

        processarEntrada();
    }

    processarEntrada();
}