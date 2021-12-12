import Flashcard from "./Flashcard";

export default function Baralho({ deck, setPaginaAtual }) {
  return (
    <div className="baralho">
      <p>{deck.titulo}</p>
      <img
        src="./assets/next.png"
        onClick={() =>
          setPaginaAtual(
            <Flashcard deck={deck} setPaginaAtual={setPaginaAtual} />
          )
        }
      />
    </div>
  );
}
