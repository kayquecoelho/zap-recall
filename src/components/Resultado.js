import LogoMini from "./LogoMini";
import next from "../assets/next.png";
import party from"../assets/party.png";
import sad from "../assets/sad.png";

export default function Resultado({ contadorSucesso, meta, setPaginaAtual }) {
  return (
    <div className="resultado">
      <LogoMini />

      {contadorSucesso >= meta ? <Sucesso /> : <Fracasso />}

      <button className="reiniciar" onClick={()=> setPaginaAtual(false)}>
        Tentar novamente
        <span>
          <img className="next" src={next} />
        </span>
      </button>
    </div>
  );
}

function Sucesso() {
  return (
    <div className="mensagem">
      <p className="titulo">
        PARABÉNS!
        <span>
          <img src={party} className="emoji" />
        </span>
      </p>
      <p className="subtitulo">Você não esqueceu de nenhum flashcard!</p>
    </div>
  );
}

function Fracasso() {
  return (
    <div className="mensagem">
      <p className="titulo">
        Putz...
        <span>
          <img src={sad} className="emoji" />
        </span>
      </p>
      <p className="subtitulo">
        Você esqueceu alguns flashcards.. <br /> Não desanime! Na próxima você
        consegue!
      </p>
    </div>
  );
}
