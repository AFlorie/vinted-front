import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookie from "js-cookie";

import Header from "./components/Header";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Signup from "./containers/Signup";
import Login from "./containers/Login";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

function App() {
  const [search, setSearch] = useState("");

  let cookie = Cookie.get("userToken");
  const [token, setToken] = useState(cookie || null);
  // console.log(token);

  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      //création du cookie contenant le token de l'utilisateur
      Cookie.set("userToken", tokenToSet);
      setToken(tokenToSet);
    } else {
      // suppression du cookie
      Cookie.remove("userToken");
    }
  };

  return (
    <>
      <Router>
        <Header
          token={token}
          setToken={setToken}
          setUser={setUser}
          setSearch={setSearch}
        />
        <Switch>
          <Route path="/offer/:id">
            <Offer />
          </Route>

          <Route path="/signup">
            <Signup setUser={setUser} />
          </Route>

          <Route path="/login">
            <Login setUser={setUser} />
          </Route>

          <Route path="/">
            <Home setSearch={setSearch} search={search} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
