import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #080131;
  min-height: 100vh;
`;

export const Title = styled.h2`
  font-size: 38px;
  color: #f3e7e7;
  margin-top: 10px;
  font-style: normal;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const ContainerUsers = styled.div`
  width: 100%;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
`;

export const CardUsers = styled.div`
  background: linear-gradient(90deg, #2a1257, #220425);
  padding: 16px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  width: 100%;

  p {
    font-size: 16px;
    color: #fff;
    margin: 4px 0;
    word-break: break-word;
  }

  h3 {
    font-size: 25px;
    color: #fff;
    margin-bottom: 8px;
  }

  @media (max-width: 768px) {
    padding: 14px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
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

export const TrashIcon = styled.img`
  cursor: pointer;
  padding-left: 20px;
  width: 38px;
  height: 28px;
  flex-shrink: 0;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media (max-width: 480px) {
    padding-left: 0;
    align-self: flex-end;
  }
`;

export const AvatarUser = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;