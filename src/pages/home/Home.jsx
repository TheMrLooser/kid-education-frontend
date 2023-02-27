import React, { useContext, useEffect, useState } from "react";
import { GetPopularCourseAPI } from "../../API/api";
import { Authentication } from "../../App";
import { GlobalStyles } from "../../components/CommonStyles";
import CoreProgram from "../../components/core program/CoreProgram";
import Course from "../../components/course/Course";
import CTA from "../../components/cta/CTA";
import Details from "../../components/details/Details";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Pros from "../../components/pros-section/Pros";
import Carousel from "../../components/slider/Carousel";
import { Box, Wrapper } from "./Home.styles";

const Home = () => {
  window.scrollTo(0, 0);
  const { setLoading, setAuthentication, isAuthenticated } =
    useContext(Authentication);

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

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setLoading(true);
      setAuthentication(true);
      console.log(isAuthenticated);
    }
  }, [isAuthenticated, setAuthentication, setLoading]);

  console.log(popularCourses);

  return (
    <Box>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <Carousel />
        <Pros />
        <CoreProgram />
        <Details />
        {popularCourses && (
          <Course heading="Courses" popularCourses={popularCourses} />
        )}
        <CTA CTAHeading={CTAHeading} CTACall={CTACall} />
      </Wrapper>
      <Footer />
    </Box>
  );
};

export default Home;
