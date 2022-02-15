import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Start from "./Start";
import AppAppBar from "./modules/views/AppAppBar";
import { getSomething } from "../api";
const App = () => {
  const [errormessage, setMessage] = useState([]);
  const message = JSON.parse(sessionStorage.getItem("dispinf"));
  const [count, setCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getSomething()
      .then((response) => {
        sessionStorage.setItem("dispinf", JSON.stringify(response.dispinfo));
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, []);

  return (
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
          {/* <Main
            message={message}
            setMessage={setMessage}
            count={count}
            setCount={setCount}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          /> */}
        </Route>
        <Route path="/second">
          {/* <Start
            message={message}
            // setMessage={setMessage}
            count={count}
            setCount={setCount}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          /> */}
        </Route>
        {/* <Route path="/majors">
          <Majors
            message={message}
            setMessage={setMessage}
            count={count}
            setCount={setCount}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
