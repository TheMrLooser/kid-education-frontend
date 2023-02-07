import React from "react";
import { Link } from "react-router-dom";
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
import { coursesData } from "./courseData";
import { Wrapper } from "./Courses.styles";
import Fade from "react-reveal/Fade";
import AnimatedText from "react-animated-text-content";

const Courses = () => {
  const changeDirection = (index) => {
    return index % 2 !== 0 ? "-reverse" : null;
  };

  const FadeDirection = (index) => {
    return index % 2 !== 0 ? true : false;
  };

  return (
    <Container>
      <GlobalStyles />
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
            Courses
          </AnimatedText>
          <Banner src="./assets/Camera Roll/COURSE/COURSE.jpeg" />
        </BannerSection>
        <center>
          <SectionHeading>WHAT WE OFFER</SectionHeading>
        </center>
        {coursesData.map((item, index) => (
          <BriefSection direction={changeDirection(index)} key={index}>
            <InfoColumn>
              <Fade right={FadeDirection(index)} left={!FadeDirection(index)}>
                <Link to={`/courses/${item.title}`}>
                  <SectionHeading>{item.title}</SectionHeading>
                </Link>
                <SectionDesc>{item.content}</SectionDesc>
              </Fade>
            </InfoColumn>

            <ImageColumn>
              <Fade right={!FadeDirection(index)} left={FadeDirection(index)}>
                <SectionImage src={item.src} />
              </Fade>
            </ImageColumn>
          </BriefSection>
        ))}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Courses;
