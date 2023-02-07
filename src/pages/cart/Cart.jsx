import { Alert, Collapse, IconButton, Snackbar } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import {
  BuyNewCourseAPI,
  GetAllCourseCartAPI,
  GetAllCoursesAddedInCartAPI,
  RemoveCourseFromCartAPI,
} from "../../API/api";
import { Authentication, CourseModalContext } from "../../App";
import Card from "../../components/card/Card";
import { Container } from "../../components/CommonStyles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { checkoutHandler } from "../../helper/paymentGateway";
import {
  Amount,
  CartHeading,
  CheckoutButton,
  CourseListing,
  LeftSection,
  Line,
  RightSection,
  Total,
  TotalSection,
  Wrapper,
} from "./Cart.styles";

const Cart = () => {
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

  const { User } = useContext(Authentication);
  const { setCourseModalOpen } = useContext(CourseModalContext);
  const [course, setCourse] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [coursesId, setCoursesId] = useState([]);

  useEffect(() => {
    const calculateAmnt = async () => {
      const res = await GetAllCourseCartAPI();
      setCourse(res.data.courses);
    };
    calculateAmnt();
  }, []);

  useEffect(() => {
    setCourseModalOpen(false);
    if (course != null) {
      let price = 0,
        i = 0;
      let ids = [];
      while (course.length > i) {
        ids.push(course[i].courseId);
        price = price + course[i].price;
        i++;
      }
      setCoursesId(ids);
      setTotalPrice(price);
    }
  }, [course]);

  return (
    <Container bgColor="#f7f7f7">
      <Header />
      <Wrapper>
        <LeftSection>
          <CartHeading>Shopping Cart:</CartHeading>
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
          <CourseListing>
            {course &&
              course.map((items, index) => {
                return (
                  <>
                    <Card
                      key={index}
                      cart="true"
                      title={items.courseName}
                      author={items.auther}
                      image={items.img}
                      rating={items.rating}
                      price={items.price}
                      courseId={items.courseId}
                    />
                    <Line />
                  </>
                );
              })}
          </CourseListing>
        </LeftSection>
        <RightSection>
          <TotalSection>
            <Total>Total: ({course ? course.length : 0} items)</Total>
            <Amount>₹{totalPrice}</Amount>
          </TotalSection>
          <CheckoutButton
            onClick={() => checkoutHandler(totalPrice, course, User)}
          >
            Checkout
          </CheckoutButton>
        </RightSection>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
