import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Heading from "../components/Heading";

const Home = () => {
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
