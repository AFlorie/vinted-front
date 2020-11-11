import React from "react";
import Effect from "../assets/img/effect.svg";

const Heading = () => {
  return (
    <section className="heading">
      <div>
        <h1>Prêts à faire du tri dans vos placards ?</h1>
        <button>Commencer à vendre</button>
        <p>Découvrir comment ça marche</p>
      </div>
      <img className="effect" src={Effect} alt="" />
    </section>
  );
};

export default Heading;
