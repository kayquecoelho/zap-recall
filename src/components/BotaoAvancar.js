import Resultado from "./Resultado";
import turn from "../assets/turn.png";

export default function BotaoAvançar({
  setFaceAtual,
  setIndexAtual,
  setClasseAtual,
  setEstadoAtual,
  indexAtual,
  setPaginaAtual,
  quantity,
  contadorSucesso,
  meta,
}) {

  function restaurarCard() {
    if (indexAtual + 1 === quantity){
        setPaginaAtual(<Resultado contadorSucesso={contadorSucesso} meta={meta} setPaginaAtual={setPaginaAtual}/>)
    } else {
        setFaceAtual("frente");
        setIndexAtual(indexAtual + 1);
        setClasseAtual("");
        setEstadoAtual("a responder");
    }
  }

  return (
    <img src={turn} className="virar" data-identifier="arrow" onClick={() => restaurarCard()} />
  );
}
