import React, { useEffect, useState } from "react";
import { GetPopularCourseAPI } from "../../API/api";
import { GlobalStyles } from "../../components/CommonStyles";
import CoreProgram from "../../components/core program/CoreProgram";
import Course from "../../components/course/Course";
import CTA from "../../components/cta/CTA";
import Details from "../../components/details/Details";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import CourseModal from "../../components/modal/display-course/CourseModal";
import Pros from "../../components/pros-section/Pros";
import Carousel from "../../components/slider/Carousel";
import { coursesData } from "./course";
import { Box, Wrapper } from "./Home.styles";

const Home = () => {
  const CTAHeading =
    "Each student needs something different to shine. Let's find out together.";
  const CTACall = "Get Started";

  const [popularCourses, setPopularCourses] = useState(null);
  useEffect(() => {
    const getPopularCourses = async () => {
      const res = await GetPopularCourseAPI();
      setPopularCourses(res.data.courses);
    };
    getPopularCourses();
  }, []);

  return (
    <Box>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <Carousel />
        <Pros />
        <CoreProgram />
        <Details />
        <Course heading="Courses" popularCourses={coursesData} />
        <CTA CTAHeading={CTAHeading} CTACall={CTACall} />
      </Wrapper>
      <Footer />
    </Box>
  );
};

export default Home;
