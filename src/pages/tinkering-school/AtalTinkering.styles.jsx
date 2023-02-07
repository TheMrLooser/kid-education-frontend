import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 48px));
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-block: 50px;
`;

export const Section = styled.div``;
export const ExpertiseSection = styled.div`
  background-color: #bccef8;
  border-radius: 20px;
  display: flex;
  color: darkblue;
  justify-content: space-around;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const Expertise = styled.div`
  text-align: center;
`;
export const First = styled.div``;
export const Second = styled(First)``;
export const Colored = styled.h1``;
export const Desc = styled.h1``;

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
  max-width: 400px;
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
  width: 100%;
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

export const EnquireButton = styled.button`
  width: 100%;
  max-width: 200px;
  background-color: darkblue;
  padding: 10px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: white;

  @media (max-width: 420px) {
    margin-inline: auto;
  }
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
