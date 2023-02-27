import React, { useEffect, useState } from "react";
import { Container, GlobalStyles } from "../../components/CommonStyles";
import {
  DisplayImage,
  ImageSection,
  InfoDesc,
  InfoSection,
  InfoTitle,
  LeftSection,
  RightSection,
  Wrapper,
} from "./Products.styles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Course from "../../components/course/Course";
import SearchBox from "../../components/search field/SearchBox";
import Congrats from "../../components/congrats-card/Congrats";
import { GetAllCategory } from "../../API/api";
import { Spinner } from "../search/Search.styles";
import { CircularProgress } from "@mui/material";

const Products = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getData = async () => {
      const res = await GetAllCategory();
      setCategory(res.data.courses);
    };
    getData();
  }, []);

  return (
    <Container bgColor="#f7f7f7">
      <GlobalStyles />
      <Congrats />
      <Header />
      <Wrapper>
        <InfoSection>
          <LeftSection>
            <InfoTitle>Let's Learn New Course & Gain More Skills</InfoTitle>
            <InfoDesc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi.
            </InfoDesc>
            <SearchBox />
          </LeftSection>
          <RightSection>
            <ImageSection>
              <DisplayImage src="./assets/online-learning.svg" />
            </ImageSection>
          </RightSection>
        </InfoSection>
        {category ? (
          category.map((data) => (
            <Course
              heading={`Top courses in ${data?.catagory}`}
              catagory={data?.catagory}
            />
          ))
        ) : (
          <Spinner>
            <CircularProgress />
          </Spinner>
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Products;
