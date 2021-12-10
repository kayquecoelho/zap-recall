import CardFrente from "./CardFrente";
import CardVerso from "./CardVerso";
import LogoMini from "./LogoMini";
import { useState } from "react";
import Opcoes from "./Opcoes";
import BotaoAvançar from "./BotaoAvancar";

export default function Flashcard({ deck }) {
  const [faceAtual, setFaceAtual] = useState("frente");
  const [indexAtual, setIndexAtual] = useState(0);
  const [estadoAtual, setEstadoAtual] = useState("a responder");
  const [classeAtual, setClasseAtual] = useState("");

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
            lengthDeck={deck.questoes.length}
            pergunta={deck.questoes[indexAtual]}
            indexAtual={indexAtual}
          >
            {estadoAtual === "a responder" ? (
              <Opcoes
                setEstadoAtual={setEstadoAtual}
                setClasseAtual={setClasseAtual}
              />
            ) : (
              <BotaoAvançar
                setEstadoAtual={setEstadoAtual}
                setClasseAtual={setClasseAtual}
                setFaceAtual={setFaceAtual}
                setIndexAtual={setIndexAtual}
                indexAtual={indexAtual}
              />
            )}
          </CardVerso>
        )}
      </div>
    </div>
  );
}
