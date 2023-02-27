import { EmailOutlined, Facebook, Instagram, Phone } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { GlobalStyles } from "../CommonStyles";
import {
  Box,
  CopyRightHeading,
  CopyRightSection,
  EmailId,
  EmailLogo,
  EmailSection,
  FollowHeading,
  FollowSection,
  FooterWrap,
  GetInTouch,
  GetInTouchHeading,
  iconStyles,
  MoreInfo,
  MoreInfoHeading,
  PhoneLogo,
  PhoneNumberOne,
  PhoneNumberSection,
  PhoneSection,
  Redirect,
  SocialMedias,
  Wrapper,
} from "./Footer.styles";

const Footer = () => {
  return (
    <Box bgColor="lightgrey">
      <GlobalStyles />
      <Wrapper>
        <FooterWrap>
          <MoreInfo>
            <MoreInfoHeading>More Information</MoreInfoHeading>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/products">All Products</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </MoreInfo>
          <FollowSection>
            <FollowHeading>Social Media</FollowHeading>
            <SocialMedias>
              <Redirect href="https://www.facebook.com/people/Klassway/100083345738902/">
                <Facebook sx={iconStyles} />
              </Redirect>
              <Redirect href="https://instagram.com/team_klassway?igshid=YmMyMTA2M2Y=">
                <Instagram sx={iconStyles} />
              </Redirect>
            </SocialMedias>
          </FollowSection>
          <GetInTouch>
            <GetInTouchHeading>
              For general enquiries, please contact us using the below
            </GetInTouchHeading>
            <PhoneSection>
              <PhoneLogo>
                <Phone />
              </PhoneLogo>
              <PhoneNumberSection>
                <PhoneNumberOne>+91-84188 96758</PhoneNumberOne>
              </PhoneNumberSection>
            </PhoneSection>
            <EmailSection>
              <EmailLogo>
                <EmailOutlined />
              </EmailLogo>
              <EmailId>samta@klassway.com</EmailId>
            </EmailSection>
          </GetInTouch>
        </FooterWrap>
        <CopyRightSection>
          <CopyRightHeading>
            Copyright © 2023 Klassway. All rights reserved.
          </CopyRightHeading>
        </CopyRightSection>
      </Wrapper>
    </Box>
  );
};

export default Footer;
