// Importa o styled-component do background
import { Background } from "./styles";

// Importa a imagem da pasta assets
import UsersImg from "../../assets/users.png";


// Componente que mostra o topo da página com imagem
function TopBackground() {

    return (

        // Container estilizado
        <Background>

            {/* imagem do topo */}
            <img
                src={UsersImg} // imagem importada
                alt="Users" // texto alternativo
            />

        </Background>

    );
}

// exporta para usar em outras páginas
export default TopBackground;