import { Skeleton } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetCoursesByTag } from "../../API/api";
import { Line } from "../../pages/cart/Cart.styles";
import { GlobalStyles } from "../CommonStyles";
import {
  CourseDetails,
  CourseName,
  DataWrap,
  Image,
  LeftSection,
  Price,
  Updated,
  Wrapper,
} from "./Recommend.styles";

const Recommend = ({ details }) => {
  const { id } = useParams();
  const [course, setCourse] = useState();

  useEffect(() => {
    const getCourse = async () => {
      const res = await GetCoursesByTag(id);
      setCourse(res.data.courses);
    };
    getCourse();
  }, [id]);

  return (
    <Wrapper details={details}>
      <GlobalStyles />
      {course ? (
        course.map((data) => {
          return (
            <Link to={`/course/${data.id}`}>
              <DataWrap>
                <LeftSection>
                  <Image src={data?.img} />
                  <CourseDetails>
                    <CourseName details={details}>
                      {data?.courseName}
                    </CourseName>
                    <Updated>
                      Updated on {moment(data?.updatedAt).format("MM/YYYY")}
                    </Updated>
                  </CourseDetails>
                </LeftSection>
                <Price>₹{data?.price}</Price>
              </DataWrap>
              <Line />
            </Link>
          );
        })
      ) : (
        <Skeleton variant="rounded" animation="wave" width={300} height={400} />
      )}
    </Wrapper>
  );
};

export default Recommend;
