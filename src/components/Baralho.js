import Flashcard from "./Flashcard";
import next from "../assets/next.png";

export default function Baralho({ deck, setPaginaAtual, meta }) {
  console.log(deck)

  function validarInfo() {
    if (meta > 0 && meta <= deck.questoes.length) {
      setPaginaAtual(<Flashcard deck={deck} setPaginaAtual={setPaginaAtual} meta={meta} />);
    } else {
      alert(`O valor mínimo para a meta é de 1 card.
      Para o card selecionado, a meta máxima é de ${deck.questoes.length}
      cards`);
    }
  }

  return (
    <button className="baralho" onClick={validarInfo} data-identifier="start-zap-recall" >
      <p>{deck.titulo}</p>
      <span>
        <img className="next" src={next} alt=""/>
      </span>
    </button>
  );
}
