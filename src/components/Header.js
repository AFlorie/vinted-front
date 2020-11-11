import React from "react";
import Logo from "../assets/Vinted_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={Logo} alt="logo" />
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
          <button>S'inscrire </button>
          <button>Se connecter</button>
          <button>Vends tes articles</button>
        </section>
      </div>
    </header>
  );
};

export default Header;
