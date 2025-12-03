export default function Profile() {
    const nome = "Lilian Morais Brum";
    const profissao = "Bibliotecária e Pesquisadora";
    const cidade = "Contagem - MG";
    const foto = "https://www.instagram.com/p/Bq-1rrWFnd6/?img_index=10";

    const estilo = {
        border: "2px solid #333",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        width: "250px",
        margin: "0 auto",
        fontFamily: "Arial"
    };

    return (
        <div style={estilo}>
            <img
                src={foto}
                alt="Foto do perfil"
                style={{ borderRadius: "50%", marginBottom: "15px" }}
            />
            <h2>{nome}</h2>
            <p><strong>Profissão:</strong> {profissao}</p>
            <p><strong>Cidade:</strong> {cidade}</p>
        </div>
    );
}

import Profile from "./components/Profile";

export default function App() {
    return (
        <div>
            <h1>Exercício 1 - Perfil</h1>
            <Profile />
        </div>
    );
}
