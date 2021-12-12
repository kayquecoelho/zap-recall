import Flashcard from "./Flashcard";
import next from "../assets/next.png";

export default function Baralho({ deck, setPaginaAtual, meta }) {

  function validarInfo() {
    if (meta > 0) {
      setPaginaAtual(<Flashcard deck={deck} setPaginaAtual={setPaginaAtual} meta={meta} />);
    } else {
      alert("O valor mínimo para a meta é de 1 card.");
    }
  }

  return (
    <button className="baralho" onClick={validarInfo}>
      <p>{deck.titulo}</p>
      <span>
        <img className="next" src={next} />
      </span>
    </button>
  );
}
