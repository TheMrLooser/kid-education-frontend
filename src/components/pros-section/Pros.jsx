import React from "react";
import { Container } from "../CommonStyles";
import {
  Heading,
  ProsDesc,
  ProsDetailSection,
  ProsImage,
  ProsImageSection,
  ProsSection,
  ProsTitle,
  ProsWrap,
  Wrapper,
} from "./Pros.styles";
import { pros } from "./prosData";

const Pros = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Ignite Your Love for Learning with STEAM AI LAB!</Heading>

        <ProsSection>
          {pros.map((data, index) => (
            <ProsWrap key={index}>
              <ProsImageSection>
                <ProsImage src={data.img} />
              </ProsImageSection>
              <ProsTitle>{data.title}</ProsTitle>
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
