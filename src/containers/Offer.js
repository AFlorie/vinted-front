import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

import Header from "../components/Header";

const Offer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await Axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      setProduct(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //console.log(product.product_image.secure_url);

  return (
    <>
      {isLoading ? (
        <p>Chargement en cours</p>
      ) : (
        <>
          <Header />
          <div className="offerContainer ">
            <div className="container">
              <img
                src={product.product_image.secure_url}
                alt="article à vendre"
              />
              <section className="productInfo">
                <h1>{product.product_price} €</h1>
                <p>{product.product_details[0].MARQUE}</p>
                <p>taille</p>
                <p>etat</p>
                <p>couleur</p>
                <p>emplacement</p>
                <hr />
                <p></p>
                <p></p>
                <p></p>
                <button>acheter</button>
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Offer;
