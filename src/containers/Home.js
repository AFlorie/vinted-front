import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import Heading from "../components/Heading";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await Axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setArticles(response.data.offers);
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
      <Heading />
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : (
        <section className=" container">
          <div className="articles-container">
            {articles.map((article, index) => {
              return (
                <Link key={index} to={`/offer/${article._id}`}>
                  <article className="article">
                    <div className="userInfo">
                      <img
                        src={article.owner.account.avatar.secure_url}
                        alt="profilPicture"
                      />
                      <span>{article.owner.account.username}</span>
                    </div>
                    <div className="articlePhoto">
                      <img
                        src={article.product_image.secure_url}
                        alt="article à vendre"
                      />
                    </div>
                    <p className="price">{article.product_price} €</p>
                    <p>{article.product_details[1].TAILLE}</p>
                    <p>{article.product_details[0].MARQUE}</p>
                  </article>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
