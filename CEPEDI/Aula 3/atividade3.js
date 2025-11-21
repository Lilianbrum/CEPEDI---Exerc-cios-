const usuariosCadastrados = {
    "admin": "123456",
    "usuario": "senha123",
    "joao": "minhasenha",
    "maria": "1234"
};

function fazerLogin() {
    // Solicitar credenciais ao usuário
    const username = prompt("Digite seu nome de usuário:");
    const password = prompt("Digite sua senha:");
    
    // Verificar se é o administrador
    if (username === "admin" && password === "123456") {
        console.log("Acesso de administrador concedido!");
        return "Acesso de administrador";
    }
    // Verificar se é um usuário cadastrado
    else if (usuariosCadastrados[username] === password) {
        console.log("Acesso de usuário concedido!");
        return "Acesso de usuário";
    }
    // Acesso negado
    else {
        console.log("Acesso negado!");
        return "Acesso negado";
    }
}

// Versão com switch case (alternativa)
function fazerLoginSwitch(username, password) {
    switch(true) {
        case (username === "admin" && password === "123456"):
            return "Acesso de administrador";
        case (usuariosCadastrados[username] === password):
            return "Acesso de usuário";
        default:
            return "Acesso negado";
    }
}