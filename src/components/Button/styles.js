import styled from "styled-components";

export const Button = styled.button`
  margin-top: 26px;
  height: 54px;
  padding: 0 46px;
  border-radius: 28px;
  border: ${props => props.theme === "primary" ? "none" : "2px solid #e8e9eb"}; ;
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(90deg, #ff4dca, #ff932e)"
      : "transparent"};
  color: #4b5563;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: brightness(0.97);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0px);
    opacity: 0.9;
  }
`;
