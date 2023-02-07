import React from "react";
import { Container } from "../CommonStyles";
import {
  Desc,
  Heading,
  ProsDesc,
  ProsDetailSection,
  ProsImage,
  ProsImageSection,
  ProsSection,
  ProsTitle,
  ProsWrap,
  SubHeading,
  Wrapper,
} from "./Pros.styles";
import { pros } from "./prosData";

const Pros = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Ignite Your Love for Learning with STREAM LAB!</Heading>
        <SubHeading>
          Coding is a great way to future-proof your child.{" "}
        </SubHeading>
        <Desc>
          We make coding learning fun and easy by teaching kids the
          Computational Thinking skills they need to succeed in the future
          economy. For children ages 7 and up, discover the best learning
          experience.
        </Desc>

        <ProsSection>
          {pros.map((data) => (
            <ProsWrap>
              <ProsImageSection>
                <ProsImage src={data.img} />
              </ProsImageSection>
              <ProsDetailSection>
                <ProsTitle>{data.title}</ProsTitle>
                <ProsDesc>{data.desc}</ProsDesc>
              </ProsDetailSection>
            </ProsWrap>
          ))}
        </ProsSection>
      </Wrapper>
    </Container>
  );
};

export default Pros;
