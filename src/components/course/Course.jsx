import React, { useContext, useEffect, useState } from "react";
import { GetAllCoursesAPI } from "../../API/api";
import { CourseModalContext } from "../../App";
import Card from "../card/Card";
import { Container } from "../CommonStyles";
import {
  CardContainer,
  CardSection,
  CourseSlider,
  SliderSection,
  StyledSectionHeading,
  Wrapper,
} from "./Course.styles";
import { settings } from "./sliderSettings";

const Course = ({ heading, catagory, popularCourses, coursesByAuthor }) => {
  const { setCourseModalOpen, setCourseModalData } =
    useContext(CourseModalContext);
  const [Courses, setCourses] = useState([]);

  const sendData = (course) => {
    setCourseModalData(course);
    setCourseModalOpen((prev) => !prev);
  };
 
  useEffect(() => {
    const GetAllCourses = async () => {
      const res = await GetAllCoursesAPI(catagory);
      if (res.data.courses) {
        setCourses(res.data.courses);
      }
    };
    GetAllCourses();
  }, [catagory]);
  // const loaderNumber = [1, 2, 3, 4, 5, 6];


  return (
    <Container bgColor="transparent">
      <Wrapper>
        <StyledSectionHeading>{heading}</StyledSectionHeading>
        {
          (Courses.length||popularCourses?.length||coursesByAuthor?.length) > 4?
       
        <SliderSection>
          <CourseSlider {...settings}>
            {Courses
              &&Courses.map((course, index) => {
                  return (
                    <CardSection onClick={() => sendData(course)} key={index}>
                      <Card
                        title={course.courseName}
                        author={course.auther}
                        image={course.img}
                        rating={course.rating}
                        ratingCount={course.noOfRating}
                        price={course.price}
                      />
                    </CardSection>
                  );
                })
            }

            {popularCourses &&
              popularCourses.map((course, index) => {
                return (
                  <CardSection onClick={() => sendData(course)} key={index}>
                    <Card
                      title={course.courseName}
                      image={course.img}
                      author={course.auther}
                      rating={course.rating}
                      ratingCount={course.noOfRating}
                      price={course.price}
                    />
                  </CardSection> 
                );
              })}

            {coursesByAuthor
              &&coursesByAuthor.map((course, index) => {
                  return (
                    <CardSection onClick={() => sendData(course)} key={index}>
                      <Card
                        title={course.courseName}
                        author={course.auther}
                        image={course.img}
                        rating={course.rating}
                        ratingCount={course.noOfRating}
                        price={course.price}
                      />
                    </CardSection>
                  );
                }) 
              }
          </CourseSlider>
        </SliderSection>

        :
        <CardContainer>
          {

        Courses
              && Courses.map((course, index) => {
                  return (
                    <CardSection onClick={() => sendData(course)} key={index}>
                      <Card 
                        title={course.courseName}
                        author={course.auther}
                        image={course.img}
                        rating={course.rating}
                        ratingCount={course.noOfRating}
                        price={course.price}
                      />
                    </CardSection>
                  );
                })
              
          }
           
          {popularCourses &&
              popularCourses.map((course, index) => {
                return (
                  <CardSection onClick={() => sendData(course)} key={index}>
                    <Card
                      title={course.courseName}
                      image={course.img}
                      author={course.auther}
                      rating={course.rating}
                      ratingCount={course.noOfRating}
                      price={course.price}
                    />
                  </CardSection>
                );
              })}

              {coursesByAuthor
              && coursesByAuthor.map((course, index) => {
                  return (
                    <CardSection onClick={() => sendData(course)} key={index}>
                      <Card
                        title={course.courseName}
                        author={course.auther}
                        image={course.img}
                        rating={course.rating}
                        ratingCount={course.noOfRating}
                        price={course.price}
                      />
                    </CardSection>
                  );
                }) }
              
        </CardContainer>

      }

     
      </Wrapper>
    </Container>
  );
};

export default Course;
