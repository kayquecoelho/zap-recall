import LogoMini from "./LogoMini";
import next from "../assets/next.png";
import party from "../assets/party.png";
import sad from "../assets/sad.png";

export default function Resultado({ contadorSucesso, meta, setPaginaAtual }) {
  return (
    <div className="resultado">
      <LogoMini />

      {contadorSucesso >= meta ? (
        <Mensagem
          titulo="PARABÉNS!"
          subtitulo="Você não esqueceu de nenhum flashcard!"
          informacao=""
          img={party}
        />
      ) : (
        <Mensagem
          titulo="Putz.."
          informacao={`Você esqueceu ${meta - contadorSucesso} flashcards..`}
          subtitulo="Não desanime! Na próxima você consegue!"
          img={sad}
        />
      )}

      <button className="reiniciar" onClick={() => setPaginaAtual(false)}>
        Tentar novamente
        <span>
          <img className="next" alt="" src={next} />
        </span>
      </button>
    </div>
  );
}

function Mensagem({ img, titulo, informacao, subtitulo }) {
  return (
    <div className="mensagem">
      <p className="titulo">
        {titulo}
        <span>
          <img src={img} alt="" className="emoji" />
        </span>
      </p>

      <div className="texto">
        <p className="informacao"> {informacao}</p>
        <p className="subtitulo">{subtitulo}</p>
      </div>
    </div>
  );
}
