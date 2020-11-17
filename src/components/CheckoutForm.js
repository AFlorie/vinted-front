import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";

const CheckoutForm = () => {
  const elements = useElements();
  const stripe = useStripe();

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardElement);

    const stripeResponse = await stripe.createToken(cardElement);
    //console.log(stripeResponse);
    // console.log(stripeToken);
    const stripeToken = stripeResponse.token.id;

    const response = await axios.post(
      "https://lereacteur-vinted.netlify.app/payment",
      {
        stripeToken,
      }
    );

    console.log(response.data);
  };

  return (
    <>
      {!completed ? (
        <div className="payment">
          <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit">Valider</button>
          </form>
        </div>
      ) : (
        <span>Paiement effectué</span>
      )}
    </>
  );
};
export default CheckoutForm;
