// Função do React Router para criar as rotas
import { createBrowserRouter } from "react-router-dom";


// Importa as páginas
import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers";


// Cria o router com as rotas do app
const router = createBrowserRouter([

  // rota da página inicial
  {
    path: "/", // URL /
    element: <Home />, // componente que será exibido
  },

  // rota da lista de usuários
  {
    path: "/lista-de-usuarios", // URL /lista-de-usuarios
    element: <ListUsers />, // componente que será exibido
  }

]);


// exporta para usar no main.jsx
export default router;