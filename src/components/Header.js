import React from "react";
import Logo from "../assets/Vinted_logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={Logo} alt="logo" />
        <input
          type="text"
          id="search"
          name="search"
          placeholder="recherche des articles"
        ></input>
        <button>s'inscrire | se connecter</button>
        <button>Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
