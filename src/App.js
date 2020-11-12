import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Signup from "./containers/Signup";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/offer/:id">
            <Offer />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
