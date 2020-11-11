import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

import Header from "../components/Header";

const Offer = () => {
  const { id } = useParams();
  console.log(id);
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

  return (
    <>
      {isLoading ? (
        <p>Chargement en cours</p>
      ) : (
        <>
          <Header />
          <div className="offerContainer ">
            <div className="container">
              <img alt="article à vendre" />
              <section className="productInfo">
                <h1>prix</h1>
                <p>marque</p>
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
