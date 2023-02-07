import {
  Contacts,
  ExpandMore,
  Home,
  HomeRepairService,
  Info,
  Inventory,
} from "@mui/icons-material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SidebarContext } from "../../App";
import { Line } from "../../pages/cart/Cart.styles";
import {
  AboutSection,
  AboutWrap,
  AccordionStyles,
  LinkSection,
  LinkWrap,
  List,
  ListSection,
  ListWrap,
  MediaLink,
  MediaSection,
  MyCourseLink,
  MyCourseSection,
  NavigationSection,
} from "./Navigation.styles";

const Navigation = ({ direction, visible }) => {
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
          Home
        </LinkSection>
      </NavLink>

      {direction === "column" ? (
        <Accordion
          expanded={expanded === "programs"}
          onChange={handleChange("programs")}
          sx={AccordionStyles}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <LinkSection>
              <BusinessCenterIcon />
              Our Programs
            </LinkSection>
          </AccordionSummary>
          <AccordionDetails sx={{ width: "100%" }}>
            <ListWrap>
              <NavLink to={"/courses"} onClick={closeSideBar}>
                <List>Courses</List>
              </NavLink>
              <NavLink to={"/school-ai-lab"}>
                <List>School: AI Lab</List>
              </NavLink>
              <NavLink to={"/workshop&camps"}>
                <List>Workshops & Camps</List>
              </NavLink>
              <NavLink to={"/atal-tinkering-school"}>
                <List>Atal Tinkering Lab</List>
              </NavLink>
            </ListWrap>
          </AccordionDetails>
        </Accordion>
      ) : (
        <LinkWrap>
          <MyCourseLink>
            <BusinessCenterIcon />
            Our Programs
          </MyCourseLink>
          <MyCourseSection>
            <ListWrap>
              <NavLink to={"/courses"} onClick={closeSideBar}>
                <List>Courses</List>
              </NavLink>
              <NavLink to={"/school-ai-lab"} onClick={closeSideBar}>
                <List>School: AI Lab</List>
              </NavLink>
              <NavLink to={"/workshop&camps"} onClick={closeSideBar}>
                {" "}
                <List>Workshops & Camps</List>
              </NavLink>
              <NavLink to={"/atal-tinkering-school"} onClick={closeSideBar}>
                {" "}
                <List>Atal Tinkering School</List>
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
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <LinkSection>
              <Inventory />
              Media
            </LinkSection>
          </AccordionSummary>
          <AccordionDetails sx={{ width: "100%" }}>
            <ListWrap>
              <NavLink to={"/media/images"} onClick={closeSideBar}>
                <List>Gallery</List>
              </NavLink>
              <NavLink to={"/media/videos"} onClick={closeSideBar}>
                <List>Videos</List>
              </NavLink>
            </ListWrap>
          </AccordionDetails>
        </Accordion>
      ) : (
        <LinkWrap>
          <MediaLink>
            <Inventory />
            Media
          </MediaLink>
          <MediaSection>
            <ListWrap>
              <NavLink to={"/media/images"} onClick={closeSideBar}>
                <List>Gallery</List>
              </NavLink>
              <NavLink to={"/media/videos"} onClick={closeSideBar}>
                <List>Videos</List>
              </NavLink>
            </ListWrap>
          </MediaSection>
        </LinkWrap>
      )}

      <NavLink to={"/about"} onClick={closeSideBar}>
        <LinkSection>
          <Info />
          About
        </LinkSection>
      </NavLink>

      <NavLink to={"/contactus"} onClick={closeSideBar}>
        <LinkSection>
          <Contacts />
          Contact us
        </LinkSection>
      </NavLink>

      <NavLink to={"/store"} onClick={closeSideBar}>
        <LinkSection>
          <Contacts />
          Store
        </LinkSection>
      </NavLink>
    </NavigationSection>
  );
};

export default Navigation;
