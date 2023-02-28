import { getDownloadURL, getStorage, ref } from "@firebase/storage";
import React, { useContext, useEffect, useState } from "react";
import { GetPopularCourseAPI } from "../../API/api";
import { Authentication } from "../../App";
import { GlobalStyles } from "../../components/CommonStyles";
import CoreProgram from "../../components/core program/CoreProgram";
import Course from "../../components/course/Course";
import CTA from "../../components/cta/CTA";
import Details from "../../components/details/Details";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Pros from "../../components/pros-section/Pros";
import Carousel from "../../components/slider/Carousel";
import { app } from "../../firebaseConfig";
import { Box, Wrapper } from "./Home.styles";

const Home = () => {
  const [video, setVideo] = useState([]);

  const storage = getStorage(app);
  window.scrollTo(0, 0);
  const { setLoading, setAuthentication, isAuthenticated } =
    useContext(Authentication);

  const CTAHeading =
    "Each student needs something different to shine. Let's find out together.";
  const CTACall = "Get Started";

  const [popularCourses, setPopularCourses] = useState(null);
  useEffect(() => {
    getDownloadURL(ref(storage, "assets/HOME/HOME VIDEO.mp4")).then((url) => {
      setVideo(url);
    });

    const getPopularCourses = async () => {
      const res = await GetPopularCourseAPI();
      setPopularCourses(res.data.courses);
    };
    getPopularCourses();
  }, [storage]);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setLoading(true);
      setAuthentication(true);
      console.log(isAuthenticated);
    }
  }, [isAuthenticated, setAuthentication, setLoading]);

  return (
    <Box>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <Carousel video={video} />
        <Pros />
        <CoreProgram />
        <Details />
        {popularCourses?.length !== 0 && (
          <Course heading="Courses" popularCourses={popularCourses} />
        )}
        <CTA CTAHeading={CTAHeading} CTACall={CTACall} />
        <Faq />
      </Wrapper>
      <Footer />
    </Box>
  );
};

export default Home;
