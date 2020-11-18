import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation, Redirect } from "react-router-dom";

import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = ({ token }) => {
  // console.log(token);
  const location = useLocation();

  const { name, price } = location.state;

  // console.log("test", name, price);
  return token ? (
    <Elements stripe={stripePromise}>
      <CheckoutForm name={name} price={price} />
    </Elements>
  ) : (
    <Redirect to="/login" />
  );
};

export default Payment;
