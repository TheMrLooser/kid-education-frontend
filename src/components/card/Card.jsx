import { Skeleton } from "@mui/material";
import Rating from "@mui/material/Rating";
import React from "react";
import { RemoveCourseFromCartAPI } from "../../API/api";
import { Cards, CourseImage, GlobalStyles } from "../CommonStyles";
import {
  Author,
  ButtonSection,
  CourseDemoGraphic,
  CourseDetails,
  DeleteButton,
  DetailSection,
  ImageSection,
  Price,
  PriceSection,
  RatingCount,
  RatingInNumbers,
  RatingSection,
  Title,
  Wrapper,
} from "./Card.styles";

const Card = ({
  title,
  author,
  image,
  cart,
  rating,
  ratingCount,
  price,
  courseId,
  buyed,
  loading,
}) => {
  const RemoveCourse = async () => {
    await RemoveCourseFromCartAPI(courseId);
    window.location.reload();
  };

  return (
    <Wrapper>
      <GlobalStyles />
      {!loading ? (
        <Cards cart={cart} key={courseId}>
          <ImageSection>
            <CourseImage
              onContextMenu={(e) => e.preventDefault()}
              cart={cart}
              src={image}
              alt="course_img"
            />
          </ImageSection>
          <DetailSection>
            <CourseDetails cart={cart}>
              <CourseDemoGraphic>
                <Title cart={cart}>{title}</Title>
                {price && (
                  <>
                    <Author cart={cart}>{author}</Author>
                    {buyed ? null : (
                      <RatingSection>
                        <RatingInNumbers>
                          {rating > 0
                            ? parseFloat(rating / ratingCount).toFixed(1)
                            : 0}
                        </RatingInNumbers>
                        <Rating
                          value={parseFloat(rating / ratingCount).toFixed(1)}
                          size="small"
                          readOnly
                        />
                        <RatingCount>({ratingCount})</RatingCount>
                      </RatingSection>
                    )}
                  </>
                )}
              </CourseDemoGraphic>
              {price &&
                (buyed ? null : (
                  <PriceSection>
                    <Price cart={cart}>₹{price}</Price>
                  </PriceSection>
                ))}
            </CourseDetails>

            {cart === "true" ? (
              <ButtonSection>
                <DeleteButton onClick={RemoveCourse}>Delete</DeleteButton>
              </ButtonSection>
            ) : null}
          </DetailSection>
        </Cards>
      ) : (
        <Cards>
          <Skeleton
            variant="rectangular"
            height={135}
            sx={{ borderRadius: "7px" }}
          />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" width={40} />
        </Cards>
      )}
    </Wrapper>
  );
};

export default Card;
