import styled from "styled-components";
export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 40px));
  min-height: 85px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AdminHeadingSection = styled.div``;

export const AdminHeading = styled.h1`
  font-size: 30px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const MenuSection = styled.div`
  display: none;

  @media (max-width: 1060px) {
    display: flex;
  }
`;

export const LogoSection = styled.div`
  min-height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 150px;
  height: 60px;
  object-fit: contain;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`;

export const RegisterButton = styled.button`
  width: 130px;
  min-height: 40px;
  font-size: 16px;
  font-weight: 600;
  color: #D24916;
  cursor: pointer;
  border: 2px solid #D24916;
  background: transparent;
  border-radius: 25px;
  outline: none;
  display: grid;
  place-items: center;
  font-family: "Poppins", sans-serif;
  transition: background-color 0.5s , color 0.5s;
  &:hover{
    background-color:#D24916;
    color: white;
  }
`;

export const LoginButton = styled(RegisterButton)`
  width: min-content;
  background: transparent;
  border: none;
  border-radius: 0;
  color: black;
  &:hover{
    color:#D24916;
    background-color: white;
  }
`;

export const AuthWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Logout = styled.button`
  display: none;
  width: "max-content";
  border: none;
  padding: 5px 10px;
  background-color: #009eff;
  color: white;
  border-radius: 7px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  right: 10px;
  bottom: -22px;
  z-index: 9999;
  gap: 5px;

  &:hover {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const UserAccount = styled.div`
  width: 60px;
  height: 40px;

  &:hover ~ ${Logout} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1060px) {
    &:hover ~ ${Logout} {
      display: none;
    }
  }
`;

export const AccountStyles = {
  width: "100%",
  height: "100%",
  cursor: "pointer",
  color: "#3171B2",
};
