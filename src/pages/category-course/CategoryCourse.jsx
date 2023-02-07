import { CircularProgress } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GetAllCoursesAPI } from "../../API/api";
import {
  Container,
  GlobalStyles,
  SectionHeading,
} from "../../components/CommonStyles";
import Header from "../../components/header/Header";
import SearchedCourse from "../../components/searched-course/SearchedCourse";
import { Line } from "../cart/Cart.styles";
import { ResultSection, Spinner } from "../search/Search.styles";
import { Wrapper } from "./CategoryCourse.styles";

const CategoryCourse = () => {
  const { category } = useParams();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await GetAllCoursesAPI(category);
      setCourses(res.data.courses);
    };
    getData();
  }, [category]);

  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <SectionHeading>"{category}" courses</SectionHeading>
        <ResultSection>
          {courses ? (
            courses.map((item) => {
              return (
                <Link to={`/course/${item.id}`}>
                  <SearchedCourse data={item} />
                  <Line />
                </Link>
              );
            })
          ) : (
            <Spinner>
              <CircularProgress color="inherit" />
            </Spinner>
          )}
        </ResultSection>
      </Wrapper>
    </Container>
  );
};

export default CategoryCourse;
