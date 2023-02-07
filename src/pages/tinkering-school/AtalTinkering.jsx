import React from "react";
import AnimatedText from "react-animated-text-content";
import {
  Banner,
  BannerSection,
  Container,
  GlobalStyles,
  SectionDesc,
  SectionHeading,
} from "../../components/CommonStyles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {
  CardWrap,
  Colored,
  Desc,
  EnquireButton,
  Expertise,
  ExpertiseSection,
  First,
  GridSection,
  GroupSection,
  Heading,
  Image,
  ImageSlider,
  MediaImages,
  MediaSection,
  MediaVideos,
  Package,
  PackageGroup,
  Second,
  Section,
  SectionSlider,
  ServiceDesc,
  ServiceGridSection,
  ServiceGroup,
  ServiceImage,
  Title,
  Wrapper,
} from "./AtalTinkering.styles";
import { packages, services } from "./data";
import { atalImages } from "./images";
import {
  ImageSliderSettings,
  settings,
  VideoSliderSettings,
} from "./sliderSettings";
import { atalVideos } from "./videos";

const AtalTinkering = () => {
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
            Atal Tinkering School
          </AnimatedText>
          <Banner src="./assets/Camera Roll/ATAL TINKERING LAB/ATAL TINKERING LAB.png" />
        </BannerSection>
        <Section>
          <SectionHeading>ATAL TINKERING SCHOOL</SectionHeading>
          <SectionDesc>
            Atal Tinkering Lab is a flagship programme of NITI Aayog to promote
            a culture of innovation and entrepreneurship. Its objective is to
            serve as a platform for promotion of world class Innovation Hubs,
            Grand Challenges, Start-up businesses and other self-employment
            activities, particularly in technology driven areas
          </SectionDesc>
          <SectionDesc>
            KlassWAY provides a one-stop solution for setting up an Atal
            Tinkering Lab. We provide support for ATL Lab right from applying
            for an ATL to after-set-up training and lifetime online support.{" "}
          </SectionDesc>
        </Section>
        <ExpertiseSection>
          <Expertise>
            <First>
              <Colored>100+</Colored>
              <Desc>Schools</Desc>
            </First>
          </Expertise>
          <Expertise>
            <Second>
              <Colored>15,000+</Colored>
              <Desc>Users</Desc>
            </Second>
          </Expertise>
        </ExpertiseSection>
        <GroupSection>
          <PackageGroup>
            <Heading>ATL Packages</Heading>
            <GridSection>
              {packages.map((data) => (
                <CardWrap>
                  <Package>
                    <Title>{data.title}</Title>
                    <Image src={data.img} />
                  </Package>
                </CardWrap>
              ))}
            </GridSection>
          </PackageGroup>
          <ServiceGroup>
            <Heading>Support & Services</Heading>
            <ServiceGridSection>
              {services.map((data) => (
                <CardWrap>
                  <Package>
                    <Title>{data.title}</Title>
                    <ServiceImage src={data.img} />
                    <ServiceDesc>{data.desc}</ServiceDesc>
                  </Package>
                </CardWrap>
              ))}
            </ServiceGridSection>
          </ServiceGroup>
        </GroupSection>
        <Section>
          <SectionHeading>
            Interested in Establishment of Atal Tinkering Lab at your School?
          </SectionHeading>
          <SectionDesc>
            Click on Enqire Now and fill the form to know more about ATL Labs.
          </SectionDesc>
          <EnquireButton>Enquire Now!</EnquireButton>
        </Section>
        <Section>
          <SectionHeading>
            Schedule a Mentors and Expert Session for ATL (Atal Tinkering Lab)
          </SectionHeading>
          <SectionDesc>
            Fill the form to schedule a mentor session for ATL. Enquire Now!
          </SectionDesc>
          <EnquireButton>Enquire Now!</EnquireButton>
        </Section>
        <Section>
          <SectionHeading>GALLERY: ATAL TINKERING LAB</SectionHeading>
          <SectionSlider {...ImageSliderSettings}>
            {atalImages.map((img, index) => (
              <MediaImages src={img.src} alt={index} key={index} />
            ))}
          </SectionSlider>
        </Section>
        <Section>
          <SectionHeading>VIDEOS: ATAL TINKERING LAB</SectionHeading>
          <SectionSlider {...VideoSliderSettings}>
            {atalVideos.map((videos, index) => (
              <MediaVideos controls key={index}>
                <source src={videos.src} />
              </MediaVideos>
            ))}
          </SectionSlider>
        </Section>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default AtalTinkering;
