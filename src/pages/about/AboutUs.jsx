import { CheckBoxOutlined } from "@mui/icons-material";
import React from "react";
import {
  Banner,
  BannerSection,
  BriefSection,
  Cards,
  CourseImage,
  GlobalStyles,
  ImageColumn,
  InfoColumn,
  SectionDesc,
  SectionHeading,
  SectionImage,
  StyledSlider,
} from "../../components/CommonStyles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {
  Benefit,
  BenefitDesc,
  BenefitLogo,
  BenefitSection,
  Box,
  Designation,
  Heading,
  Name,
  RegisterButton,
  RegisterNowSection,
  TeamCard,
  TeamDesc,
  TeamDetails,
  TeamHeading,
  TeamSection,
  Wrapper,
  OverViewSection,
  WrapSectionImage,
  CourseImageSection,
  ListWrap,
  List,
} from "./AboutUs.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { team } from "./teamData";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import RubberBand from "react-reveal/RubberBand";
import { Link } from "react-router-dom";
import AnimatedText from "react-animated-text-content";
import { visionSliderSettings } from "./sliderSettings";

const AboutUs = () => {
  return (
    <Box>
      <GlobalStyles />
      <Header />

      <Wrapper>
        <Pulse>
          <BannerSection>
            <AnimatedText
              type="chars" // animate words or chars
              animationType="float"
              interval={0.08}
              duration={0.8}
              tag="h1"
            >
              About
            </AnimatedText>
            <Banner src="./assets/Camera Roll/MAKER LAB/MAKER LAB.jpg" />
          </BannerSection>
        </Pulse>
        <OverViewSection>
          <SectionHeading>Our Methodology</SectionHeading>
          <SectionDesc>
            <ListWrap>
              <List>Understand school culture and values.</List>
              <List>Understand context and environment.</List>
              <List>Identify 21st century competencies to be developed.</List>
              <List>
                Design activities to achieve learning outcomes for different
                types of students.
              </List>
              <List>
                Use identified learning methodology to help students achieve
                learning objectives.
              </List>
              <List>Continuously monitor the progress of students.</List>
            </ListWrap>
          </SectionDesc>
        </OverViewSection>
        <InfoColumn>
          <SectionHeading>Our Approach</SectionHeading>
          <SectionDesc>
            With more than 7+ years of experience as a STREAM Education
            (Science, Technology, Robotics, Engineering, Arts, Mathematics)
            solution provider, we have honed our methods to develop students
            into future-ready leaders
          </SectionDesc>
        </InfoColumn>
        <Fade left>
          <BriefSection>
            <InfoColumn>
              <SectionHeading>Our Mission</SectionHeading>
              <SectionDesc>
                Our mission is to transform students into creators and
                innovators. One of our long-term goals is to help kids learn to
                think creatively, work collaboratively and reason systematically
                – from the youngest age.
              </SectionDesc>
            </InfoColumn>
            <ImageColumn>
              <SectionImage src="./assets/mission.jpg" />
            </ImageColumn>
          </BriefSection>
        </Fade>
        <Fade right>
          <BriefSection>
            <ImageColumn>
              <StyledSlider {...visionSliderSettings}>
                <WrapSectionImage>
                  <SectionImage src="/assets/Camera Roll/MEDIA/WEB 64.jpg" />
                </WrapSectionImage>
                <WrapSectionImage>
                  <SectionImage src="/assets/Camera Roll/MEDIA/WEB 66.jpg" />
                </WrapSectionImage>
                <WrapSectionImage>
                  <SectionImage src="/assets/Camera Roll/MEDIA/WEB 68.jpg" />
                </WrapSectionImage>
              </StyledSlider>
            </ImageColumn>
            <InfoColumn>
              <SectionHeading>Our Vision</SectionHeading>
              <SectionDesc>
                Our vision is to create a technology ecosystem that provides
                people with access to technology, resources, trainings and
                encourages them to solve real-life challenges through innovation
              </SectionDesc>
            </InfoColumn>
          </BriefSection>
        </Fade>
        {/* <TeamSection>
          <TeamHeading>Our Leading, Strong And Creative Team</TeamHeading>

          <TeamDetails>
            {team.map((member, index) => {
              return (
                <TeamCard key={index}>
                  <CourseImageSection>
                    <CourseImage src={member.img} />
                  </CourseImageSection>
                  <TeamDesc>
                    <Name>{member.name}</Name>
                    <Designation>{member.designation}</Designation>
                  </TeamDesc>
                </TeamCard>
              );
            })}
          </TeamDetails>
        </TeamSection> */}
        <RegisterNowSection>
          <Heading>Register for Free!</Heading>
          <BenefitSection>
            <Benefit>
              <BenefitLogo>
                <CheckBoxOutlined />
              </BenefitLogo>
              <BenefitDesc>No credit card required</BenefitDesc>
            </Benefit>
            <Benefit>
              <BenefitLogo>
                <CheckBoxOutlined />
              </BenefitLogo>
              <BenefitDesc>Cancel anytime</BenefitDesc>
            </Benefit>
          </BenefitSection>
          <RubberBand>
            <Link to="/signup">
              <RegisterButton>Register Now</RegisterButton>
            </Link>
          </RubberBand>
        </RegisterNowSection>
      </Wrapper>
      <Footer />
    </Box>
  );
};

export default AboutUs;
