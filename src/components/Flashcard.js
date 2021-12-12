import CardFrente from "./CardFrente";
import CardVerso from "./CardVerso";
import LogoMini from "./LogoMini";
import { useState } from "react";
import Opcoes from "./Opcoes";
import BotaoAvançar from "./BotaoAvancar";

export default function Flashcard({ deck, setPaginaAtual }) {
  const [faceAtual, setFaceAtual] = useState("frente");
  const [indexAtual, setIndexAtual] = useState(0);
  const [estadoAtual, setEstadoAtual] = useState("a responder");
  const [classeAtual, setClasseAtual] = useState("");
  console.log(classeAtual)
  const [contadorErros, setContadorErros] = useState(0);

  return (
    <div className="tela-flashcard">
      <LogoMini />

      <div className={`card ${classeAtual}`}>
        {faceAtual === "frente" ? (
          <CardFrente
            setFaceAtual={setFaceAtual}
            lengthDeck={deck.questoes.length}
            pergunta={deck.questoes[indexAtual]}
            indexAtual={indexAtual}
          />
        ) : (
          <CardVerso
            quantity={deck.questoes.length}
            pergunta={deck.questoes[indexAtual]}
            indexAtual={indexAtual}
          >
            {estadoAtual === "a responder" ? (
              <Opcoes
                setEstadoAtual={setEstadoAtual}
                setClasseAtual={setClasseAtual}
                contadorErros={contadorErros}
                setContadorErros= {setContadorErros}
              />
            ) : (
              <BotaoAvançar
                setEstadoAtual={setEstadoAtual}
                setClasseAtual={setClasseAtual}
                setFaceAtual={setFaceAtual}
                setIndexAtual={setIndexAtual}
                indexAtual={indexAtual}
                setPaginaAtual= {setPaginaAtual}
                quantity={deck.questoes.length}
                contadorErros={contadorErros}
              />
            )}
          </CardVerso>
        )}
      </div>
    </div>
  );
}
