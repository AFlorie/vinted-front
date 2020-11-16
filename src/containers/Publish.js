import React from "react";

const Publish = () => {
  return (
    <div className="publish">
      <div className="container">
        <h2>Vends ton article</h2>
        <form>
          <section>
            <input type="file" id="offerPicture" name="offerPicture" />
          </section>
          <section>
            <div className="col-1">
              <span>Titre</span>
              <span>Décris ton article</span>
            </div>
            <div className="col-2">
              <input type="text" id="offerTitle" name="offerTitle" />
              <textarea
                name="offerDescription"
                id="offerDescription"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </section>
          <section>
            <div className="col-1">
              <span>Marque</span>
              <span>Taille</span>
              <span>Couleur</span>
              <span>Etat</span>
              <span>Lieu</span>
            </div>
            <div className="col-2">
              <input type="text" id="offerBrand" name="offerBrand" />
              <input type="text" id="offerSize" name="offerSize" />
              <input type="text" id="offerColor" name="offerColor" />
              <input type="text" id="offerCondition" name="offerCondition" />
              <input
                type="text"
                id="offerEmplacement"
                name="offerEmplacement"
              />
            </div>
          </section>
          <section>
            <div className="col-1">
              <span>Prix</span>
              <span></span>
            </div>
            <div className="col-2">
              <input type="text" id="offerPrice" name="offerPrice" />
              <span>
                <input type="checkbox" id="" name="" />
                <label>je suis intéressé(e) par les échanges</label>
              </span>
            </div>
          </section>
          <button>Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default Publish;
