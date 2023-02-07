import styled from "styled-components";

export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 48px));
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-block: 20px;
`;

export const FilterPart = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FilterSection = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ResultSection = styled.div`
  min-height: 300px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  padding-block: 10px;

  a {
    color: black;
    text-decoration: none;
  }
`;

export const FilterButton = styled.button`
  width: 100%;
  max-width: 100px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: 2px solid #4e5ced;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 420px) {
    max-width: 80px;
    height: 35px;
    font-size: 14px;
  }
`;

export const filterStyles = {
  fontSize: "18px",
  color: "#4e5ced",
  cursor: "pointer",
};

export const Spinner = styled.div`
  display: grid;
  place-items: center;
`;
