import styled from "styled-components";
import {
  AddToCart,
  BuyNow,
} from "../../components/modal/display-course/CourseModal.styles";

export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 48px));
  margin-inline: auto;
  padding-bottom: 20px;
`;

export const DetailSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 1130px) {
    flex-direction: column;
  }
`;

export const IntroSection = styled.div`
  height: 310px;
  color: white;
  display: flex;
  background: ${(props) => ` url(${props.img}) no-repeat top right`};
  background-size: 650px 100%;
  overflow: hidden;

  @media (max-width: 1130px) {
    height: max-content;
    background: #235894;
    background-size: 650px 100%;
    overflow: visible;
  }
`;

export const IntroBlur = styled.div`
  width: 100%;
  height: 100%;
  padding-block: 20px;
  background: linear-gradient(to right, #02082a, #235894, #0b386b, transparent);

  @media (max-width: 1130px) {
    background: #235894;
  }
`;

export const IntroWrap = styled.div`
  width: min(1250px, calc(100% - 48px));
  height: 85%;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: 1130px) {
    flex-direction: column-reverse;
  }
`;

export const PartOne = styled.div`
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 1130px) {
    box-shadow: 0 0 0 0 transparent;
    background-color: transparent;
    margin-top: 20px;
    max-width: 100%;
    min-width: 300px;
    padding-inline: 0;
  }
`;
export const PartTwo = styled.div`
  margin-top: auto;
  width: 100%;
  max-width: 470px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  color: black;

  @media (max-width: 1130px) {
    max-width: 100%;
    min-width: 320px;
  }
`;

export const PurchaseSection = styled.div`
  height: 100%;
  padding-inline: 10px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 7px;

  a {
    width: 100%;
  }

  @media (max-width: 1130px) {
    display: none;
    padding: 0;
  }
`;

export const HiddenPurchaseSection = styled(PurchaseSection)`
  width: 100%;
  display: none;

  @media (max-width: 1130px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0;
  }
`;

export const CourseImg = styled.img`
  display: none;
  width: 100%;
  max-width: 350px;
  border-radius: 7px;

  @media (max-width: 1130px) {
    display: block;
    max-width: 100%;
    min-height: 425px;
    border-radius: 7px;
  }

  @media (max-width: 768px) {
    min-height: 300px;
  }

  @media (max-width: 420px) {
    min-height: 200px;
  }
`;

export const CourseTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 1px 1px 20px hsl(0, 0%, 30%);
  margin: 0;

  @media (max-width: 1130px) {
    font-size: 30px;
  }

  @media (max-width: 398px) {
    font-size: 20px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

export const AddCart = styled(AddToCart)`
  font-weight: bolder;
  background-color: white;
  color: black;
`;

export const BuyButton = styled(BuyNow)`
  margin: 0;
  background-color: #4e5ced;
  color: white;
  font-weight: bolder;
  border: none;
  outline: none;
`;

export const GoTo = styled.button`
  width: 100%;
  height: 50px;
  background-color: #4e5ced;
  color: white;
  border: none;
  border-radius: 7px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const CourseSubtitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 0;

  @media (max-width: 398px) {
    font-size: 16px;
  }
`;
export const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const AuthorSection = styled.p`
  font-size: 16px;
  margin: 0;
`;
export const Author = styled.span`
  font-weight: 700;
`;
export const UpdationSection = styled(AuthorSection)``;

export const Update = styled.span`
  font-weight: 700;
`;

export const CoursePrice = styled.h1`
  font-size: 40px;
  font-family: "Montserrat", sans-serif;
  color: white;
  text-shadow: 2px 2px 25px black;
  margin: auto 0 0 0;

  @media (max-width: 768px) {
    text-shadow: none;
  }
`;

export const Section = styled.div`
  padding-block: 20px;
`;

export const SectionHeading = styled.h1`
  margin: 0;
  font-size: 25px;
  font-weight: 600;
  line-height: 2;
`;

export const DescriptionSection = styled.div`
  width: 100%;
  max-width: 700px;
  text-align: justify;

  @media (max-width: 1130px) {
    max-width: 100%;
  }
`;

export const VideoListSection = styled.div`
  width: 100%;
  max-width: 700px;

  @media (max-width: 1130px) {
    max-width: 100%;
  }
`;

export const CourseDesc = styled.div``;

export const CourseSection = styled.div`
  width: 100%;
  max-width: 700px;

  @media (max-width: 1130px) {
    max-width: 100%;
  }
`;
export const RecommendationSection = styled.div`
  border-radius: 7px;
`;

export const DescSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
