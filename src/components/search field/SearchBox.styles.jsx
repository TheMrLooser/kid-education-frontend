import styled from "styled-components";

export const SearchSection = styled.div`
  width: 100%;
  max-width: ${(props) => (props.search ? "100%" : "350px")};
  display: flex;
`;
export const SearchField = styled.input`
  width: 100%;
  padding-inline: 10px;
  font-size: 14px;
  font-weight: 600;
  outline: none;
  border: 1px solid darkgray;
  border-radius: 0;
`;

export const SearchButton = styled.button`
  width: max-content;
  padding-inline: 10px;
  min-height: 40px;
  font-size: 14px;
  font-weight: bold;
  background-color: #D24916;
  color: white;
  cursor: pointer;
  border: none;
  display: grid;
  place-items: center;
  font-family: "Poppins", sans-serif;
`;
