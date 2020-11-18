import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";

import Summary from "./Summary";

const CheckoutForm = ({ name, price }) => {
  const elements = useElements();
  const stripe = useStripe();

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardElement);

    const stripeResponse = await stripe.createToken(cardElement);
    //console.log(stripeResponse);
    // console.log(stripeToken);
    //console.log(name, price);
    const stripeToken = stripeResponse.token.id;

    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/payment",
      {
        token: stripeToken,
        title: name,
        amount: price,
      }
    );
    // console.log(response.data);

    if (response.data.status === "succeeded") {
      setCompleted(true);
    }
  };

  return (
    <>
      {!completed ? (
        <div className="payment">
          <form onSubmit={handleSubmit}>
            <h2>Paiement de {price} euros</h2>
            <CardElement />
            <button type="submit">Payer</button>
          </form>
        </div>
      ) : (
        <Summary />
      )}
    </>
  );
};
export default CheckoutForm;
