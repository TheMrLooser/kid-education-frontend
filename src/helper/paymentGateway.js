import axios from "axios";
import { BuyNewCourseAPI, RemoveCourseFromCartAPI } from "../API/api";

export const checkoutHandler = async (
  amount,
  course,
  User,
  setCongratsModalOpen
) => {
  const {
    data: { order },
  } = await axios.post("https://kid-project.onrender.com/payment/checkout", {
    amount,
  });

  const BuyCourse = async () => {
    for (var i = 0; i < course.length; i++) {
      await BuyNewCourseAPI(course[i], User.id);
      await RemoveCourseFromCartAPI(course[i].courseId);
    }
    setCongratsModalOpen(true);
  };

  const getData = async (paymentId, orderId) => {
    await axios.post(
      "https://kid-project.onrender.com/payment/payment-call-back",
      {
        amount,
        courseId: course.id,
        userId: User.id,
        paymentId: paymentId,
        orderId: orderId,
      }
    );

    BuyCourse();
  };

  const options = {
    key: "rzp_test_tuHYS0gMqbNjea", // Enter the Key ID generated from the Dashboard
    amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Kid Project",
    description: "Course Purchase",

    order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: async function (response) {
      getData(response.razorpay_payment_id, response.razorpay_order_id);
    },
    prefill: {
      name: `${User.name}`,
      email: `${User.email}`,
      contact: `${User.phone}`,
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const razor = new window.Razorpay(options);
  razor.open();
};
