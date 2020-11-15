import React, { useState, useEffect } from "react";
import Axios from "axios";

import Heading from "../components/Heading";
import TotalOffers from "../containers/TotalOffers";
import OffersNavBar from "../components/OffersNavBar";

const Home = ({ search }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [totalOffers, setTotalOffers] = useState(0);
  const [limit, setLimit] = useState(5);
  const [indexPage, setIndexPage] = useState(1);
  const [sort, setSort] = useState("price-asc");

  const fetchData = async () => {
    try {
      const response = await Axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offers?page=${indexPage}&limit=${limit}&sort=${sort}&title=${search}`
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
    // eslint-disable-next-line
  }, [totalOffers, indexPage, limit, sort, search]);

  return (
    <>
      <Heading />
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : (
        <section className=" container">
          <OffersNavBar
            setSort={setSort}
            setLimit={setLimit}
            totalOffers={totalOffers}
          />
          <TotalOffers articles={articles} />
          <div className="buttonPagination">
            {newTab.map((page, index) => {
              return (
                <button
                  className={
                    indexPage === page + 1 ? "paginationFocus" : "pagination"
                  }
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
