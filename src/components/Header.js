import { goToHomePage, goToProfilePage, goToProductPage } from "../Router/coordinator";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate()
    return (
        <header>
            <div>
                <button onClick={() => goToHomePage(navigate)} >Ir para página inicial</button>
                <button onClick={() => goToProfilePage(navigate, "Rafael")}>Ir para página de perfil</button>
                <button onClick={() => goToProductPage(navigate, "001")}>Ir para página de produto</button>
            </div>
        </header>
    )
}