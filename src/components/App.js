import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Start from "./Start";
import AppAppBar from "./modules/views/AppAppBar";
import { getSomething } from "../api";
import logo from "../assests/logo.gif";
import Project from "./Project";
const App = () => {
  const [errormessage, setMessage] = useState([]);
  const message = JSON.parse(sessionStorage.getItem("dispinf"));
  let [count, setCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [nameButton, setNameButton] = useState("");
  useEffect(async () => {
    await getSomething()
      .then((response) => {
        sessionStorage.setItem("dispinf", JSON.stringify(response.dispinfo));
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="AppLoading">
          <img src={logo} alt="Loading..." className="loading" />
        </div>
      ) : (
        <Router>
          <Switch>
            <Route exact path="/">
              <Start
                message={message}
                setMessage={setMessage}
                count={count}
                setCount={setCount}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
            </Route>
            <Route path="/second">
              <Project
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
};

export default App;
