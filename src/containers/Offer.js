import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

import Header from "../components/Header";

const Offer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (id) => {
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
  }, [id]);

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

                <section className="sousProductInfo">
                  <div className="info-col-1">
                    <p className="col-1">marque</p>
                    <p className="col-1">taille</p>
                    <p className="col-1">état</p>
                    <p className="col-1">couleur</p>
                    <p className="col-1">emplacement</p>
                  </div>

                  <div className="info-col-2">
                    <p className="col-2">{product.product_details[0].MARQUE}</p>
                    <p className="col-2">{product.product_details[1].TAILLE}</p>
                    <p className="col-2">{product.product_details[2].ÉTAT}</p>
                    <p className="col-2">
                      {product.product_details[3].COULEUR}
                    </p>
                    <p className="col-2">emplacement à remplir</p>
                  </div>
                </section>

                <hr />
                <p className="description">{product.product_description}</p>
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
