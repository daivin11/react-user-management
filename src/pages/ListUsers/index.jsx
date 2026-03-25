import { useEffect, useState } from "react";
import api from "../../services/api";
import TopBackground from "../../components/TopBackground";
import Button from "../../components/Button";
import Trash from "../../assets/trash.svg";

import {
  Title,
  Container,
  CardUsers,
  ContainerUsers,
  TrashIcon,
  AvatarUser
} from "./styles";

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await api.get("/usuarios");
        setUsers(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    }

    getUsers();
  }, []);

  return (
    <Container>
      <TopBackground />
      <Title>Lista de Usuários</Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser 
  src={'https://api.dicebear.com/9.x/fun-emoji/svg?seed=Felix' + user.name}
  alt="avatar" /> 
            <div>
              <h3> {user.name}</h3>
              <p>Idade: {user.age}</p>
              <p>Email: {user.email}</p>
            </div>

            <TrashIcon src={Trash} alt="icone-lixo" />
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button type="button">Voltar</Button>
    </Container>
  );
}

export default ListUsers;