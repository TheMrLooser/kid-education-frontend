import React from "react";
import {
  Banner,
  BannerSection,
  BriefSection,
  Container,
  GlobalStyles,
  ImageColumn,
  InfoColumn,
  SectionDesc,
  SectionHeading,
  SectionImage,
} from "../../components/CommonStyles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Wrapper } from "./FabLab.styles";
import { fabLabData } from "./fabLabData";
import { Fade } from "react-reveal";
import AnimatedText from "react-animated-text-content";

const FabLab = () => {
  const changeDirection = (index) => {
    return index % 2 !== 0 ? "-reverse" : null;
  };

  const FadeDirection = (index) => {
    return index % 2 !== 0 ? true : false;
  };

  return (
    <Container>
      <Header />
      <GlobalStyles />
      <Wrapper>
        <BannerSection>
          <AnimatedText
            type="chars"
            animationType="float"
            interval={0.1}
            duration={1.7}
            tag="h1"
          >
            Fab Lab
          </AnimatedText>
          <Banner src="./assets/Camera Roll/FABLAB/FABLAB.png" />
        </BannerSection>
        <center>
          <SectionHeading>Program for Ages 14+</SectionHeading>
        </center>
        {fabLabData.map((data, index) => {
          return (
            <BriefSection direction={changeDirection(index)} key={index}>
              <InfoColumn>
                <Fade right={FadeDirection(index)} left={!FadeDirection(index)}>
                  <SectionHeading>{data.heading}</SectionHeading>
                  <SectionDesc>{data.desc}</SectionDesc>
                </Fade>
              </InfoColumn>
              <ImageColumn>
                <Fade right={!FadeDirection(index)} left={FadeDirection(index)}>
                  <SectionImage src={data.img} />
                </Fade>
              </ImageColumn>
            </BriefSection>
          );
        })}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default FabLab;
