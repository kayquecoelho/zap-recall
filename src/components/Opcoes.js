export default function Opcoes({
  setEstadoAtual,
  setClasseAtual,
  contadorSucesso,
  setContadorSucesso,
}) {

  function mudarClasse(classe) {
    if (classe === "zap") {
      setContadorSucesso(contadorSucesso + 1);
    }
    setClasseAtual(classe);
    setEstadoAtual("respondido");
  }

  return (
    <div className="opcoes">
      <button className="opcao aprendi-agora" onClick={() => mudarClasse("aprendi-agora")} >
        Aprendi agora
      </button>

      <button className="opcao nao-lembrei" onClick={() => mudarClasse("nao-lembrei")}>
        Não lembrei
      </button>

      <button className="opcao com-esforco"onClick={() => mudarClasse("com-esforco")}>
        Lembrei com esforço
      </button>

      <button className="opcao zap" onClick={() => mudarClasse("zap")}>
        Zap!
      </button>
    </div>
  );
}
