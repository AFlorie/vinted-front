import React from "react";
import { Link } from "react-router-dom";

const TotalOffers = ({ articles }) => {
  return (
    <div className="articles-container">
      {articles.map((article, index) => {
        return (
          <Link key={index} to={`/offer/${article._id}`}>
            <article className="article">
              <div className="userInfo">
                <img
                  src={
                    article.owner.account.avatar &&
                    article.owner.account.avatar.secure_url
                  }
                  alt=""
                />
                <span>{article.owner.account.username}</span>
              </div>
              <div className="articlePhoto">
                <img
                  src={article.product_image.secure_url}
                  alt="article à vendre"
                />
              </div>
              <p className="price">{article.product_price} €</p>
              <p>{article.product_details[1].TAILLE}</p>
              <p>{article.product_details[0].MARQUE}</p>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default TotalOffers;
