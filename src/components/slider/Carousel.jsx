import React from "react";
import { Container, StyledSlider } from "../CommonStyles";
import { ImgWrap, SlideVideo, Wrapper } from "./Carousel.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pulse from "react-reveal/Pulse";
import { carouselSettings } from "./carouselSettings";

const Carousel = ({ video }) => {
  return (
    <Pulse>
      <Container>
        <Wrapper>
          <StyledSlider {...carouselSettings}>
            <ImgWrap>
              <SlideVideo
                autoPlay
                loop
                muted
                onContextMenu={(e) => e.preventDefault()}
                src={video}
              />
            </ImgWrap>
          </StyledSlider>
        </Wrapper>
      </Container>
    </Pulse>
  );
};

export default Carousel;
