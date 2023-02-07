import styled from "styled-components";
import { Logout } from "../header/Header.styles";
import { NavigationSection } from "../navigation/Navigation.styles";

export const Wrapper = styled.div`
  position: fixed;
  width: 220px;
  height: 100%;
  background-color: whitesmoke;
  z-index: 99;
  display: none;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (max-width: 1060px) {
    display: block;
  }
`;

export const MenuWrap = styled.div`
  max-width: 170px;
  margin-inline: auto;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

export const StyledNavigation = styled(NavigationSection)`
  flex-direction: column;

  a {
    @media (max-width: 768px) {
      display: flex;
    }
  }
`;

export const MenuSection = styled.div`
  && {
    color: #096ee0;
  }
`;

export const SideLogout = styled(Logout)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 0;
  top: 30px;
  background-color: whitesmoke;
  color: red;
  border-radius: 7px;
  padding: 30px 0;
`;
