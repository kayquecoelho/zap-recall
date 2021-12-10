export default function Opcoes({setEstadoAtual, setClasseAtual}) {
    function mudarClasse (classe){
        setClasseAtual(classe);
        setEstadoAtual("respondido")
    }
  return (
    <div className="opcoes">
      <div className="opcao aprendi-agora" onClick={()=> mudarClasse("aprendi-agora")}>Aprendi agora</div>
      <div className="opcao nao-lembrei" onClick={()=> mudarClasse("nao-lembrei")}>Não lembrei</div>
      <div className="opcao com-esforco" onClick={()=> mudarClasse("com-esforco")}>Lembrei com esforço</div>
      <div className="opcao zap" onClick={()=> mudarClasse("zap")}>Zap!</div>
    </div>
  );
}
