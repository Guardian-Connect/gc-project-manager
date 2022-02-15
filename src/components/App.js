import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Start from "./Start";
import AppAppBar from "./modules/views/AppAppBar";
import { getSomething } from "../api";
import logo from "../assests/logo.gif";
const App = () => {
  const [errormessage, setMessage] = useState([]);
  const message = JSON.parse(sessionStorage.getItem("dispinf"));
  const [count, setCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSomething()
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
    }, 2000);
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
            <Route path="/second"></Route>
          </Switch>
        </Router>
      )}
    </>
  );
};

export default App;
