import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;
export const SectionHeadingFAQ = styled.div`
    font-size: 28px;
  font-weight: bold;
  line-height: 1.3;
  margin: 0 0 15px;
  text-align: center;
  color:black;


  @media (max-width: 768px) {
    font-size: 26px;
  }
  @media (max-width: 420px) {
    font-size: 24px;
  }
`;

export const SubHeading = styled.h1`
  text-align: center;
  font: normal normal 500 18px "Poppins", sans-serif;
`;

export const Question = styled.h1`
  font: normal normal 500 16px "Poppins", sans-serif;
`;

export const Answer = styled.h1`
  margin: 0;
  font: normal normal 400 15px "Poppins", sans-serif;
`;
