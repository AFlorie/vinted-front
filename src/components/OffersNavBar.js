import React from "react";

const OffersNavBar = ({ setSort, setLimit, totalOffers }) => {
  return (
    <nav className="OfferNavOptions">
      <select
        name="priceSort"
        id="priceSort"
        onChange={(event) => {
          setSort(event.target.value);
        }}
      >
        <option value="">Trier par</option>
        <option value="price-asc">Prix croissant</option>
        <option value="price-desc">Prix décroissant</option>
      </select>
      <select
        name="OffersPerPage"
        id="OffersPerPage"
        onChange={(event) => {
          setLimit(Number(event.target.value));
        }}
      >
        <option value="">Affichage</option>
        <option value="5">5 </option>
        <option value="10">10</option>
        <option value="50">50</option>
      </select>
      <span
        onClick={() => {
          setLimit(totalOffers);
        }}
      >
        Voir tout
      </span>
    </nav>
  );
};

export default OffersNavBar;
