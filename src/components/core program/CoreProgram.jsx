import React from "react";
import { Link } from "react-router-dom";
import { Container, SectionHeading } from "../CommonStyles";
import {
  AgeDescription,
  AgeTitle,
  CardSection,
  LearnMore,
  ProgramCard,
  ProgramDetails,
  ProgramImage,
  Title,
  Wrapper,
} from "./CoreProgram.styles";
import { coreProgram } from "./programData";

const CoreProgram = () => {
  return (
    <Container>
      <Wrapper>
        <SectionHeading>Core Program</SectionHeading>
        <CardSection>
          {coreProgram.map((data, index) => (
            <ProgramCard key={index}>
              <ProgramImage src={data.img} />
              <ProgramDetails>
                <Title>{data.title}</Title>
                <AgeTitle>Age</AgeTitle>
                <AgeDescription>{data.age}</AgeDescription>
                <Link to={data.to}>
                  <LearnMore>LEARN MORE</LearnMore>
                </Link>
              </ProgramDetails>
            </ProgramCard>
          ))}
        </CardSection>
      </Wrapper>
    </Container>
  );
};

export default CoreProgram;
