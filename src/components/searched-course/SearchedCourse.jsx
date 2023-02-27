import { Rating } from "@mui/material";
import React from "react";
import {
  RatingCount,
  RatingInNumbers,
  RatingSection,
} from "../card/Card.styles";
import { GlobalStyles } from "../CommonStyles";
import {
  CourseAuthor,
  CourseImg,
  CourseName,
  CourseSubTitle,
  DetailSection,
  ImageSection,
  Price,
  Wrapper,
} from "./SearchedCourse.styles";

const SearchedCourse = ({ data }) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <ImageSection>
        <CourseImg onContextMenu={(e) => e.preventDefault()} src={data?.img} />
      </ImageSection>
      <DetailSection>
        <CourseName>{data?.courseName}</CourseName>
        <CourseSubTitle>{data?.subTitle}</CourseSubTitle>
        <CourseAuthor>{data?.auther}</CourseAuthor>
        <RatingSection>
          <RatingInNumbers>
            {data?.rating > 0
              ? parseFloat(data?.rating / data?.noOfRating).toFixed(1)
              : 0}
          </RatingInNumbers>
          <Rating
            value={parseFloat(data?.rating / data?.noOfRating).toFixed(1)}
            size="small"
            precision={0.1}
            readOnly
          />
          <RatingCount>({data?.noOfRating})</RatingCount>
        </RatingSection>
      </DetailSection>
      <Price>₹{data?.price}</Price>
    </Wrapper>
  );
};

export default SearchedCourse;
