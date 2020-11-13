import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import Heading from "../components/Heading";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [totalOffers, setTotalOffers] = useState(0);
  const limit = 10;
  const [nbPages, setNbPages] = useState([]);

  const getTotalPages = () => {
    const totalPages = Math.ceil(totalOffers / limit);
    const newTab = [...nbPages];
    for (let i = 0; i < totalPages; i++) {
      newTab.push(i);
      setNbPages(newTab);
    }
  };

  useEffect(() => {
    getTotalPages(totalOffers, limit, nbPages);
  }, [totalOffers]);

  const fetchData = async () => {
    try {
      const response = await Axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setArticles(response.data.offers);
      setTotalOffers(response.data.count);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  //console.log(nbPages);
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
          <div>
            {totalOffers &&
              nbPages.map((button, index) => {
                return <button key={index}>{button}</button>;
              })}
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
