import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = ({ product }) => {
  const location = useLocation();
  const { name, price } = location.state;

  // console.log("test", name, price);
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm name={name} price={price} />
    </Elements>
  );
};

export default Payment;
