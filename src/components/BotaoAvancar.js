import Resultado from "./Resultado";

export default function BotaoAvançar({
  setFaceAtual,
  setIndexAtual,
  setClasseAtual,
  setEstadoAtual,
  indexAtual,
  setPaginaAtual,
  quantity,
  contadorErros,
}) {

  function restaurarCard() {
    if (indexAtual + 1 === quantity){
        setPaginaAtual(<Resultado contadorErros={contadorErros}/>)
    } else {
        setFaceAtual("frente");
        setIndexAtual(indexAtual + 1);
        setClasseAtual("");
        setEstadoAtual("a responder");
    }
  }

  return (
    <img
      src="./assets/turn.png"
      className="virar"
      onClick={() => restaurarCard()}
    />
  );
}
