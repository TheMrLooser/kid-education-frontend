import styled from "styled-components";

export const NavigationSection = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "column" ? "column" : "row"};
  gap: 15px;

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    color: black;
    padding: 10px 5px;

    @media (max-width: 1060px) {
      display: ${(props) => (props.visible === "visible" ? "flex" : "none")};
    }
  }
  a:hover {
    color: blue;
  }
  a.active {
    font-weight: 700;
    color: black;
  }

  @media (max-width: 1060px) {
    a {
      color: black;
    }
  }
`;

export const LinkSection = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  margin-right: auto;
  font-weight: 600;
  font-size: 15px;
`;

export const LinkWrap = styled.div`
  display: flex;
  position: relative;
`;

export const ListSection = styled.div`
  background-color: white;
  top: 65px;
  position: fixed;
  z-index: 999;
  @media (max-width: 1060px) {
    display: none;
  }
  border-radius: 7px;
  box-shadow: 0px 1px 30px 0px rgba(0, 0, 0, 0.1);
`;

export const MyCourseSection = styled(ListSection)`
  display: none;
  transition: all 0.25s ease-in-out;
  &:hover {
    display: block;
  }
`;

export const MyCourseLink = styled(LinkSection)`
  &:hover ~ ${MyCourseSection} {
    display: block;
  }
  @media (max-width: 1060px) {
    display: none;
  }
`;

export const MediaSection = styled(ListSection)`
  display: none;
  &:hover {
    display: block;
  }
`;
export const MediaLink = styled(LinkSection)`
  &:hover ~ ${MediaSection} {
    display: block;
  }
  @media (max-width: 1060px) {
    display: none;
  }
`;

export const ListWrap = styled.ul`
  margin: 0;
  padding: 5px 30px;
  list-style: none;
`;
export const List = styled.li`
  width: 100%;
  height: 100%;
  font-size: 16px;
  &:hover {
    color: blue;
  }
`;

export const AccordionStyles = {
  boxShadow: "none",
  backgroundColor: "transparent !important",
  border: "none",
  "&:before": {
    backgroundColor: "transparent !important",
  },
};
