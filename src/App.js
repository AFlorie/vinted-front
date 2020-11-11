import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import Offer from "./containers/Offer";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLodading, setIsLoading] = useState(true);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/offer">
            <Offer />
          </Route>
          <Route path="/">
            <Home
              articles={articles}
              setArticles={setArticles}
              isLodading={isLodading}
              setIsLoading={setIsLoading}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
