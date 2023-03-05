import React from "react";
import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { faqData } from "./data";
import { Answer, Question, SectionHeadingFAQ, SubHeading, Wrapper } from "./Faq.styles";
import { SectionHeading } from "../CommonStyles";

const Faq = () => {
  return (
    <Wrapper>
      <SectionHeadingFAQ>FAQs</SectionHeadingFAQ>
      <SubHeading>Questions? We Are Here to Help</SubHeading>
      {faqData.map((item, index) => (
        <Accordion sx={{ backgroundColor: "#F0EEED" }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Question>{item.question}</Question>
          </AccordionSummary>
          <AccordionDetails>
            <Answer>{item.answers}</Answer>
          </AccordionDetails>
        </Accordion>
      ))}
    </Wrapper>
  );
};

export default Faq;
