export default function BotaoAvançar({setFaceAtual, setIndexAtual, setClasseAtual, setEstadoAtual, indexAtual}){
    function restaurarCard(){
        setFaceAtual("frente");
        setIndexAtual(indexAtual + 1);
        setClasseAtual ("");
        setEstadoAtual ("a responder")
    }
    return (<img src="./assets/turn.png" className="virar" onClick={() => restaurarCard()}/>)
}