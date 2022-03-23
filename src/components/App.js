import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Start from "./Start";
import AppAppBar from "./modules/views/AppAppBar";
import { getSomething, getReportData } from "../api";
import logo from "../assests/logo.gif";
import Project from "./Project";
import SideBar from "./SideBar";
import Report from "./Report";
import CsvDownload from "react-json-to-csv";
const App = () => {
  const [errormessage, setMessage] = useState([]);
  const message = JSON.parse(sessionStorage.getItem("dispinf"));
  let [count, setCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [nameButton, setNameButton] = useState("");
  const [mockData, setMockData] = useState("");
  useEffect(async () => {
    await getSomething()
      .then((response) => {
        console.log(response.dispinfo);
        sessionStorage.setItem("dispinf", JSON.stringify(response.dispinfo));
        setMockData(response.dispinfo);
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

  useEffect(() => {
    getReportData("2022-3-10", "2022-3-15", "%").then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <>
      {/* loading icon to help with re-rendering etc*/}

      {loading ? (
        <div className="AppLoading">
          <img src={logo} alt="Loading..." className="loading" />
        </div>
      ) : (
        <Router>
          <SideBar mockData={mockData} />
          <div>
            <AppAppBar
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              count={count}
            />
          </div>
          <Switch>
            <Route exact path="/">
              {/* Initial loading */}
              <Start
                message={message}
                setMessage={setMessage}
                count={count}
                setCount={setCount}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
            </Route>
            {/* What Renders when open notes button is clicked */}
            <Route path="/second">
              <Project
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
            </Route>
            <Route path="/report">
              <Report />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
};

export default App;
