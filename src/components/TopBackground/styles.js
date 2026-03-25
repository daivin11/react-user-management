import styled from "styled-components";

export const Background = styled.div`
  width: min(900px, 100%);
  height: 220px;
  background: linear-gradient(90deg, #ff854d, #f82eff);
  border-radius: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 26px;

  img{
    max-width: 108%;
    max-height: 100%;
    object-fit: contain;
  }
`;