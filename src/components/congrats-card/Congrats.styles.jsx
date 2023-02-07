import styled from "styled-components";

export const DialogWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-inline: 20px;
  flex-direction: column-reverse;
`;

export const MessageSection = styled.div`
  text-align: center;
`;

export const CongratsImage = styled.img`
  width: 100%;
  max-width: 300px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 30px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Message = styled.p`
  max-width: 250px;
  font-size: 18px;
  font-weight: 500;
`;

export const closeStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  borderRadius: " 50%",
  background: "#BFEAF5",
  cursor: "pointer",
  "&:hover": {
    background: "#EAFDFC",
  },
};
