export default function RecipeCard() {
    const recipe = {
        titulo: "Bolo de Cenoura",
        tempoMin: 90,
        dificuldade: "Médio",
        ingredientes: [
            "3 cenouras grandes",
            "3 ovos",
            "1 xícara de óleo",
            "2 xícaras de farinha de trigo",
            "1 colher de fermento"
        ],
        modoPreparo:
            "Bata as cenouras, ovos e óleo no liquidificador. Em seguida, misture com os ingredientes secos. Asse por 40 minutos."
    };

    const tempoHoras =
        recipe.tempoMin > 60 ? (recipe.tempoMin / 60).toFixed(1) : null;

    const corDificuldade = {
        Fácil: "green",
        Médio: "goldenrod",
        Difícil: "red"
    };

    return (
        <>
            <div
                style={{
                    border: "2px solid #444",
                    padding: "20px",
                    width: "350px",
                    margin: "0 auto",
                    borderRadius: "12px",
                    fontFamily: "Arial"
                }}
            >
                <h2>{recipe.titulo}</h2>

                <p>
                    <strong>Tempo:</strong> {recipe.tempoMin} min{" "}
                    {tempoHoras && <span>({tempoHoras} h)</span>}
                </p>

                <p>
                    <strong>Dificuldade:</strong>{" "}
                    <span style={{ color: corDificuldade[recipe.dificuldade] }}>
                        {recipe.dificuldade}
                    </span>
                </p>

                <h3>Ingredientes:</h3>
                <ul>
                    {recipe.ingredientes.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <h3>Modo de preparo:</h3>
                <p>{recipe.modoPreparo}</p>
            </div>
        </>
    );
}

import RecipeCard from "./components/RecipeCard";

export default function App() {
  return (
    <div>
      <h1>Exercício 2 - Receita</h1>
      <RecipeCard />
    </div>
  );
}
