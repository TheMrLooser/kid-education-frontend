import { CloseOutlined } from "@mui/icons-material";
import { Alert, Skeleton, Snackbar } from "@mui/material";
import moment from "moment";
import React, { useContext, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AddToCartAPI,
  GetAllBuyedCourses,
  GetAllCourseCartAPI,
} from "../../../API/api";
import { Authentication, CourseModalContext } from "../../../App";
import { GlobalStyles } from "../../CommonStyles";

import {
  AddToCart,
  Box,
  Break,
  ButtonSection,
  BuyNow,
  CancelIconStyle,
  CourseImage,
  Desc,
  Description,
  ImageSection,
  ModalWrap,
  StyledAuthor,
  StyledTitle,
  UpdatedDate,
  Wrapper,
} from "./CourseModal.styles";

const CourseModal = () => {
  //Alert section
  const [courseAdded, setCourseAdded] = useState();
  const [cartAdded, setCartAdded] = useState();
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

  if (alertOpen) {
    setTimeout(() => {
      setAlertOpen(false);
    }, 10000);
  }

  const { setCourseModalOpen, courseModalData } =
    useContext(CourseModalContext);
  const { User } = useContext(Authentication);

  const addTocart = async (data) => {
    const res = await AddToCartAPI(data, User.id);
    if (res.data.error) {
      return setAlert("error", res.data.message, true);
    }

    setAlert("success", res.data.message, true);
    setCartAdded(true);
  };

  const goToCourse = () => {
    setCourseModalOpen((prev) => !prev);
  };

  useLayoutEffect(() => {
    const getCourses = async () => {
      const res = await GetAllBuyedCourses();
      const added = res.data.courses.filter(
        (course) => course.courseId === courseModalData.id
      );

      const cartData = await GetAllCourseCartAPI();
      const add = cartData.data.courses.filter(
        (course) => course.courseId === courseModalData.id
      );

      setCartAdded(add.length === 0 ? false : true);
      setCourseAdded(added.length === 0 ? false : true);
    };
    getCourses();
  }, [courseModalData, cartAdded]);

  return (
    <Box>
      <GlobalStyles />
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
      <Wrapper>
        <CloseOutlined
          sx={CancelIconStyle}
          onClick={() => setCourseModalOpen((prev) => !prev)}
        />
        {true ? (
          <ModalWrap>
            <ImageSection>
              <CourseImage
                onContextMenu={(e) => e.preventDefault()}
                src={courseModalData?.img}
              />
            </ImageSection>
            <Description>
              <StyledTitle>{courseModalData?.courseName}</StyledTitle>
              <StyledAuthor>Created by: {courseModalData?.auther}</StyledAuthor>
              <UpdatedDate>
                <Break>Updated: </Break>{" "}
                {moment(courseModalData?.updatedAt).format("MMMM,YYYY")}
              </UpdatedDate>
              <Desc
                dangerouslySetInnerHTML={{
                  __html: courseModalData?.description,
                }}
              ></Desc>
              <ButtonSection>
                {!courseAdded &&
                  (!cartAdded ? (
                    <AddToCart onClick={() => addTocart(courseModalData)}>
                      Add to cart
                    </AddToCart>
                  ) : (
                    <Link to="/cart">
                      <AddToCart>Go to cart</AddToCart>
                    </Link>
                  ))}
                <Link to={`/course/${courseModalData?.id}`}>
                  <BuyNow onClick={() => goToCourse()}>View course</BuyNow>
                </Link>
              </ButtonSection>
            </Description>
          </ModalWrap>
        ) : (
          <>
            <Skeleton variant="rectangular" height={150} width={300} />
            <Skeleton variant="text" width={300} height={50} />
            <Skeleton variant="text" width={300} height={50} />
          </>
        )}
      </Wrapper>
    </Box>
  );
};

export default CourseModal;
