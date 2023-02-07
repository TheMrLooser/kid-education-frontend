import React from "react";
import AnimatedText from "react-animated-text-content";
import {
  Banner,
  BannerSection,
  Container,
  SectionHeading,
} from "../../components/CommonStyles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {
  List,
  Title,
  WorkshopDetails,
  WorkshopImage,
  WorkshopList,
  WorkshopSection,
  WorkshopWrap,
  Wrapper,
} from "./Workshop.styles";
import { workshops } from "./workshopData";

const Workshop = () => {
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
            Workshops & Camps
          </AnimatedText>
          <Banner src="./assets/Camera Roll/WORKSHOPS AND CAMPS/WORKSHOPS _ CAMPS.jpg" />
        </BannerSection>
        <SectionHeading>
          Robotics Workshops & Coding Camps for Kids Ages 8-18
        </SectionHeading>

        <WorkshopSection>
          {workshops.map((data) => (
            <WorkshopWrap>
              <WorkshopImage src={data.img} />
              <WorkshopDetails>
                <Title>{data.title}</Title>
                <WorkshopList>
                  {data.desc.map((item) => (
                    <List>{item}</List>
                  ))}
                </WorkshopList>
              </WorkshopDetails>
            </WorkshopWrap>
          ))}
        </WorkshopSection>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Workshop;
