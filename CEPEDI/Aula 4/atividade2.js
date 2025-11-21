function jogoRapido(jogadaJogador) {
    const jogo = new JogoPedraPapelTesoura();
    const jogadaPC = jogo.jogadaComputador();
    const vencedor = jogo.determinarVencedor(jogadaJogador, jogadaPC);
    
    console.log(` ${jogadaJogador.toUpperCase()} vs ${jogadaPC.toUpperCase()} → ${vencedor.toUpperCase()}`);
    return vencedor;
}

// Executar demonstração
console.log('=== PEDRA, PAPEL, TESOURA ===');

// Executar testes
executarTestes();

console.log('\n=== DEMONSTRAÇÃO DO JOGO ===');
jogarVersaoConsole();

console.log('\n=== EXEMPLOS RÁPIDOS ===');
jogoRapido('pedra');
jogoRapido('papel');
jogoRapido('tesoura');

//jogarPartidaInterativa();