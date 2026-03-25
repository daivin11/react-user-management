import styled from "styled-components";


// Container principal da página
// Centraliza tudo e define o fundo da tela
export const Container = styled.div`
  display: flex;
  flex-direction: column; // elementos em coluna
  align-items: center; // centraliza horizontal
  gap: 20px; // espaço entre elementos
  padding: 20px;
  background-color: #080131;
  min-height: 100vh; // ocupa tela inteira
`;


// Título da página
export const Title = styled.h2`
  font-size: 38px;
  color: #f3e7e7;
  margin-top: 10px;
  font-style: normal;
  text-align: center;

  // Tablet
  @media (max-width: 768px) {
    font-size: 30px;
  }

  // Celular
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;


// Container que segura todos os usuários
// Grid responsivo
export const ContainerUsers = styled.div`
  width: 100%;
  max-width: 900px;

  display: grid;

  // cria colunas automáticas responsivas
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  gap: 20px;
`;


// Card de cada usuário
export const CardUsers = styled.div`
  background: linear-gradient(90deg, #2a1257, #220425);

  padding: 16px;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  width: 100%;


  // estilo dos parágrafos dentro do card
  p {
    font-size: 16px;
    color: #fff;
    margin: 4px 0;
    word-break: break-word;
  }

  // estilo do nome
  h3 {
    font-size: 25px;
    color: #fff;
    margin-bottom: 8px;
  }


  // Tablet
  @media (max-width: 768px) {
    padding: 14px;
    border-radius: 20px;
  }


  // Celular
  @media (max-width: 480px) {
    flex-direction: column; // muda layout para coluna
    align-items: flex-start;
    gap: 12px;

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }
`;


// Ícone de deletar
export const TrashIcon = styled.img`
  cursor: pointer;

  padding-left: 20px;

  width: 38px;
  height: 28px;

  flex-shrink: 0; // não deixa encolher


  // hover
  &:hover {
    opacity: 0.8;
  }

  // clique
  &:active {
    opacity: 0.6;
  }


  // celular
  @media (max-width: 480px) {
    padding-left: 0;
    align-self: flex-end;
  }
`;


// Avatar do usuário
export const AvatarUser = styled.img`
  width: 80px;
  height: 80px;

  object-fit: cover;

  border-radius: 50%; // deixa redondo


  // celular
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;