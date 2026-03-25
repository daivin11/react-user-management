import { useRef } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  ContainersIn,
  Title,
  Input,
  Form,
  InputLabel,
  
} from "./styles";


import  Button  from "../../components/Button";
import TopBackground from "../../components/TopBackground";


function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

async function registerUser(event) {
 const data = await api.post('/usuarios', {
    name: inputName.current.value,
    age: parseInt(inputAge.current.value),
    email: inputEmail.current.value,
  });
  console.log(data);
  navigate('/lista-de-usuarios');
}

  return (
    <Container>
     <TopBackground />

      <Form>
        <Title>Cadastrar Usuario</Title>

        <ContainersIn>
          <div>
            <div>
              <InputLabel>Nome <span>*</span></InputLabel>
              <Input type="text" placeholder="Digite seu nome" ref={inputName} />
            </div>
            <div>
              <InputLabel>Idade <span>*</span></InputLabel>
              <Input type="number" placeholder="Digite sua idade" ref={inputAge} />
            </div>
          </div>

          <div>
            <InputLabel>Email <span>*</span></InputLabel>
            <Input type="email" placeholder="Digite seu email" ref={inputEmail} />
          </div>
        </ContainersIn>

        <Button type="button" onClick={registerUser} theme="primary" >Cadastrar</Button>
      </Form>

      <Button type="button" onClick={() => navigate('/lista-de-usuarios')} >
        Ver Lista de Usuários
      </Button>

    </Container>
  );
}

export default Home;