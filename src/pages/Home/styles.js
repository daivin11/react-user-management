import styled from "styled-components";


// Container principal da página
// ocupa tela inteira e centraliza conteúdo
export const Container = styled.div`
  min-height: 100vh; // altura da tela inteira

  background: #080131;

  display: flex;

  flex-direction: column; // elementos um embaixo do outro

  align-items: center; // centraliza horizontal

  padding: 40px 16px;
`;


// Formulário principal
// limita largura e centraliza
export const Form = styled.form`
  width: min(560px, 100%); // máximo 560px

  display: flex;
  flex-direction: column;

  align-items: center;
`;


// Título da página
export const Title = styled.h2`
  margin: 0 0 18px 0;

  font-size: 34px;

  color: #ffffff;

  font-weight: 700;
`;


// Container dos inputs
export const ContainersIn = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 14px;


  /* primeira linha (Nome + Idade) */
  > div:first-child {
    display: flex;
    gap: 16px;
  }


  /* divide nome e idade em 2 colunas */
  > div:first-child > div {
    flex: 1;
  }
`;


// Label do input
export const InputLabel = styled.label`
  display: block;

  font-size: 12px;

  font-weight: 700;

  margin-bottom: 6px;

  color: #b1b8c7;


  // cor do *
  span {
    color: #ef4444;
  }
`;


// Input
export const Input = styled.input`
  width: 100%;

  height: 42px;

  border-radius: 10px;

  border: none;

  background: #e9e8e8;

  padding: 0 16px;

  font-size: 14px;

  color: #111827;


  // placeholder
  &::placeholder {
    color: #6b7280;
  }


  // quando clica
  &:focus {
    outline: 2px solid rgba(59, 130, 246, 0.35);

    background: #d7d7d7;
  }
`;