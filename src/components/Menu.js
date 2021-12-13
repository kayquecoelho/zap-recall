import { useState } from "react";
import Baralho from "./Baralho";
import Logo from "./Logo";
const decks = [
  {
    titulo: "Praticar react",
    questoes: [
      {
        pergunta: "O que é JSX?",
        resposta: "Uma extensão de linguagem do JavaScript",
      },
      {
        pergunta: "O React é __ ?",
        resposta: " uma biblioteca JavaScript para construção de interfaces",
      },
      {
        pergunta: " Componentes devem iniciar com __ ?",
        resposta: "letra maiúscula",
      },
      {
        pergunta: "Podemos colocar __ dentro do JSX?",
        resposta: "expressões",
      },
      {
        pergunta: " O ReactDOM nos ajuda __ ?",
        resposta:
          "interagindo com a DOM para colocar componentes React na mesma",
      },
      {
        pergunta: "Usamos o npm para __ ?",
        resposta: "gerenciar os pacotes necessários e suas dependências",
      },
      {
        pergunta: "Usamos props para __ ?",
        resposta: " passar diferentes informações para componentes",
      },
      {
        pergunta: "Usamos estado (state) para __?",
        resposta:
          "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
      },
    ],
  },
  {
    titulo: "Geografia",
    questoes: [
      {
        pergunta: "O que são cidades globais?",
        resposta: "Cidade considerada um lugar importante no sistema econômico global",
      },
      {
        pergunta: "A fonte de energia mais usada no mundo é proveniente de___?",
        resposta: "combustíveis fósseis: petróleo, carvão mineral",
      },
      {
        pergunta: "O Plano Marshall teve o papel de ____",
        resposta: "financiar a reconstrução da Europa no cenário pós Segunda Guerra Mundial",
      },
      {
        pergunta: "As características do Fordismo são ____",
        resposta: "produção em massa, linha de montagem, trabalho em série e especializado",
      },
    ],
  },
  {
    titulo: "JavaScript",
    questoes: [
      {
        pergunta: "Os eventos são",
        resposta: "formas de informar ao código de que algum tipo de interação entre a página e o usuário aconteceu ",
      },
      {
        pergunta: "O event handling é uma série de passos que ____",
        resposta: "são usados para indicar ao script o que deve ser executado quando um evento acontece",
      },
      {
        pergunta: "O strict mode é ____?",
        resposta: "uma forma mais restritiva de escrever um script. ",
      },
      {
        pergunta: "As features mais importantes do ECMA2016 são _____",
        resposta: "destructuring, template string, default parameters",
      },
      {
        pergunta: "Para adicionar um classe a um elemento devo usar _____",
        resposta: "o classList.add('classe')",
      },
      {
        pergunta: "O DOM permite a manipulaçao de _____ no JavaScript",
        resposta: "código HTML",
      },
      {
        pergunta: "A biblioteca ____ é usada na comunicação entre script e servidores",
        resposta: "axios",
      },
      {
        pergunta: "O axios.get é usado para _____, enquanto o axios.post é usado para _____",
        resposta: "receber informações de um servidor; enviar informacoes para um servidor",
      },
    ],
  },
];
export default function Menu(props) {
  const [meta, setMeta] = useState("");

  return (
    <div className="menu">
      <Logo />

      <div className="menu-baralhos">
        <input
          className="meta"
          type="number"
          placeholder="Sua meta de zaps"
          value={meta}
          onChange={(e) => setMeta(e.target.value)}
        />

        {decks.map((item) => (
          <Baralho setPaginaAtual={props.setPaginaAtual} deck={item} meta={meta}/>
        ))}
      </div>
    </div>
  );
}
