import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Vinted_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ token, setToken, setUser }) => {
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
          {token ? (
            <button
              onClick={() => {
                setToken(null);
                setUser(null);
              }}
            >
              Se déconnecter
            </button>
          ) : (
            <>
              <Link to="/signup">
                <button>S'inscrire </button>
              </Link>
              <Link to="/login">
                <button>Se connecter</button>
              </Link>{" "}
            </>
          )}

          <button className="sellProduct">Vends tes articles</button>
        </section>
      </div>
    </header>
  );
};

export default Header;
