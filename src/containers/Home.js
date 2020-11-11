import React, { useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Heading from "../components/Heading";

const Home = ({ articles, setArticles, isLodading, setIsLoading }) => {
  console.log(articles);
  const fetchData = async () => {
    const response = await Axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );
    setArticles(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Heading />
      <section className="articles-container">
        <p> carousel d'articles</p>
        <Link to="/offer">article</Link>
      </section>
    </>
  );
};

export default Home;
