import React from "react";
import {
  Container,
  SectionDesc,
  SectionHeading,
  SectionImage,
} from "../CommonStyles";
import {
  DetailSection,
  DetailsInfo,
  DetailsSection,
  LeftSection,
  List,
  OffersList,
  OfferTitle,
  RightSection,
  Wrapper,
} from "./Details.styles";

const Details = () => {
  return (
    <Container>
      <Wrapper>
        <DetailSection>
          <LeftSection>
            <SectionImage src="./assets/detail.jpg" alt="detail-image" />
          </LeftSection>
          <RightSection>
            <DetailsSection>
              <DetailsInfo>
                <SectionHeading>What We Excel In</SectionHeading>
                <SectionDesc>
                  In order to make children and students lifelong learners, we
                  aim to help schools, educators, and parents achieve effective
                  STREAM education
                </SectionDesc>
                <OfferTitle>We Offer:</OfferTitle>
                <OffersList>
                  <List>
                    <strong>Programmes </strong>(Online, Offline, Short-term &
                    Long-term)
                  </List>
                  <List>
                    <strong>Teacher Support</strong> (Professional Development,
                    Resources, Tech Support)
                  </List>
                  <List>
                    <strong>Learning Tools and Resources</strong> (Kits,
                    Replacement Parts, Platforms etc.)
                  </List>
                  <List>
                    <strong>Event Planning </strong>(Competitions, Workshops,
                    Recreational Activities etc.)
                  </List>
                </OffersList>
              </DetailsInfo>
            </DetailsSection>
          </RightSection>
        </DetailSection>
      </Wrapper>
    </Container>
  );
};

export default Details;
