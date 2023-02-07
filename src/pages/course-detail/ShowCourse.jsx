import {
  Alert,
  Backdrop,
  CircularProgress,
  Rating,
  Skeleton,
  Snackbar,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  RatingCount,
  RatingInNumbers,
} from "../../components/card/Card.styles";
import { Container, GlobalStyles } from "../../components/CommonStyles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {
  AddCart,
  Author,
  AuthorSection,
  ButtonWrap,
  BuyButton,
  CourseDesc,
  CourseImg,
  CoursePrice,
  CourseSection,
  CourseSubtitle,
  CourseTitle,
  DescriptionSection,
  DescSkeleton,
  DetailSection,
  GoTo,
  HiddenPurchaseSection,
  IntroBlur,
  IntroSection,
  IntroWrap,
  PartOne,
  PartTwo,
  PurchaseSection,
  RatingSection,
  RecommendationSection,
  Section,
  SectionHeading,
  Update,
  UpdationSection,
  Wrapper,
} from "./ShowCourse.styles";
import {
  AddToCartAPI,
  GetAllBuyedCourses,
  GetAllCourseCartAPI,
  GetCoursesByAuthor,
  GetSingleCourseAPI,
} from "../../API/api";
import moment from "moment";

import Recommend from "../../components/recommendation/Recommend";
import Course from "../../components/course/Course";
import VideoList from "../../components/video list/VideoList";
import { Authentication, CongratsModal, CourseModalContext } from "../../App";
import { checkoutHandler } from "../../helper/paymentGateway";

const ShowCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState();
  const [courseAdded, setCourseAdded] = useState(false);
  const [cartAdded, setCartAdded] = useState();
  const { User } = useContext(Authentication);
  const { courseModalData } = useContext(CourseModalContext);
  const { setCongratsModalOpen } = useContext(CongratsModal);

  //Spinner
  const [spin, setSpin] = useState(false);

  const handleSpinClose = () => {
    setSpin(false);
  };

  //Alert section
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertText, setAlertText] = useState("Somthing");
  const [alertType, setAlertType] = useState("success");

  const setAlert = (type, text, status) => {
    setAlertType(type);
    setAlertText(text);
    setAlertOpen(status);
  };

  const handleClose = () => {
    setAlertOpen(false);
  };

  useEffect(() => {
    const getCourse = async () => {
      setSpin(true);
      const res = await GetSingleCourseAPI(id);
      setCourse(res.data.course);
      setSpin(false);
    };
    getCourse();
  }, [id]);

  const [coursesByAuthor, setCoursesByAuthor] = useState(null);
  useEffect(() => {
    const getCoursesByAuthor = async () => {
      const res = await GetCoursesByAuthor(id);
      setCoursesByAuthor(res.data.courses);
    };
    getCoursesByAuthor();
  }, [id]);

  const addTocart = async (data) => {
    setSpin(true);
    const res = await AddToCartAPI(data, User.id);
    if (res.data.error) {
      return setAlert("error", res.data.message, true);
    }
    setSpin(false);
    setAlert("success", res.data.message, true);
  };

  useEffect(() => {
    const getCourses = async () => {
      const res = await GetAllBuyedCourses();
      const added = res.data.courses.filter((course) => course.courseId === id);
      setCourseAdded(added.length === 0 ? false : true);
      getCartCourses();
    };
    getCourses();

    const getCartCourses = async () => {
      const res = await GetAllCourseCartAPI();
      const added = res.data.courses.filter(
        (course) => course.courseId === courseModalData.id
      );
      setCartAdded(added.length === 0 ? false : true);
    };
  }, [id, cartAdded]);

  return (
    <Container>
      <GlobalStyles />
      <>
        <Backdrop sx={{ color: "#fff" }} open={spin} onClick={handleSpinClose}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Snackbar
          open={alertOpen}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={handleClose}
        >
          <Alert
            severity={alertType}
            sx={{ width: "100%" }}
            onClose={handleClose}
          >
            {alertText}
          </Alert>
        </Snackbar>

        <Header />
        <IntroSection img={course?.img}>
          <IntroBlur>
            <IntroWrap>
              <PartOne>
                {course ? (
                  <CourseTitle>{course?.courseName}</CourseTitle>
                ) : (
                  <Skeleton variant="rounded" animation="wave" height={80} />
                )}
                {course ? (
                  <CourseSubtitle>{course?.subTitle}</CourseSubtitle>
                ) : (
                  <Skeleton variant="rounded" animation="wave" height={40} />
                )}
                {course ? (
                  <RatingSection>
                    <RatingInNumbers>
                      {course.rating > 0
                        ? parseFloat(course.rating / course.noOfRating).toFixed(
                            1
                          )
                        : 0}
                    </RatingInNumbers>
                    <Rating
                      value={parseFloat(
                        course.rating / course.noOfRating
                      ).toFixed(1)}
                      size="small"
                      precision={0.1}
                      readOnly
                    />
                    <RatingCount>({course?.noOfRating}) students</RatingCount>
                  </RatingSection>
                ) : (
                  <Skeleton variant="rounded" animation="wave" />
                )}
                {course ? (
                  <AuthorSection>
                    Created by <Author>{course?.auther}</Author>
                  </AuthorSection>
                ) : (
                  <Skeleton variant="rounded" animation="wave" />
                )}
                {course ? (
                  <UpdationSection>
                    Last updated{" "}
                    <Update>
                      {moment(course?.updatedAt).format("MMM,YYYY")}
                    </Update>
                  </UpdationSection>
                ) : (
                  <Skeleton variant="rounded" animation="wave" />
                )}
                <HiddenPurchaseSection>
                  {!courseAdded ? (
                    <CoursePrice>₹{course?.price}</CoursePrice>
                  ) : null}
                  <ButtonWrap>
                    {!courseAdded ? (
                      <>
                        <BuyButton
                          onClick={async () =>
                            checkoutHandler(course?.price, [course], User)
                          }
                        >
                          Buy now
                        </BuyButton>
                        {!cartAdded ? (
                          <AddCart onClick={() => addTocart(course)}>
                            Add to cart
                          </AddCart>
                        ) : (
                          <Link to="/cart">
                            <AddCart>Go to cart</AddCart>
                          </Link>
                        )}
                      </>
                    ) : (
                      <GoTo>Go to course</GoTo>
                    )}
                  </ButtonWrap>
                </HiddenPurchaseSection>
              </PartOne>
              <PartTwo>
                <CourseImg src={course?.img} />
                <PurchaseSection>
                  {!courseAdded ? (
                    <CoursePrice>₹{course?.price}</CoursePrice>
                  ) : null}
                  <ButtonWrap>
                    {!courseAdded ? (
                      <>
                        <BuyButton
                          onClick={() =>
                            checkoutHandler(
                              course?.price,
                              [course],
                              User,
                              setCongratsModalOpen
                            )
                          }
                        >
                          Buy now
                        </BuyButton>
                        {!cartAdded ? (
                          <AddCart onClick={() => addTocart(course)}>
                            Add to cart
                          </AddCart>
                        ) : (
                          <Link to="/cart">
                            <AddCart>Go to cart</AddCart>
                          </Link>
                        )}
                      </>
                    ) : (
                      <GoTo>Go to course</GoTo>
                    )}
                  </ButtonWrap>
                </PurchaseSection>
              </PartTwo>
            </IntroWrap>
          </IntroBlur>
        </IntroSection>
      </>
      <Wrapper>
        <DetailSection>
          <CourseSection>
            <Section>
              <DescriptionSection>
                <SectionHeading>Description</SectionHeading>
                {course ? (
                  <CourseDesc
                    dangerouslySetInnerHTML={{ __html: course?.description }}
                  />
                ) : (
                  <DescSkeleton>
                    <Skeleton variant="rounded" animation="wave" />
                    <Skeleton variant="rounded" animation="wave" />
                    <Skeleton variant="rounded" animation="wave" height={100} />
                    <Skeleton variant="rounded" animation="wave" />
                    <Skeleton variant="rounded" animation="wave" />
                    <Skeleton variant="rounded" animation="wave" height={100} />
                  </DescSkeleton>
                )}
              </DescriptionSection>
            </Section>
            <SectionHeading>Course content</SectionHeading>
            <VideoList id={id} />
          </CourseSection>
          <Section>
            <SectionHeading>Related Courses</SectionHeading>
            <RecommendationSection>
              <Recommend details={true} />
            </RecommendationSection>
          </Section>
        </DetailSection>

        <Section>
          <Course
            heading={`More Courses by "${course?.auther}"`}
            catagory={"development"}
            coursesByAuthor={coursesByAuthor && coursesByAuthor}
          />
        </Section>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ShowCourse;
