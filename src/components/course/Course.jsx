import React, { useContext, useEffect, useState } from "react";
import { GetAllCoursesAPI } from "../../API/api";
import { CourseModalContext } from "../../App";
import Card from "../card/Card";
import { Container } from "../CommonStyles";
import {
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
  const [Courses, setCourses] = useState(null);

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
  const loaderNumber = [1, 2, 3, 4, 5, 6];

  return (
    <Container bgColor="transparent">
      <Wrapper>
        <StyledSectionHeading>{heading}</StyledSectionHeading>
        <SliderSection>
          <CourseSlider {...settings}>
            {Courses
              ? Courses.map((course, index) => {
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
              : loaderNumber.map((index) => {
                  return (
                    <CardSection key={index}>
                      <Card key={index} loading={Courses ? false : true} />
                    </CardSection>
                  );
                })}
            {popularCourses &&
              popularCourses.map((course, index) => {
                return (
                  <CardSection onClick={() => sendData(course)} key={index}>
                    <Card
                      title={course.title}
                      image={course.src}
                      author={course.auther}
                      rating={course.rating}
                      ratingCount={course.noOfRating}
                      price={course.price}
                    />
                  </CardSection>
                );
              })}

            {coursesByAuthor
              ? coursesByAuthor.map((course, index) => {
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
              : loaderNumber.map((index) => {
                  return (
                    <CardSection key={index}>
                      <Card key={index} loading={Courses ? false : true} />
                    </CardSection>
                  );
                })}
          </CourseSlider>
        </SliderSection>
      </Wrapper>
    </Container>
  );
};

export default Course;
