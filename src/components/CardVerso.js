export default function CardVerso({
  lengthDeck,
  pergunta: { pergunta, resposta },
  indexAtual,
  children,
}) {
  return (
    <div className="card-verso">
      <span className="num-cards">
        {indexAtual + 1}/{lengthDeck}
      </span>
      <p className="pergunta">{pergunta}</p>
      <p className="resposta"> {resposta}</p>
      {children}
    </div>
  );
}

