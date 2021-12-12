import LogoMini from "./LogoMini";

export default function Resultado({ contadorErros }) {
  return (
    <div className="resultado">
      <LogoMini />

      {contadorErros === 0 ? <Sucesso /> : <Fracasso />}
    </div>
  );
}

function Sucesso() {
  return (
    <div className="mensagem">
      <p className="titulo">
        PARABÉNS!
        <span>
          <img src="./assets/party.png" className="emoji" />
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
          <img src="./assets/sad.png" className="emoji" />
        </span>
      </p>
      <p className="subtitulo">
        Você esqueceu alguns flashcards.. <br /> Não desanime! Na próxima você
        consegue!
      </p>
    </div>
  );
}
