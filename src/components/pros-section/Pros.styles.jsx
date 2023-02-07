import styled from "styled-components";

export const Wrapper = styled.div``;
export const Heading = styled.h1`
  color: darkblue;
`;
export const SubHeading = styled.h1`
  font-size: 18px;
`;
export const Desc = styled.p`
  font-size: 16px;
`;

export const ProsSection = styled.div`
  margin-top: 20px;
  padding-inline: 20px;
  border-radius: 20px;
  background-color: #bccef8;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

export const ProsWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const ProsImageSection = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;
export const ProsImage = styled.img`
  width: 250px;
  height: 200px;
`;
export const ProsDetailSection = styled.div`
  flex: 3;
`;
export const ProsTitle = styled.h1`
  font-size: 16px;
  text-align: center;
`;
export const ProsDesc = styled.p`
  text-align: center;
`;
