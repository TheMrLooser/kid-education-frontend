import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetAllCourseCartAPI } from "../../API/api";
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
  const { User } = useContext(Authentication);
  const { setCourseModalOpen } = useContext(CourseModalContext);
  const [course, setCourse] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

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
      setTotalPrice(price);
    }
  }, [course]);

  return (
    <Container bgColor="#f7f7f7">
      <Header />
      <Wrapper>
        <LeftSection>
          <CartHeading>Shopping Cart:</CartHeading>

          <CourseListing>
            {course &&
              course.map((items, index) => {
                return (
                  <Link to={`/course/${items.courseId}`}>
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
                  </Link>
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
