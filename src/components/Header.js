import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Vinted_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="intput">
          <i className="inputLogo">
            <FontAwesomeIcon icon="search" />
          </i>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="recherche des articles"
          ></input>
        </div>
        <section>
          <Link to="/signup">
            <button>S'inscrire </button>
          </Link>
          <button>Se connecter</button>
          <button>Vends tes articles</button>
        </section>
      </div>
    </header>
  );
};

export default Header;
