function ehPalindromoDetalhado(palavra) {
    console.log(`\n Analisando: "${palavra}"`);
    
    const textoOriginal = palavra.toLowerCase();
    const textoLimpo = textoOriginal.replace(/[^a-z0-9áéíóúàèìòùãõâêîôûäëïöüç]/g, '');
    
    console.log(` Texto limpo: "${textoLimpo}"`);
    
    if (textoLimpo.length <= 1) {
        console.log(" É palíndromo (texto muito curto)");
        return true;
    }
    
    const textoInvertido = textoLimpo.split('').reverse().join('');
    console.log(`Texto invertido: "${textoInvertido}"`);
    
    const resultado = textoLimpo === textoInvertido;
    console.log(`Resultado: ${resultado ? 'É PALÍNDROMO' : 'NÃO É PALÍNDROMO'}`);
    
    return resultado;
}
