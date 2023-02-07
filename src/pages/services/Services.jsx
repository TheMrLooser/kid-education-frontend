import React from "react";
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
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { serviceData } from "./serviceData";
import { Wrapper } from "./Services.styles";
import CTA from "../../components/cta/CTA";
import Pulse from "react-reveal/Pulse";

const Services = () => {
  const CTAHeading = "Interested or need more information ?";
  const CTACall = "Send us message";

  const changeDirection = (index) => {
    return index % 2 === 0 ? "-reverse" : null;
  };

  return (
    <Container bgColor="#f7f7f7">
      <Header />

      <Wrapper>
        <Pulse>
          <BannerSection>
            <Banner src="./assets/services-banner.jpg" />
          </BannerSection>
        </Pulse>
        {serviceData.map((data, index) => {
          return (
            <BriefSection direction={changeDirection(index)} key={index}>
              <InfoColumn>
                <SectionHeading>{data.heading}</SectionHeading>
                <SectionDesc>{data.desc}</SectionDesc>
              </InfoColumn>
              <ImageColumn>
                <SectionImage src={data.img} />
              </ImageColumn>
            </BriefSection>
          );
        })}

        <CTA CTAHeading={CTAHeading} CTACall={CTACall} to="/contactus" />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Services;
