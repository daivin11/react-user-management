// Hooks do React
import { useEffect, useState } from "react";

// Serviço da API (axios configurado)
import api from "../../services/api";

// Componentes reutilizáveis
import TopBackground from "../../components/TopBackground";
import Button from "../../components/Button";

// Ícone de deletar
import Trash from "../../assets/trash.svg";

// Hook do React Router para navegação
import { useNavigate } from "react-router-dom";

// Styled-components (estilos da página)
import {
  Title,
  Container,
  CardUsers,
  ContainerUsers,
  TrashIcon,
  AvatarUser
} from "./styles";


function ListUsers() {

  // Estado que guarda a lista de usuários
  const [users, setUsers] = useState([]);

  // Hook para navegar entre páginas
  const navigate = useNavigate();


  // useEffect executa quando a tela carrega
  useEffect(() => {

    // Função para buscar usuários na API
    async function getUsers() {
      try {

        // Faz requisição GET para /usuarios
        const { data } = await api.get("/usuarios");

        // Salva os usuários no state
        setUsers(data);

      } catch (error) {

        // Caso dê erro
        console.error("Erro ao buscar usuários:", error);

      }
    }

    // Chama a função
    getUsers();

  }, []); // [] = roda só quando a página abre


  // Função para deletar usuário
  async function deleteUser(id) {

    try {

      // Deleta na API
      await api.delete(`/usuarios/${id}`);

      // Remove do state sem recarregar página
      setUsers(users.filter((user) => user.id !== id));

    } catch (error) {

      console.error("Erro ao deletar usuário:", error);

    }

  }


  // JSX (HTML do React)
  return (

    <Container>

      {/* background topo */}
      <TopBackground />

      {/* título */}
      <Title>Lista de Usuários</Title>


      {/* container dos cards */}
      <ContainerUsers>

        {/* percorre lista de usuários */}
        {users.map((user) => (

          <CardUsers key={user.id}>

            {/* avatar gerado pela API dicebear */}
            <AvatarUser
              src={
                "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Felix" +
                user.name
              }
              alt="avatar"
            />

            {/* dados do usuário */}
            <div>

              <h3>{user.name}</h3>

              <p>Idade: {user.age}</p>

              <p>Email: {user.email}</p>

            </div>


            {/* botão deletar */}
            <TrashIcon
              src={Trash}
              alt="icone-lixo"
              onClick={() => deleteUser(user.id)}
            />

          </CardUsers>

        ))}

      </ContainerUsers>


      {/* botão voltar */}
      <Button
        type="button"
        onClick={() => navigate(-1)}
      >
        Voltar
      </Button>

    </Container>

  );
}

export default ListUsers;