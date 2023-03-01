import styled from "styled-components";
import { SectionHeading } from "../CommonStyles";

export const Wrapper = styled.div``;
export const Heading = styled(SectionHeading)`
  color: #D24916;
`;
export const SubHeading = styled.h1`
  font-size: 18px;
`;
export const Desc = styled.p`
  font-size: 16px;
`;

export const ProsSection = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

export const ProsWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid lightgray;
  padding-inline: 10px;
  border-radius: 12px;
  position: relative;
`;

export const ProsDetailSection = styled.div`
  height: 100%;
  display: none;
  position: absolute;
  text-align: center;
  background-color: white;
  backdrop-filter: blur(5px);
  border-radius: 12px;
  padding-inline: 10px;
  &:hover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ProsImageSection = styled.div`
  flex: 1;
  display: grid;
  place-items: center;

  &:hover ~ ${ProsDetailSection} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ProsImage = styled.img`
  width: 250px;
  height: 200px;
`;

export const ProsTitle = styled.h1`
  font-size: 14px;
  text-align: center;
`;
export const ProsDesc = styled.p`
  font-size: 13px;
  font-weight: 500;
`;
