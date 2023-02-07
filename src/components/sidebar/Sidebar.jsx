import { ExitToApp, Menu } from "@mui/icons-material";
import React, { useContext } from "react";
import { Authentication, SidebarContext } from "../../App";
import { iconStyles } from "../CommonStyles";
import Navigation from "../navigation/Navigation";
import { MenuSection, MenuWrap, SideLogout, Wrapper } from "./Sidebar.styles";

const Sidebar = () => {
  const { isLoading, isAuthenticated } = useContext(Authentication);
  const { setSidebarOpen } = useContext(SidebarContext);

  const handleSiderbar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const logout = () => {
    window.localStorage.setItem("token", "");
    window.location.reload();
  };

  return (
    <Wrapper>
      <MenuWrap>
        <MenuSection>
          <Menu sx={iconStyles} onClick={handleSiderbar} />
        </MenuSection>

        <Navigation direction="column" visible="visible" />
        {isAuthenticated || isLoading ? (
          <SideLogout onClick={logout}>
            Logout{" "}
            <span>
              {" "}
              <ExitToApp />
            </span>
          </SideLogout>
        ) : null}
      </MenuWrap>
    </Wrapper>
  );
};

export default Sidebar;
