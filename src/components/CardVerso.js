export default function CardVerso({
  quantity,
  pergunta: { pergunta, resposta },
  indexAtual,
  children,
}) {
  return (
    <div className="card-verso">
      <span className="num-cards" data-identifier="counter">
        {indexAtual + 1}/{quantity}
      </span>
      <p className="pergunta">{pergunta}</p>
      <p className="resposta"> {resposta}</p>
      {children}
    </div>
  );
}

