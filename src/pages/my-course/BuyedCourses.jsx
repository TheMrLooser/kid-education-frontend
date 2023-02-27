import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetAllBuyedCourses } from "../../API/api";
import { Container, SpinnerSection } from "../../components/CommonStyles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { CartHeading } from "../cart/Cart.styles";
import {
  AuthorName,
  CardWrap,
  CourseImg,
  CourseList,
  CourseName,
  CourseSection,
  Wrapper,
} from "./BuyedCourses.styles";

const BuyedCourses = () => {
  const [courses, setCourses] = useState();
  useEffect(() => {
    const getCourses = async () => {
      const res = await GetAllBuyedCourses();
      setCourses(res.data.courses);
    };
    getCourses();
  }, []);

  return (
    <Container bgColor="#f7f7f7">
      <Header />
      <Wrapper>
        <CourseSection>
          <CartHeading>My Courses</CartHeading>
          <CourseList>
            {courses ? (
              courses?.map((items, index) => {
                return (
                  <Link
                    to={`/course/${items.courseId ? items.courseId : items.id}`}
                    key={index}
                  >
                    <CardWrap>
                      <CourseImg src={items.img} />
                      <CourseName>{items.courseName}</CourseName>
                      <AuthorName>{items.auther}</AuthorName>
                    </CardWrap>
                  </Link>
                );
              })
            ) : (
              <SpinnerSection>
                <CircularProgress color="inherit" />
              </SpinnerSection>
            )}
          </CourseList>
        </CourseSection>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default BuyedCourses;
