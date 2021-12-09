import CardFrente from "./CardFrente";
import CardVerso from "./CardVerso";
import LogoMini from "./LogoMini";

export default function Flashcard (){
    return (
        <div className= "tela-flashcard">
            <LogoMini/>
            <div className="card">
                <CardVerso/>
            </div>
        </div>
    )
}