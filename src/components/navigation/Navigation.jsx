import {
  Contacts,
  ExpandMore,
  Home,
  Info,
  Inventory,
  
} from "@mui/icons-material";
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { SidebarContext } from "../../App";
import {
  AccordionStyles,
  LinkSection,
  LinkWrap,
  List,
  ListWrap,
  MediaLink,
  MediaLinkSection,
  MediaSection,
  MyCourseLink,
  MyCourseSection,
  NavigationSection,
} from "./Navigation.styles";

const Navigation = ({ direction, visible , user }) => {
  const { setSidebarOpen } = useContext(SidebarContext);
  const [expanded, setExpanded] = useState(false);

  const closeSideBar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <NavigationSection direction={direction} visible={visible}>
      <NavLink to={"/"} onClick={closeSideBar}>
        <LinkSection>
          <Home />
          HOME
        </LinkSection>
      </NavLink>

      {direction === "column" ? (
        <Accordion
          expanded={expanded === "programs"}
          onChange={handleChange("programs")}
          sx={AccordionStyles}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <LinkSection>
              <BusinessCenterIcon />
              OUR PROGRAMS
            </LinkSection>
          </AccordionSummary>
          <AccordionDetails sx={{ width: "100%" }}>
            <ListWrap>
              <NavLink to={"/courses"} onClick={closeSideBar}>
                <List>COURSES</List>
              </NavLink>
              <NavLink to={"/school-ai-lab"} onClick={closeSideBar}>
                <List>SCHOOL: AI LAB</List>
              </NavLink>
              <NavLink to={"/workshop&camps"} onClick={closeSideBar}>
                <List>WORKSHOPS AND CAMPS</List>
              </NavLink>
              <NavLink to={"/atal-tinkering-school"} onClick={closeSideBar}>
                <List>ATAL TINKERING LAB</List>
              </NavLink>
            </ListWrap>
          </AccordionDetails>
        </Accordion>
      ) : (
        <LinkWrap>
          <MyCourseLink>
            <BusinessCenterIcon />
            OUR PROGRAMS
          </MyCourseLink>
          <MyCourseSection>
            <ListWrap>
              <NavLink to={"/courses"} onClick={closeSideBar}>
                <List>COURSES</List>
              </NavLink>
              <NavLink to={"/school-ai-lab"} onClick={closeSideBar}>
                <List>SCHOOL: AI LAB</List>
              </NavLink>
              <NavLink to={"/workshop&camps"} onClick={closeSideBar}>
                {" "}
                <List>WORKSHOPS AND CAMPS</List>
              </NavLink>
              <NavLink to={"/atal-tinkering-school"} onClick={closeSideBar}>
                {" "}
                <List>ATAL TINKERING LAB</List>
              </NavLink>
            </ListWrap>
          </MyCourseSection>
        </LinkWrap>
      )}

      {direction === "column" ? (
        <Accordion
          expanded={expanded === "media"}
          onChange={handleChange("media")}
          sx={AccordionStyles}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <MediaLinkSection>
              <Inventory />
              MEDIA
            </MediaLinkSection>
          </AccordionSummary>
          <AccordionDetails sx={{ width: "100%" }}>
            <ListWrap>
              <NavLink to={"/media/images"} onClick={closeSideBar}>
                <List>GALLERY</List>
              </NavLink>
              <NavLink to={"/media/videos"} onClick={closeSideBar}>
                <List>VIDEOS</List>
              </NavLink>
            </ListWrap>
          </AccordionDetails>
        </Accordion>
      ) : (
        <LinkWrap>
          <MediaLink>
            <Inventory />
            MEDIA
          </MediaLink>
          <MediaSection>
            <ListWrap>
              <NavLink to={"/media/images"} onClick={closeSideBar}>
                <List>GALLERY</List>
              </NavLink>
              <NavLink to={"/media/videos"} onClick={closeSideBar}>
                <List>VIDEOS</List>
              </NavLink>
            </ListWrap>
          </MediaSection>
        </LinkWrap>
      )}

      <NavLink to={"/about"} onClick={closeSideBar}>
        <LinkSection>
          <Info />
          ABOUT
        </LinkSection>
      </NavLink>

      <NavLink to={"/contactus"} onClick={closeSideBar}>
        <LinkSection>
          <Contacts />
          CONTACT US
        </LinkSection>
      </NavLink>

      <NavLink to={"/products"} onClick={closeSideBar}>
        <LinkSection>
          <StoreMallDirectoryIcon />
          STORE
        </LinkSection>
      </NavLink>
      {
        user?.role === "Admin" ?
      <NavLink to={"/admin"} onClick={closeSideBar}>
        <LinkSection>
          <DashboardIcon />
          DASHBOARD
        </LinkSection>
      </NavLink>
      :null
      }
    </NavigationSection>
  );
};

export default Navigation;
