export default function CardFrente({lengthDeck, pergunta, indexAtual, setFaceAtual}) {
  return (
    <div className= "card-frente">
      <span className="num-cards">{indexAtual+1}/{lengthDeck} </span>
      <p className="pergunta">{pergunta.pergunta}</p>
      <img src="./assets/turn.png" className="virar" onClick={() => setFaceAtual("verso")}/>
    </div>
  );
}
