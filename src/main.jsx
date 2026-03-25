// Importa o StrictMode do React
// Ele ajuda a detectar erros durante o desenvolvimento
import { StrictMode } from 'react'

// Função para renderizar o React no HTML
import { createRoot } from 'react-dom/client'

// Estilos globais (styled-components global)
import { GlobalStyles } from './styles/GlobalStyles'

// Router do React Router
import { RouterProvider } from "react-router-dom";

// Arquivo onde estão definidas as rotas
import router from "./routes";


// Pega a div root do index.html e renderiza o React dentro dela
createRoot(document.getElementById('root')).render(

  <StrictMode>

    {/* aplica estilos globais */}
    <GlobalStyles />

    {/* ativa o sistema de rotas */}
    <RouterProvider router={router} />

  </StrictMode>,
)