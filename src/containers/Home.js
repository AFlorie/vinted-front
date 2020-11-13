import React, { useState, useEffect } from "react";
import Axios from "axios";

import Heading from "../components/Heading";
import TotalOffers from "../containers/TotalOffers";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [totalOffers, setTotalOffers] = useState(0);
  const limit = 5;
  const [indexPage, setIndexPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await Axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offers?page=${indexPage}&limit=${limit}`
      );
      setArticles(response.data.offers);
      setTotalOffers(response.data.count);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const totalPages = Math.ceil(totalOffers / limit); //nb d'articles / limite arrondi au chiffre au dessus en cas de décimaux
  let newTab = [];
  for (let i = 0; i < totalPages; i++) {
    newTab.push(i);
  }

  useEffect(() => {
    fetchData(totalOffers);
  }, [totalOffers, indexPage]);

  console.log("nb pages", newTab);

  return (
    <>
      <Heading />
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : (
        <section className=" container">
          <TotalOffers articles={articles} />
          <div className="pagination">
            {newTab.map((page, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setIndexPage(page + 1);
                  }}
                >
                  {page + 1}
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
