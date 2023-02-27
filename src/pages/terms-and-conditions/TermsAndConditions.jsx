import React from "react";
import AnimatedText from "react-animated-text-content";
import { Container, GlobalStyles } from "../../components/CommonStyles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {
  Points,
  StyledSectionDesc,
  StyledSectionHeading,
  TermsWrap,
  Wrapper,
} from "./TermsAndConditions.styles";

const TermsAndConditions = () => {
  window.scrollTo(0, 0);
  return (
    <Container>
      <Header />
      <GlobalStyles />
      <Wrapper>
        <center>
          <AnimatedText
            type="chars" // animate words or chars
            animationType="float"
            interval={0.1}
            duration={1.7}
            tag="h1"
          >
            Terms and conditions
          </AnimatedText>
        </center>
        <TermsWrap>
          <StyledSectionHeading>Welcome to KlassWAY</StyledSectionHeading>
          <Points>
            Disclaimer: Terms and Conditions are legally binding Undertaking
            between KlassWAY and website visitors which bind them to terms of
            use followed by KlassWAY for creating a transparent community.{" "}
          </Points>
          <Points>
            KlassWAY (also “us”, “we”, “our”) provides a service to its users.
            We request you to review the following basic rules that govern the
            use of the site. Please note that the use of the website constitutes
            the users’ Agreement to follow and be bound by these terms. In case
            of disagreement over the terms, the usage of the website should be
            avoided. Although users may ‘bookmark‘ a particular portion of the
            website thereby bypassing this Agreement, their use of this website
            still binds them to these terms.
          </Points>
          <Points>
            Since we may revise this Agreement at any time, users should visit
            this page periodically to review the terms of their use.
          </Points>
          <Points>
            Please read the Terms of Service carefully before you start to use
            the Site.
          </Points>
          <Points>
            By using the Site, opening an account or by clicking to accept or
            agree to the Terms of Service when this option is made available to
            you, you accept and agree, on behalf of yourself or on behalf of
            your representative or any other entity (if applicable), to be bound
            and abide by these Terms of Service, KlassWAY Payment Terms
            (“Payment Terms”), and our Privacy Policy, found here, each of which
            is incorporated herein by reference.
          </Points>
          <Points>
            If you do not want to agree to these Terms of Service or the Privacy
            Policy, you must not access or use the Site.{" "}
          </Points>
          <Points>
            This website is offered and available to users who are 18 years of
            age or older. If you are under 18 you may not use this Site or the
            KlassWAY services without proper guidance and supervision. By using
            this Site, you represent and warrant that you are of legal age to
            form a binding contract and meet all of the foregoing eligibility
            requirements. If you do not meet all of these requirements, you must
            not access or use the Site.
          </Points>
          <Points>
            Our Support team is available if you have any questions regarding
            the website or Terms of Service. Contacting our Support team can be
            performed by submitting a request to samta@klassway.com.{" "}
          </Points>
          <Points>
            The original language of these Terms of Service, as well as all
            other texts throughout the Site, is English. In case of conflicts
            between the original English version and any translation, the
            English version shall prevail.
          </Points>

          <StyledSectionHeading>Overview:</StyledSectionHeading>
          <Points>
            For using the website you agree to provide us with accurate,
            complete and updated information and must not create an account for
            fraudulent or misleading purposes. You are solely responsible for
            any activity on your account and for maintaining the confidentiality
            and security of your password. We are not liable for any acts or
            omissions by you in connection with your account.
          </Points>
          <Points>For fees and payments please read the Payment Terms.</Points>
          <Points>
            Users may not offer or accept payments using any method other than
            placing an order through the website.
          </Points>
          <Points>
            KlassWAY retains the right to use all delivered services for
            KlassWAY marketing and promotion purposes.
          </Points>
          <Points>
            We care about your privacy. You can read our Privacy Policy here.
            The Privacy Policy is a part of these Terms of Service and
            incorporated herein by reference.
          </Points>
          <Points>
            Users undertake to comply with KlassWAY’s Standards, which are a set
            of behaviour rules and guidelines, applicable to the KlassWAY
            community and marketplace in addition to these Terms of Service, as
            updated from time to time.
          </Points>
          <Points>
            User agrees that the classes taken by children shall be recorded for
            database and for quality evaluation by KlassWAY.
          </Points>
          <Points>
            KlassWAY reserves the right to terminate engagement or restrict
            account of User if there is report of abuse, misbehaving or
            misbehaviour of any sort.
          </Points>

          <StyledSectionHeading>Content of this Site</StyledSectionHeading>
          <StyledSectionDesc>
            Occasionally, there may be information on the website that contains
            typographical errors, inaccuracies, or omissions that may relate to
            product descriptions, pricing, availability or quantity. We reserve
            the right to correct any errors, inaccuracies or omissions and to
            change or update information at any time without prior notice
            (including after the user has submitted his/her order). We apologise
            for any inconvenience this may cause. Unless otherwise noted, all
            materials, including images, illustrations, designs, icons,
            photographs and written materials that are part of this website
            (collectively, the “Contents”) are copyrights, trademarks and/or
            other intellectual property owned, controlled or licensed by
            registered brand KlassWAY . This website and all its Contents are
            intended solely for personal, non-commercial use. Users may download
            or copy the Contents and other downloadable materials displayed on
            the website for their personal use only. No right, title or interest
            in any downloaded materials or software is transferred to them as a
            result of any such downloading or copying. Users may not reproduce
            (except as noted above), publish, transmit, distribute, display,
            modify, create derivative works from, sell or participate in any
            sale of or exploit in any way, in whole or in part, any of the
            Contents, the website or any related software.
          </StyledSectionDesc>
          <StyledSectionHeading>
            User Conduct and Protection
          </StyledSectionHeading>
          <Points>
            Services offered on KlassWAY reflect the diversity of an expanding
            economy. Members of the KlassWAY community communicate and engage
            through orders, social media, and on KlassWAY’s Community Forums.
          </Points>
          <Points>
            KlassWAY maintains a friendly, community spirited, and professional
            environment. Users should keep to that spirit while participating in
            any activity or extensions of KlassWAY. This section relates to the
            expected conduct users should adhere to while interacting with each
            other on KlassWAY.
          </Points>
          <Points>
            To report a violation of our Terms of Service, User Misconduct, or
            inquiries regarding your account, please contact our Support team by
            writing to samta@klassway.com.
          </Points>
          <StyledSectionHeading>Our Statement</StyledSectionHeading>
          <Points>
            To protect our users’ privacy, user identities are kept anonymous,
            where possible. Requesting or providing Email addresses, Skype/IM
            usernames, telephone numbers or any other personal contact details
            to communicate outside of KlassWAY in order to circumvent or abuse
            the KlassWAY messaging system or KlassWAY platform is not permitted.
          </Points>
          <Points>
            Any necessary exchange of personal information required to continue
            a service may be exchanged in the pages assigned within the
            application.
          </Points>
          <Points>
            KlassWAY does not provide protection or recognize any agreements,
            whatsoever, in interactions outside of the Platform.
          </Points>
          <Points>
            All communication, information and file exchanges must be performed
            exclusively on the platform.
          </Points>
          <Points>
            Rude, abusive, improper language or violent messages will not be
            tolerated and may result in an account warning or the
            suspension/removal of your account.
          </Points>
          <Points>
            KlassWAY is open to everyone. You undertake not to discriminate
            against any other user based on gender, race, age, religious
            affiliation, sexual orientation or otherwise and you acknowledge
            that such discrimination may result in the suspension/removal of
            your account. Users may not submit proposals or solicit parties
            introduced through KlassWAY to contract, engage with, or pay outside
            of the Platform.
          </Points>
          <StyledSectionHeading>Reporting Violations</StyledSectionHeading>
          <StyledSectionDesc>
            If you come across any content that may violate our Terms of
            Service, you should report it to us through the appropriate channels
            created to handle those issues as outlined in our Terms of Service.
            All cases are reviewed by our relevant team. To protect individual
            privacy, the results of the investigation are not shared. You can
            review our Privacy Policy for more information.
          </StyledSectionDesc>
          <StyledSectionHeading>Violations</StyledSectionHeading>
          <StyledSectionDesc>
            Users may receive a warning to their account for violations of our
            Terms of Service or any user misconduct reported to our Trust and
            Safety team. A warning will be sent to the user’s email address and
            will be displayed for such user on the Site. Warnings do not limit
            account activity, but can lead to your account permanently disabled
            based on the severity of the violation.
          </StyledSectionDesc>

          <StyledSectionHeading>Indemnification</StyledSectionHeading>
          <Points>
            User agrees to defend, indemnify and hold KlassWAY harmless from and
            against any and all claims, damages, costs and expenses, including
            attorneys’ fees, arising from or related to his/her use of the site.
          </Points>
          <StyledSectionHeading>Optional Tools</StyledSectionHeading>
          <Points>
            We may provide you with access to third-party tools over which nor
            we have monitoring rights nor controls nor inputs.
          </Points>
          <Points>
            You acknowledge and agree that we provide access to such tools “as
            is” and “as available” without any warranties, representations or
            conditions of any kind and without any endorsement. We shall have no
            liability whatsoever arising from or relating to your use of
            optional third-party tools.
          </Points>
          <Points>
            Any use by you of optional tools offered through the website is
            entirely at your own risk and discretion and you should ensure that
            you are familiar with and approve of the terms on which tools are
            provided by the relevant third-party provider(s).
          </Points>
          <Points>
            We may also, in the future, offer new services and/or features
            through the website (including, the release of new tools and
            resources). Such new features and/or services shall also be subject
            to these Terms of Service.
          </Points>
          <StyledSectionHeading>Personal Information</StyledSectionHeading>
          <StyledSectionDesc>
            Your submission of Personal information through the store is
            governed by our Privacy Policy. To view our Privacy Policy please
            visit Link.
          </StyledSectionDesc>
          <StyledSectionHeading>Prohibited Uses</StyledSectionHeading>
          <StyledSectionDesc>
            In addition to other prohibitions as set forth in the Terms of
            Service, you are prohibited from using the website or its content:
            (a) for any unlawful purpose; (b) to solicit others to perform or
            participate in any unlawful acts; (c) to violate any international,
            federal, provincial or state regulations, rules, laws, or local
            ordinances; (d) to infringe upon or violate our intellectual
            property rights or the intellectual property rights of others; (e)
            to harass, abuse, insult, harm, defame, slander, disparage,
            intimidate, or discriminate based on gender, sexual orientation,
            religion, ethnicity, race, age, national origin, or disability; (f)
            to submit false or misleading information; (g) to upload or transmit
            viruses or any other type of malicious code that will or may be used
            in any way that will affect the functionality or operation of the
            Service or of any related website, other websites, or the Internet;
            (h) to collect or track the personal information of others; (i) to
            spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any
            obscene or immoral purpose; or (k) to interfere with or circumvent
            the security features of the Service or any related website, other
            websites, or the Internet. We reserve the right to terminate your
            use of the Service or any related website for violating any of the
            prohibited uses.
          </StyledSectionDesc>
          <StyledSectionHeading>Severability</StyledSectionHeading>
          <StyledSectionDesc>
            In the event that any provision of these Terms of Service is
            determined to be unlawful, void or unenforceable, such provision
            shall nonetheless be enforceable to the fullest extent permitted by
            applicable law, and the unenforceable portion shall be deemed to be
            severed from these Terms of Service, such determination shall not
            affect the validity and enforceability of any other remaining
            provisions.
          </StyledSectionDesc>
          <StyledSectionHeading>Termination</StyledSectionHeading>
          <StyledSectionDesc>
            These terms are effective unless and until terminated by either the
            user or KlassWAY. The user may terminate this Agreement at any time
            and may do so immediately without notice, and accordingly deny user
            access to the site, if in KlassWAY’s sole discretion the user fails
            to comply with any term or provision of this Agreement. Upon any
            termination of the Agreement by either the user or by us, the user
            must promptly destroy all materials downloaded or otherwise obtained
            from this site, as well as all copies of such materials, whether
            made under the terms of use or otherwise.
          </StyledSectionDesc>
          <StyledSectionHeading>
            Waiver and Entire Agreement
          </StyledSectionHeading>
          <Points>
            The failure of us to exercise or enforce any right or provision of
            these Terms of Service shall not constitute a waiver of such right
            or provision.
          </Points>
          <Points>
            These Terms of Service and any policies or operating rules posted by
            us on this website or in respect to The Service constitutes the
            entire Agreement and understanding between you and us and govern
            your use of the Service, superseding any prior or contemporaneous
            agreements, communications and proposals, whether oral or written,
            between you and us (including, but not limited to, any prior
            versions of the Terms of Service).
          </Points>

          <StyledSectionHeading>Governing Law</StyledSectionHeading>
          <StyledSectionDesc>
            These Terms of Service and any separate Agreements whereby we
            provide you Services shall be governed by and construed in
            accordance with the laws of India.
          </StyledSectionDesc>
          <StyledSectionHeading>Proprietary Restrictions</StyledSectionHeading>
          <Points>
            The Site, including its general layout, look and feel, design,
            information, content and other materials available thereon, is
            exclusively owned by KlassWAY and protected by copyright, trademark,
            and other intellectual property laws. Users have no right, and
            specifically agree not to do the following with respect to the Site
            or any part, component or extension of the Site (including its
            mobile applications): (i) copy, transfer, adapt, modify, distribute,
            transmit, display, create derivative works, publish or reproduce it,
            in any manner; (ii) reverse assemble, decompile, reverse engineer or
            otherwise attempt to derive its source code, underlying ideas,
            algorithms, structure or organization; (iii) remove any copyright
            notice, identification or any other proprietary notices; (iv) use
            automation software (bots), hacks, modifications (mods) or any other
            unauthorized third-party software designed to modify the Site; (v)
            attempt to gain unauthorized access to, interfere with, damage or
            disrupt the website or the computer systems or networks connected to
            the Site; (vi) circumvent, remove, alter, deactivate, degrade or
            thwart any technological measure or content protections of the Site;
            (vii) use any robot, spider, crawlers or other automatic device,
            process, software or queries that intercepts, “mines,” scrapes or
            otherwise accesses the website to monitor, extract, copy or collect
            information or data from or through the Site, or engage in any
            manual process to do the same, (viii) introduce any viruses, trojan
            horses, worms, logic bombs or other materials that are malicious or
            technologically harmful into our systems, (ix) use the website in
            any manner that could damage, disable, overburden or impair the
            Site, or interfere with any other users’ enjoyment of the website or
            (x) access or use the Site and app in any way not expressly
            permitted by these Terms of Service. Users also agree not to permit
            or authorize anyone else to do any of the foregoing.
          </Points>
          <Points>
            Except for the limited right to use the website according to these
            Terms of Service, KlassWAY owns all right, title and interest in and
            to the website (including any and all intellectual property rights
            therein) and you agree not to take any action(s) inconsistent with
            such ownership interests. We reserve all rights in connection with
            the website and its content including, without limitation, the
            exclusive right to create derivative works.
          </Points>
          <StyledSectionHeading>Confidentiality</StyledSectionHeading>
          <StyledSectionDesc>
            Partners should recognize that there might be a need for Customers
            to disclose certain confidential information to be used by Partners
            for the purpose of delivering the ordered service, and to protect
            such confidential information from unauthorized use and disclosure.
            Therefore, Partners agree to treat any information received from
            Customers as highly sensitive, top secret and classified material.
            Without derogating from the generality of the above, Partners
            specifically agree to (i) maintain all such information in strict
            confidence; (ii) not disclose the information to any third parties;
            (iii) not use the information for any purpose except for delivering
            the ordered work; and (vi) not to copy or reproduce any of the
            information without the Customer’s permission.
          </StyledSectionDesc>
          <StyledSectionHeading>General Terms</StyledSectionHeading>
          <Points>
            KlassWAY reserves the right to put any account on hold or
            permanently disable accounts due to breach of these Terms of Service
            or due to any illegal or inappropriate use of the Site or services.
          </Points>
          <Points>
            Violation of our Terms of Service may get your account disabled
            permanently.
          </Points>
          <Points>
            Users with disabled accounts will not be able to transact on our
            Platform.
          </Points>
          <Points>
            Users who have violated our Terms of Service and had their account
            disabled may contact our Support team for more information
            surrounding the violation and status of the account.
          </Points>
          <Points>
            Users have the option to enable account Security features to protect
            their account from any unauthorized usage.
          </Points>
          <Points>
            Users must be able to verify their account ownership through Support
            by providing materials that prove ownership of that account.
          </Points>
          <Points>
            Disputes should be handled using KlassWAY’s dispute resolution
            procedures or by contacting KlassWAY Support at samta@klassway.com.
          </Points>
          <Points>
            We may make changes to our Terms of Service from time to time. When
            these changes are made, we will make a new copy of the terms of
            service available on this page.
          </Points>
          <Points>
            You understand and agree that if you use KlassWAY after the date on
            which the Terms of Service have changed, we will treat your use as
            acceptance of the updated Terms of Service. Disclaimer of Warranties
          </Points>
          <Points>
            YOUR USE OF THE WEBSITE, ITS CONTENT AND ANY SERVICES OR ITEMS
            OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS
            CONTENT AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE ARE
            PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT ANY
            WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER KlassWAY
            NOR ANY PERSON ASSOCIATED WITH KlassWAY MAKES ANY WARRANTY OR
            REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY,
            RELIABILITY, QUALITY, ACCURACY OR AVAILABILITY OF THE SITE.
          </Points>
          <Points>
            THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE
            EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
          </Points>

          <StyledSectionHeading>Limitation on Liability</StyledSectionHeading>
          <Points>
            IN NO EVENT WILL KlassWAY, ITS AFFILIATES OR THEIR LICENSORS,
            SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS OR DIRECTORS BE
            LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT
            OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SITE,
            ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER
            WEBSITES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE OR
            SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL,
            INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING BUT NOT
            LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS,
            LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED
            SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER
            CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT OR
            OTHERWISE, EVEN IF FORESEEABLE.
          </Points>
          <Points>
            THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED
            OR LIMITED UNDER APPLICABLE LAW.
          </Points>
          <Points>
            The term “Affiliate” referred to herein, is an entity that, directly
            or indirectly, controls, or is under the control of, or is under
            common control with KlassWAY.
          </Points>
          <StyledSectionHeading>Feedback Rights:</StyledSectionHeading>
          <StyledSectionDesc>
            To the extent that you provide KlassWAY with any comments,
            suggestions or other feedback regarding the KlassWAY platform or the
            Site as a whole, as well as other KlassWAY products or services
            (collective, the “Feedback”), you will be deemed to have granted
            KlassWAY an exclusive, royalty-free, fully paid up, perpetual,
            irrevocable, worldwide ownership rights in the Feedback. KlassWAY is
            under no obligation to implement any Feedback it may receive from
            users.
          </StyledSectionDesc>
        </TermsWrap>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default TermsAndConditions;
