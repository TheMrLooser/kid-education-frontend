import React, { useContext, useEffect } from "react";
import { Container, GlobalStyles, iconStyles } from "../CommonStyles";
import {
  AccountCircle,
  ExitToApp,
  Menu,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  AccountStyles,
  AdminHeading,
  AdminHeadingSection,
  AuthWrap,
  LoginButton,
  Logo,
  LogoSection,
  Logout,
  MenuSection,
  RegisterButton,
  UserAccount,
  UserSection,
  Wrapper,
} from "./Header.styles";
import Navigation from "../navigation/Navigation";
import { Link, useNavigate } from "react-router-dom";
import { Authentication, SidebarContext } from "../../App";
import { GetSingleUser } from "../../API/api";
import { Badge } from "@mui/material";

const Header = ({ user }) => {
  const { setSidebarOpen } = useContext(SidebarContext);
  const { isLoading, isAuthenticated, setAuthentication, setUser, User } =
    useContext(Authentication);
  const win = window.localStorage;
  const handleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const token = win.getItem("token");
    const CheckLogin = async () => {
      if (token) {
        setAuthentication(true);

        const res = await GetSingleUser(token);
        setUser(res.data.user);
      }
    };

    setTimeout(CheckLogin(), 50000);
  }, []);

  const logout = () => {
    win.setItem("token", "");
    window.location.reload();
  };

  return (
    <Container>
      <GlobalStyles />
      <Wrapper>
        {user !== "admin" ? (
          <>
            <LogoSection>
              <MenuSection>
                <Menu sx={iconStyles} onClick={handleSidebar} />
              </MenuSection>
              <Link to="/">
                <Logo src="./assets/logo1.png" alt="logo" />
              </Link>
            </LogoSection>

            <Navigation direction="row" />
          </>
        ) : (
          <AdminHeadingSection>
            <AdminHeading>Dashboard</AdminHeading>
          </AdminHeadingSection>
        )}
        <UserSection>
          {isAuthenticated || isLoading ? (
            <AuthWrap>
              <Link to="/cart">
                <Badge badgeContent={User?.cart.length} color="primary">
                  <ShoppingCartOutlined sx={iconStyles} />
                </Badge>
              </Link>
              <UserAccount>
                <AccountCircle sx={AccountStyles} />
              </UserAccount>
              <Logout onClick={logout}>
                Logout{" "}
                <span>
                  {" "}
                  <ExitToApp />
                </span>
              </Logout>
            </AuthWrap>
          ) : (
            <>
              <Link to="/login">
                <LoginButton>Login</LoginButton>
              </Link>
              <Link to="/signup">
                <RegisterButton>Register</RegisterButton>
              </Link>
            </>
          )}
        </UserSection>
      </Wrapper>
    </Container>
  );
};

export default Header;
