import Slider from "react-slick";
import styled from "styled-components";
import { SectionDesc } from "../../components/CommonStyles";

export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 48px));
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-block: 20px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDesc = styled(SectionDesc)`
  text-align: center;
`;

export const ExpertiseSection = styled.div`
  padding: 7px;
  background-color: skyblue;
  border-radius: 20px;
  display: flex;
  gap: 10px;
  color: black;
  justify-content: space-around;
`;

export const Expertise = styled.div`
  text-align: center;
`;
export const First = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
export const Second = styled(First)``;
export const Colored = styled.h1`
  margin: 0;
`;
export const Desc = styled.h1`
  margin: 0;
`;

export const GroupSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 768px) {
    margin-inline: auto;
    flex-direction: column;
  }
`;

export const PackageGroup = styled.div`
  width: 100%;
  max-width: 460px;
`;

export const ServiceGroup = styled(PackageGroup)`
  max-width: 650px;
`;

export const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const ServiceGridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const Heading = styled.h1`
  text-align: center;
  font-size: 18px;
  color: darkgrey;
`;
export const CardWrap = styled.div`
  border: 1px solid black;
`;
export const Package = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 14px;
`;
export const Image = styled.img`
  width: 80%;
`;

export const ServiceImage = styled.img`
  width: 60px;
  height: 60px;
`;
export const ServiceDesc = styled.p`
  text-align: center;
  width: 250px;
  font-size: 14px;
`;

export const EnquireButton = styled.a`
  width: 100%;
  max-width: 200px;
  background-color: black;
  padding: 10px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: white;
  text-decoration: none;
  text-align: center;
  margin-inline: auto;
`;

export const MediaSection = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px; */
`;

export const MediaImages = styled.img`
  width: 100%;
  height: 200px;
`;

export const MediaVideos = styled.video`
  width: 100%;
  height: 200px;
`;

export const SectionSlider = styled(Slider)`
  button {
    z-index: 999;
  }

  button:hover {
    color: white;
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
    margin: 0 -10px;
  }
`;
