import React from "react";
import AnimatedText from "react-animated-text-content";
import { Fade } from "react-reveal";
import {
  Banner,
  BannerSection,
  BriefSection,
  Container,
  ImageColumn,
  InfoColumn,
  SectionDesc,
  SectionHeading,
  SectionImage,
} from "../../components/CommonStyles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Wrapper } from "./School.styles";
import { schoolData } from "./schoolData";
const School = () => {
  const changeDirection = (index) => {
    return index % 2 !== 0 ? "-reverse" : null;
  };

  const FadeDirection = (index) => {
    return index % 2 !== 0 ? true : false;
  };

  return (
    <Container>
      <Header />

      <Wrapper>
        <BannerSection>
          <AnimatedText
            type="chars" // animate words or chars
            animationType="float"
            interval={0.1}
            duration={1.7}
            tag="h1"
          >
            School AI Lab:
          </AnimatedText>
          <Banner src="./assets/Camera Roll/SCHOOL - AI LAB/AI LAB.jpg" />
        </BannerSection>
        {schoolData.map((data, index) => {
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

export default School;
