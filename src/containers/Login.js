import React, { useState } from "react";
import Axios from "axios";
import { Link, useHistory, useLocation } from "react-router-dom";

const Login = ({ setUser }) => {
  const history = useHistory();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  console.log("test", location);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post(
        //https://api-exo-vinted.herokuapp.com/user/login
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      //transmission du token à la fonction setUser dans App.js
      if (response.data.token) {
        setUser(response.data.token);

        history.push(location.state.fromPublish ? "/publish" : "/");
      } else {
        alert("Une erreur est survenue");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage("Mauvais email et/ou mauvais mot de passe");
      }

      console.log(error.message);
    }
  };

  return (
    <section className="login">
      <h2>Se connecter</h2>
      <div className="message">{message}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <hr />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <hr />
        <input />
        <button type="submit">Se connecter</button>
        <Link to="/signup">
          <p className="connect">Pas encore de compte ? Inscris-toi !</p>
        </Link>
      </form>
    </section>
  );
};

export default Login;
