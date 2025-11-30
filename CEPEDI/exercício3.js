try {
    let a = Number(prompt("Digite o valor de a: "));
    let b = Number(prompt("Digite o valor de b: "));
    let resultado = a / b;

    if (isNaN(resultado)) {
        throw new ValoresInvalidosError("Valores inválidos!");
    }
    if (resultado === Infinity || resultado === -Infinity) {
        throw new DivisaoPorZeroError("Divisao por zero!");
    }
    alert("Resultado: " + resultado);
} catch (erro) {
    console.log("Erro: " + erro.name);
    console.log("Detalhe: " + erro.message);
}
