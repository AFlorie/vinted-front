import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
    fetchData(id);
  }, [id]);

  //console.log(product.product_image.secure_url);

  return (
    <>
      {isLoading ? (
        <p>Chargement en cours</p>
      ) : (
        <>
          <div className="offerContainer ">
            <div className="container">
              <img
                src={product.product_image.secure_url}
                alt="article à vendre"
              />
              <section className="productInfo">
                <h2>{product.product_price} €</h2>
                <section className="sousProductInfo">
                  <div className="col-1">
                    {product.product_details.map((item, index) => {
                      const keys = Object.keys(item);
                      return <div key={index}>{keys[0]}</div>;
                    })}
                  </div>
                  <div className="col-2">
                    {product.product_details.map((item, index) => {
                      const keys = Object.keys(item);
                      return <div key={index}>{item[keys[0]]}</div>;
                    })}
                  </div>
                </section>
                <hr />
                <section className="sousProductInfo2">
                  <p>{product.product_name}</p>
                  <p className="description">{product.product_description}</p>
                  <p className="userInfo">
                    <img
                      src={product.owner.account.avatar.secure_url}
                      alt="userAvatar"
                    />
                    <span>{product.owner.account.username}</span>
                  </p>
                </section>
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
