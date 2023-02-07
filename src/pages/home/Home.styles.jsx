import styled from "styled-components";
import { Container } from "../../components/CommonStyles";

export const Box = styled(Container)`
  z-index: 0;
`;

export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 48px));
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-block: 50px;
  z-index: 0;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;
