import React from "react";

const Signup = () => {
  return (
    <section className="signup">
      <h2>S'inscrire</h2>
      <form>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Nom d'utilisateur"
        />
        <hr />
        <input type="email" id="email" name="email" placeholder="Email" />
        <hr />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Mot de passe"
        />
        <div className="largeCheckbox">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            className="checkbox"
          />
          <label for="newsletter">S'inscrire à notre newsletter</label>
        </div>
        <p className="terms">
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <button>S'inscrire</button>
        <p className="connect">Tu as déja un compte ? Connecte-toi !</p>
      </form>
    </section>
  );
};

export default Signup;
