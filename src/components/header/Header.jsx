import {
  AccountCircle,
  ExitToApp,
  Menu,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetSingleUser } from "../../API/api";
import { Authentication, SidebarContext } from "../../App";
import { Container, GlobalStyles, iconStyles } from "../CommonStyles";
import Navigation from "../navigation/Navigation";
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

    CheckLogin();
  }, [setAuthentication, setUser, win]);

  const logout = () => {
    win.setItem("token", "");
    window.location.reload();
  };


  return (
    <Container>
      <GlobalStyles />
      <Wrapper>
        {user !== "Admin" ? (
          <>
            <LogoSection>
              <MenuSection>
                <Menu sx={iconStyles} onClick={handleSidebar} />
              </MenuSection>
              <Link to="/">
                <Logo src="/assets/logo.png" alt="logo" />
              </Link>
            </LogoSection>

            <Navigation direction="row" user={User} />
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
