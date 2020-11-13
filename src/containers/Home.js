import React, { useState, useEffect } from "react";
import Axios from "axios";

import Heading from "../components/Heading";
import TotalOffers from "../containers/TotalOffers";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [totalOffers, setTotalOffers] = useState(0);
  const limit = 5;
  const [nbPages, setNbPages] = useState([]);

  const fetchData = async () => {
    try {
      const response = await Axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers?page=1&limit=5"
      );
      setArticles(response.data.offers);
      setTotalOffers(response.data.count);
      const totalPages = Math.ceil(totalOffers / limit); //nb d'articles / limite arrondi au chiffre au dessus en cas de décimaux
      const newTab = [...nbPages];
      for (let i = 1; i < totalPages; i++) {
        newTab.push(i);
      }
      setNbPages(newTab);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(nbPages);
  useEffect(() => {
    fetchData(totalOffers, nbPages);
  }, [totalOffers]);
  //console.log(nbPages);
  return (
    <>
      <Heading />
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : (
        <section className=" container">
          <TotalOffers articles={articles} />
          <div className="pagination">
            {totalOffers &&
              nbPages.map((page, index) => {
                return (
                  <button
                    key={index}
                    onClick={async () => {
                      try {
                        const response = await Axios.get(
                          `https://lereacteur-vinted-api.herokuapp.com/offers?page=${page}$limit=5`
                        );
                        setArticles(response.data.offers);
                        setIsLoading(false);
                      } catch (error) {
                        console.log(error.message);
                      }
                    }}
                  >
                    {page}
                  </button>
                );
              })}
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
