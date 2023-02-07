import styled from "styled-components";

export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 48px));
  margin-inline: auto;
`;

export const TableWrap = styled.div`
  width: 100%;
  height: 140vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-top: 20px;
`;

export const TabPanelStyles = {
  paddingInline: 0,
};

export const TabStyles = {
  fontSize: "14px",
  fontFamily: "Poppins",
  fontWeight: 600,
};

export const ButtonSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const AddCourseButton = styled.button`
  min-width: 120px;
  min-height: 40px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border: none;
  background-color: #0014ff;
  border-radius: 7px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
`;

export const ActionGroup = styled.div`
  display: flex;
  gap: 20px;
`;

export const editStyles = {
  color: "#3EC70B",
  cursor: "pointer",
};

export const deleteStyles = {
  color: "#DC0000",
  cursor: "pointer",
};

export const videoLibraryStyles = {
  color: "blue",
  cursor: "pointer",
};

export const ProgressWrap = styled.div`
  width: 100%;
  height: 400px;
  display: grid;
  place-items: center;
`;
