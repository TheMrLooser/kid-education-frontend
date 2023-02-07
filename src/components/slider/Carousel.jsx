import React from "react";
import { Container, StyledSlider } from "../CommonStyles";
import { ImgWrap, SlideVideo, Wrapper } from "./Carousel.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pulse from "react-reveal/Pulse";
import { carouselSettings } from "./carouselSettings";
import { atalVideos } from "../../pages/tinkering-school/videos";

const Carousel = () => {
  return (
    <Pulse>
      <Container>
        <Wrapper>
          <StyledSlider {...carouselSettings}>
            {atalVideos.map((video) => (
              <ImgWrap>
                <SlideVideo autoPlay muted src={video.src} />
              </ImgWrap>
            ))}
          </StyledSlider>
        </Wrapper>
      </Container>
    </Pulse>
  );
};

export default Carousel;
