import React, { useState, useEffect } from "react";
import Axios from "axios";

import Heading from "../components/Heading";
import TotalOffers from "../containers/TotalOffers";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [totalOffers, setTotalOffers] = useState(0);
  const limit = 10;
  const [nbPages, setNbPages] = useState([]);

  useEffect(() => {
    const getTotalPages = () => {
      const totalPages = Math.ceil(totalOffers / limit);
      const newTab = [...nbPages];
      for (let i = 1; i < totalPages; i++) {
        newTab.push(i);
        setNbPages(newTab);
      }
    };
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
          <TotalOffers articles={articles} />
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
