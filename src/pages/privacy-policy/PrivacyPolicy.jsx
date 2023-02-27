import React from "react";
import AnimatedText from "react-animated-text-content";
import { Container, GlobalStyles } from "../../components/CommonStyles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {
  Points,
  StyledSectionDesc,
  StyledSectionHeading,
} from "../terms-and-conditions/TermsAndConditions.styles";
import { PolicyWrap, Wrapper } from "./PrivacyPolicy.styles";

const PrivacyPolicy = () => {
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
            Privacy Policy
          </AnimatedText>
        </center>
        <PolicyWrap>
          <StyledSectionDesc>
            <b> Disclaimer:</b> This Privacy Policy describes how your personal
            information is collected, used, and shared when you visit or make a
            purchase from KlassWAY.
          </StyledSectionDesc>
          <StyledSectionDesc>
            Last Updated: [20 february 2023]
          </StyledSectionDesc>
          <StyledSectionDesc>
            KlassWAY is always committed to protecting its users’ Personal
            information.
          </StyledSectionDesc>
          <StyledSectionDesc>
            At KlassWAY (“KlassWAY”, “We” and “Us”) we care about your privacy
            and want you to be familiar with how we collect, use, and disclose
            information. KlassWAY adheres to ethical standards in gathering,
            using, and safeguarding any information you provide. This Privacy
            Policy describes our practices in connection with information that
            we or our service providers collect through the website (hereinafter
            the “Service”) operated and controlled by us from which you are
            accessing this Privacy Policy. By providing personal information to
            us or by using the Service, you acknowledge that you have read and
            understand this Privacy Policy.
          </StyledSectionDesc>
          <StyledSectionDesc>
            By Personal Information, we mean any information that can either
            itself identify you as an individual (“Personally Identifying
            Information“) or that can be connected to you indirectly by linking
            it to Personally Identifying Information. Please note that usage of
            the term Personal Information in this Privacy Policy includes
            sensitive personal data or information, wherever appropriate and/or
            mandated under applicable laws.
          </StyledSectionDesc>
          <StyledSectionHeading>
            ACCEPTANCE OF PRIVACY POLICY
          </StyledSectionHeading>
          <Points>
            By providing your consent to this Privacy Policy and accepting our
            Terms of Use, you agree to the collection, use and transfer of your
            Personal Information as set out in this Privacy Policy. If you do
            not agree with the terms of this Privacy Policy, please do not
            use/access this Website further.{" "}
          </Points>
          <Points>
            We will review this Privacy Policy from time to time to make sure it
            is up to date. If you are just a visitor, then please note that this
            Privacy Policy is subject to change at any time without notice. To
            make sure you are aware of any changes, please review this Policy
            periodically. If you are our registered user, we will notify you
            before we make changes to this Policy and give you the opportunity
            to review the revised Policy before you choose to continue using our
            services.
          </Points>
          <StyledSectionHeading>
            PERSONAL INFORMATION WE COLLECT
          </StyledSectionHeading>
          <Points>
            Information You Provide: When you visit the Site, you provide with
            consent information, including information about your profile
            details, Name, Phone numbers, address, recordings during classes,
            child’s information provided on the portal (achievements, ranking,
            any other academic information),transactional information, Payment
            information. Additionally, as you browse the Site, we collect
            information about the individual web pages or products that you
            view, what websites or search terms referred you to the Site, and
            information about how you interact with the Site. We refer to this
            automatically-collected information as “Device Information”. However
            the Personal Information stored by us remains strictly Confidential
            and is not shared with any third party.
          </Points>
          <Points>
            Information We Collect Automatically. We collect information while
            you access, browse, view or otherwise use the Site. In other words,
            when you access the website we collect personal information on your
            usage of the Site, including transactions and communications with
            other users through the Site, your searches, the pages you visited,
            as well as other actions on Site. We Also, collect, use and process
            the information relating to such usage, including, IP address,
            device and connection information, browser information and web-log
            information. We also collect and process information relating to the
            use of cookies and similar technologies. We use that information to
            provide you our services, enhance user experience, personalize your
            browsing experience as well as monitor the website for preventing
            fraud and inappropriate content or behaviour.
          </Points>
          <Points>
            KlassWAY is committed to providing efficient customer service and
            outstanding value for all its products while respecting and
            protecting the privacy of its users. To serve them better, we may
            collect and maintain certain Personal Information, provided by the
            users, e.g. product and service preferences, billing address,
            payment information and other information. Under no circumstances
            does the company sell or rent this information to other businesses.
            The confidentiality of this information is strictly protected and
            enforced.
          </Points>
          <StyledSectionHeading>
            OUR LEGAL BASIS FOR USING YOUR PERSONAL INFORMATION
          </StyledSectionHeading>
          <Points>
            Where relevant under applicable laws, all processing of your
            personal information will be justified by a “lawful ground” for
            processing. In the majority of cases, processing will be justified
            on the basis that:
          </Points>
          <Points>
            You have provided your consent for us to use your personal
            information for a specific purpose; Our use of your personal
            information is necessary to perform a contract or take steps to
            enter into a contract with you (e.g. to provide you with services
            which you have purchased); the processing is necessary to comply
            with a relevant legal obligation or regulatory obligation that we
            have (e.g. fraud prevention); or The processing is necessary to
            support our legitimate interests as a business (e.g. to improve our
            services to you), subject to your interests and fundamental rights
            and provided it is conducted at all times in a way that is
            proportionate.
          </Points>
          <Points>
            When we talk about “Personal Information” in this Privacy Policy, we
            are talking both about Device Information and Order Information.
          </Points>
          <StyledSectionHeading>
            HOW DO WE USE YOUR PERSONAL INFORMATION?
          </StyledSectionHeading>
          <Points>
            Communicate with you; Screen our orders for potential risk or fraud;
            and When in line with the preferences you have shared with us,
            provide you with information or advertising relating to our products
            or services.
          </Points>
          <Points>
            We will use your personal information for the following purposes:
          </Points>
          <Points>
            to provide you with quality service and security, to operate the
            Site, to perform our obligations to you and to develop and improve
            our service. For example, we use personal information to verify your
            identity. We also use this information to establish and set up your
            account, verify or re-issue a password, log your activity, enable
            your communications with other members, provide customer support and
            contact you from time to time. The information helps us to develop
            and improve our services, to understand and analyse our performance
            as well as your preferences and performance and to customize and
            personalize our service and enhance your experience.
          </Points>
          <Points>
            to ensure marketplace integrity, prevent fraud and maintain a safe
            and secure marketplace and services. For example, we use personal
            information to monitor, track and prevent fraudulent activities and
            other inappropriate activities, monitor content integrity, conduct
            security investigations and risk assessments, verify or authenticate
            information provided by you, enforce our Terms of Service and comply
            with applicable laws. We conduct certain behavioural analytics to
            achieve the above objectives and in limited cases, if we detect
            activity that we think poses a risk to the KlassWAY, other users,
            our community, or third parties, automated processes may restrict or
            limit your ability to use the site. to contact you, as requested by
            you or as otherwise approved by you or permitted according to this
            Policy.
          </Points>
          <Points>
            to promote and advertise the Site, our services and the KlassWAY
            marketplace. For example, we use the information collected from you
            for the purpose of sending direct marketing messages, to show you
            information that may be of interest to you, to organize and
            facilitate referral programs, contests or other promotional
            activities or events.
          </Points>
          <Points>
            to maintain appropriate business records, to comply with lawful
            requests by public authorities and to comply with applicable laws
            and regulations or as otherwise required by law. We will ask for
            your consent before using information for a purpose other than those
            set out in this Policy.
          </Points>
          <StyledSectionHeading>Direct marketing:</StyledSectionHeading>
          <Points>
            We use your personal information to send you direct marketing
            communications about our products, services or promotions from
            KlassWAY that may be of interest to you or our related services.
            This may be via email, post, SMS, DLT cloud calling telephone or
            targeted online advertisements.
          </Points>
          <Points>
            Our processing of your personal information for marketing purposes
            is based on our legitimate interest, or on your consent, or as
            otherwise permitted according to applicable laws. You have a right
            to prevent direct marketing of any form at any time – this can be
            exercised by following the opt-out link attached to each
            communication or by sending an email to samta@klassway.com.
          </Points>
          <Points>
            We take steps to limit direct marketing to a reasonable and
            proportionate level, and to send you communications which we believe
            may be of interest or relevance to you, based on the information we
            have about you.
          </Points>
          <Points>
            Finally, we may also share your Personal Information to comply with
            applicable laws and regulations, to respond to a subpoena, search
            warrant or other lawful request for information we receive, or to
            otherwise protect our rights.
          </Points>
          <StyledSectionHeading>
            HOW LONG DO WE KEEP PERSONAL INFORMATION?
          </StyledSectionHeading>
          <Points>
            We apply a general rule of keeping personal information only for as
            long as is required to fulfil the purpose for which it was
            collected. However, in some circumstances, we will retain your
            personal information for longer periods of time. We will retain
            personal information for the following purposes:
          </Points>
          <Points>
            as long as it is necessary and relevant for our operations, e.g. so
            that we have an accurate record of your dealings with us in the
            event of any complaints or challenge; and in relation to personal
            information from closed accounts to comply with applicable laws,
            prevent fraud, collect any fees owed, resolve disputes, troubleshoot
            problems, assist with any investigation, enforce our app’s terms and
            take other actions as permitted by law. CHILDREN UNDER THE AGE OF 13
          </Points>
          <Points>
            Our KlassWAY’s product Let’s Tinker app is not intended for children
            under 13 years of age. No one under age 13 should provide any
            personal information to or on the Site. We do not knowingly collect
            personal information from children under 13. Adults should at all
            times supervise their children’s activities. If we learn we have
            collected or received personal information from a child under 13, we
            will delete that personal information.{" "}
          </Points>
          <StyledSectionHeading>LOG DATA</StyledSectionHeading>
          <StyledSectionDesc>
            We want to tell you that whenever you utilise our Service, just in
            case of a mistake within the app, we may collect data and knowledge
            (through third-party products) on your phone called Log Data. This
            Log Data contains all the information that is related to your
            device’s Internet Protocol (IP) address, device name, OS version,
            the configuration of the app, time and date of your usage, and other
            statistics.
          </StyledSectionDesc>
          <StyledSectionHeading>COOKIES</StyledSectionHeading>
          <StyledSectionDesc>
            The Cookies are a special type of files that contain a small amount
            of information that is commonly used as anonymous unique
            identifiers. These are sent to your browser from the websites that
            you simply have visited in the past. These cookies are stored in
            your device’s internal memory. This Service doesn’t use these
            “cookies” explicitly. However, the website may use third-party code
            and libraries that will use “cookies” to gather information and
            improve their services. You will get an option to either accept or
            refuse these cookies. In case, you choose to refuse our cookies,
            then in that case you’ll not be ready to use some portions of our
            Service.
          </StyledSectionDesc>

          <StyledSectionHeading>
            SHARING PERSONAL INFORMATION WITH THIRD PARTIES
          </StyledSectionHeading>
          <Points>
            We do not sell or rent your personal information to third parties
            for their marketing purposes without your explicit consent.
          </Points>
          <Points>
            We share your personal information with third parties as detailed
            below:
          </Points>
          <Points>
            For legal reasons. We share personal information with law
            enforcement agencies, public authorities or other parties in order
            to respond to a subpoena or court order, judicial process or to
            regulatory authorities, if we believe we are required to do so by
            law, or that doing so is reasonably necessary to comply with legal
            processes; when we believe it necessary or appropriate to disclose
            personal information to law enforcement authorities, such as to
            investigate actual or suspected fraud or violations of law, breaches
            of security, or breaches of this Policy; to respond to claims
            against us; and to protect the rights, property, or personal safety
            of KlassWAY, our Partners, our customers, or the public.
          </Points>
          <Points>
            For payments and fraud detection. We share personal information with
            payment processors, fraud detection agencies and similar third
            parties for the purpose of facilitating payments done via the
            website and securing the website and protecting it against fraud,
            unauthorised transactions (such as money laundering), claims or
            other liabilities.
          </Points>
          <Points>
            With social media partners. Our website includes certain social
            media features, including single sign on features. We also share
            limited personal information with such social media platforms and
            marketing partners, such as LinkedIn, Facebook and Google, to
            promote our services or the KlassWAY marketplace. Such features and
            third party services collect certain information about you and may
            set a cookie to enable their functionality. Such third parties’
            features are governed by their policies.
          </Points>
          <Points>
            With our corporate affiliates. We share personal information with
            KlassWAY’s corporate affiliates that are related by common control
            for the purpose of operating the Site, providing our services to you
            and for other purposes listed herein.
          </Points>
          <Points>
            In the context of a corporate transaction. Personal information will
            also be disclosed if we go through a business transition such as a
            merger, sale, transfer of all or a portion of KlassWAY’s assets,
            acquisition, bankruptcy or similar event. In the event that we sell
            any business or assets, we will disclose your data to the
            prospective Customer. If we or substantially all of our assets are
            acquired by a third party, information held by us about our users
            will be one of the transferred assets.{" "}
          </Points>
          <StyledSectionHeading>SECURITY</StyledSectionHeading>
          <StyledSectionDesc>
            We implement technical and organisational measures to maintain the
            security of the Site, our services and personal information and in
            preventing unauthorised access, loss, misuse, alteration,
            destruction or damage to it through industry standard technologies
            and internal procedures. In addition, we contractually ensure that
            any third party processing your personal information equally
            provides for confidentiality and integrity of your data in a secure
            way. However, the transmission of data via the internet is not
            completely secure, and although we will do our best to protect your
            personal information, we cannot guarantee the security of your data
            transmitted to the Site. Once we have received your data, we will
            use strict procedures and security features to try to prevent
            unauthorised access. Users who have registered to the website agree
            to keep their password in strict confidence and not disclose such
            password to any third party. Further information about our data
            security practices can be provided on request.
          </StyledSectionDesc>
          <StyledSectionHeading>CHANGES</StyledSectionHeading>
          <StyledSectionDesc>
            We may update this privacy policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal or regulatory reasons.
          </StyledSectionDesc>
          <StyledSectionHeading>
            UPDATING PERSONAL INFORMATION
          </StyledSectionHeading>
          <Points>
            We take steps to ensure that the personal information we collect is
            accurate and up to date, and we provide you with the opportunity to
            update your information through your account profile settings. In
            the event that you believe your information is in any way incorrect
            or inaccurate, please let us know immediately. We will make sure we
            investigate the matter and correct any inaccuracies as quickly as
            possible where necessary or give you ways to update it quickly or to
            delete it – unless we have to keep that information for legitimate
            business or legal purposes. When updating your personal information,
            we will ask you to verify your identity before we can act on your
            request. If for any reason you have a problem with deleting your
            personal information, please contact KlassWAY’s Support and we will
            make reasonable efforts to delete any such information pursuant to
            any applicable privacy laws.
          </Points>
          <Points>
            You can review and change your personal information by logging into
            the website and visiting your account profile page.
          </Points>
          <StyledSectionHeading>CONTACT US</StyledSectionHeading>
          <Points>
            To exercise any of your rights in connection with your personal
            information, we kindly ask that you contact us at samta@klassway.com
          </Points>
          <Points>
            Please include all the relevant details, so your requests can be
            handled correctly. We will process any requests in line with any
            local laws and our policies and procedures.{" "}
          </Points>
          <Points>
            If you have any questions (or comments) concerning this Policy,
            please email our team at samta@klassway.com, and we will make an
            effort to reply within a reasonable timeframe.
          </Points>
        </PolicyWrap>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default PrivacyPolicy;
