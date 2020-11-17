import React, { useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Signup = ({ setUser }) => {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post(
        // https://api-exo-vinted.herokuapp.com/user/signup
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      // console.log(response.data.token);
      //transmission du token à la fonction setUser dans App.js
      setUser(response.data.token);
      history.push("/");
    } catch (error) {
      setMessage(error.response.data.message);
      console.log(error.response);
    }
  };

  return (
    <section className="signup">
      <h2>S'inscrire</h2>
      <div className="message">{message}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <hr />
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
        <div className="largeCheckbox">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            className="checkbox"
          />
          <label htmlFor="newsletter">S'inscrire à notre newsletter</label>
        </div>
        <p className="terms">
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <button type="submit">S'inscrire</button>
        <Link to="/login">
          <p className="connect">Tu as déja un compte ? Connecte-toi !</p>
        </Link>
      </form>
    </section>
  );
};

export default Signup;
