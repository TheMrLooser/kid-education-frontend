import Slider from "react-slick";
import styled from "styled-components";
import { SectionHeading } from "../CommonStyles";

export const Heading = styled.h1`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const Wrapper = styled.div`
  width: 100%;
  z-index: 0;
`;
export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  @media only screen and (max-width:800px){
    align-items: center;

  }
`;

export const StyledSectionHeading = styled(SectionHeading)`
  font-size: 25px;
`;

export const SliderSection = styled.div`
  height: 300px;
  position: relative;
  z-index: 0;
`;

export const CourseSlider = styled(Slider)`
  button {
    z-index: 999;
  }
  .slick-slide,
  .slick-track {
    overflow: visible;
  }

  .slick-prev {
    left: 10px !important;
    z-index: 999;
  }
  .slick-next {
    right: 10px !important;
    z-index: 1;
  }

  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: white;
    background: black;
  }

  .slick-slide > div {
    margin: 0 10px;
   
  }
  .slick-list {
    margin: 0 -80px;
  }
`;

export const CardSection = styled.div`
  width: 100%;
  max-width: 250px;
  min-width: 150px;
  height: 250px;
  cursor: pointer;
  border-radius: 8px;
  transition: box-shadow 0.5s;
  margin: 20px 0px;
  padding: 5px;
  box-shadow: 5px 5px 18px gray;
  &:hover{
    box-shadow: none;
  }

  @media (max-width: 600px) {
    max-width: 150px;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;
