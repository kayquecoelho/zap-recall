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
