import React from "react";
import { useHistory } from "react-router-dom";

const Summary = () => {
  const history = useHistory();
  return (
    <div className="summary">
      <h3>Paiement effectué avec succès !</h3>
      <button
        onClick={() => {
          history.replace("/");
        }}
      >
        Revenir à l'accueil
      </button>
    </div>
  );
};

export default Summary;
