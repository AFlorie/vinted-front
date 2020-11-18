import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation, Redirect } from "react-router-dom";

import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = () => {
  const location = useLocation();

  // console.log("test", name, price);
  return location.state ? (
    <Elements stripe={stripePromise}>
      <CheckoutForm name={location.state.name} price={location.state.price} />
    </Elements>
  ) : (
    <Redirect to="/login" />
  );
};

export default Payment;
