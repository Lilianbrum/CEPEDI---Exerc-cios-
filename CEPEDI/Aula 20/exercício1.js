try {
    let a = Number(prompt("Digite o valor de a: "));
    let b = Number(prompt("Digite o valor de b: "));
    let resultado = a / b;
    if (isNaN(resultado)) {
        throw new Error("Valores inválidos!");
    }

    if (resultado === Infinity || resultado == -Infinity) {
        throw new Error("Divisão por zero!");
    }
    alert(resultado);
} catch (erro) {
    console.log("Erro: " + erro.nome);
    console.log("Detalhe: " + erro.message);
}