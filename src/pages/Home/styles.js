import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: #080131;
  display: flex;
  flex-direction: column;  /* 👈 um embaixo do outro */
  align-items: center;
  padding: 40px 16px;
`;

export const Form = styled.form`
  width: min(560px, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0 0 18px 0;
  font-size: 34px;
  color: #ffffff;
  font-weight: 700;
`;

export const ContainersIn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;

  /* linha Nome + Idade */
  > div:first-child {
    display: flex;
    gap: 16px;
  }

  > div:first-child > div {
    flex: 1;
  }
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 6px;
  color: #b1b8c7;

  span {
    color: #ef4444;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  border-radius: 10px;
  border: none;
  background: #e9e8e8;
  padding: 0 16px;
  font-size: 14px;
  color: #111827;

  &::placeholder {
    color: #6b7280;
  }

  &:focus {
    outline: 2px solid rgba(59, 130, 246, 0.35);
    background: #d7d7d7;
  }
`;

