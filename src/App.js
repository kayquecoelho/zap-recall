import Menu from "./components/Menu";
import {useState} from "react"
import "./css/reset.css"
import "./css/style.css"

export default function App (){
    const [paginaAtual, setPaginaAtual] = useState(false);
    if (paginaAtual === false){
        setPaginaAtual(<Menu setPaginaAtual= {setPaginaAtual}/>);
    }
    return (
        <>
            { paginaAtual }
        </>
    )
}