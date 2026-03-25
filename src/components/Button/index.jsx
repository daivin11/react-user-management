// Importa PropTypes para validar as props
import PropTypes from "prop-types";

// Importa o styled-component do botão
import { Button } from "./styles";


// Componente de botão reutilizável
function DefaultButton({ children, theme, ...props }) {

    return (

        // Passa todas as props para o botão
        // theme → usado no styled-components
        // children → texto dentro do botão
        <Button {...props} theme={theme}>

            {children}

        </Button>
    );
}


// Define os tipos das props (boa prática)
DefaultButton.propTypes = {

    // children = conteúdo dentro do botão
    children: PropTypes.node.isRequired,

    // theme = estilo do botão
    theme: PropTypes.string,
};


// exporta para usar em outras páginas
export default DefaultButton;