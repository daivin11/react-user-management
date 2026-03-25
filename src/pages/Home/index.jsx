// Hook para pegar valores dos inputs sem usar useState
import { useRef } from 'react';

// Serviço da API (axios configurado)
import api from '../../services/api';

// Hook do react-router para navegar entre páginas
import { useNavigate } from 'react-router-dom';


// Styled-components (estilos da página)
import {
  Container,
  ContainersIn,
  Title,
  Input,
  Form,
  InputLabel,
} from "./styles";


// Componentes reutilizáveis
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";


function Home() {

  // useRef para acessar os valores dos inputs
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  // Hook para navegar entre páginas
  const navigate = useNavigate();


  // Função chamada quando clicar em cadastrar
  async function registerUser(event) {

    // Faz POST na API
    const data = await api.post('/usuarios', {

      // pega valores dos inputs
      name: inputName.current.value,

      // converte para número
      age: parseInt(inputAge.current.value),

      email: inputEmail.current.value,
    });

    // mostra no console
    console.log(data);

    // navega para lista de usuários
    navigate('/lista-de-usuarios');
  }


  // JSX (HTML do React)
  return (

    <Container>

      {/* Background topo */}
      <TopBackground />


      {/* Formulário */}
      <Form>

        {/* Título */}
        <Title>Cadastrar Usuario</Title>


        {/* Container dos inputs */}
        <ContainersIn>

          <div>

            {/* Nome */}
            <div>
              <InputLabel>
                Nome <span>*</span>
              </InputLabel>

              <Input
                type="text"
                placeholder="Digite seu nome"
                ref={inputName}
              />
            </div>


            {/* Idade */}
            <div>
              <InputLabel>
                Idade <span>*</span>
              </InputLabel>

              <Input
                type="number"
                placeholder="Digite sua idade"
                ref={inputAge}
              />
            </div>

          </div>


          {/* Email */}
          <div>

            <InputLabel>
              Email <span>*</span>
            </InputLabel>

            <Input
              type="email"
              placeholder="Digite seu email"
              ref={inputEmail}
            />

          </div>

        </ContainersIn>


        {/* Botão cadastrar */}
        <Button
          type="button"
          onClick={registerUser}
          theme="primary"
        >
          Cadastrar
        </Button>

      </Form>


      {/* Botão para ir para lista */}
      <Button
        type="button"
        onClick={() => navigate('/lista-de-usuarios')}
      >
        Ver Lista de Usuários
      </Button>

    </Container>
  );
}

export default Home;