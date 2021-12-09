import Baralho from "./Baralho";
import Logo from "./Logo";

export default function Menu (){
    return (
        <div className = "menu">
            <Logo/>
            <div className= "menu-baralhos">
                <Baralho/>
            </div>
        </div>
    )
}