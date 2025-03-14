import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Start from "./Start";
import Details from "./Details";
import AppAppBar from "./modules/views/AppAppBar";
import Right from "./Right";
import {
  getSomething,
  getReportData,
  getEmail,
  addSite,
  addEmail,
  createDisp,
  getTicketing,
} from "../api";
import logo from "../assests/logo.gif";
import Project from "./Project";
import SideBar from "./SideBar";
import Report from "./Report";
import CsvDownload from "react-json-to-csv";
import Contact from "./Contact";
import Allsites from "./Allsites";
import Gctracker from "./Gctracker";
import Gctrackerdisplay from "./Gctrackerdisplay";
import { addTicket } from "../api";
import Login from "./Login";
import Alerticket from "./Alerticket";
import Inboundcalldisplay from "./Inboundcalldisplay";
import Inboundcall from "./Inboundcall";
import Projectdisplay from "./Projectdisplay";
import Pcntracker from "./Pcntracker";
import Addresslookup from "./Addresslookup";
// import { getBfr } from "../api";
import Rrsmatrix from "./Rrsmatrix";
import Alertticketlookup from "./Alertticketlookup";
import Troubleddisplay from "./Troubledticket";
import Troubledticket from "./Troubledticket";
import Rrsmatrixmain from "./Rrsmatrixmain";
import Customeremail from "./Customeremail";
const App = () => {
  // const user = sessionStorage.getItem("token");
  const [errormessage, setMessage] = useState([]);
  const [contactInfo, setContactInfo] = useState([]);
  const message = JSON.parse(sessionStorage.getItem("dispinf"));
  let [count, setCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [nameButton, setNameButton] = useState("");
  const [mockData, setMockData] = useState("");
  const [header, setHeader] = useState("Dispenser Information");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // React.useEffect(async () => {
  //   await getBfr();
  // }, []);

  if (sessionStorage.getItem("token") < 27) {
    return (
      <Login
        setMockData={setMockData}
        getSomething={getSomething}
        setMessage={setMessage}
      />
    );
  } else {
    return (
      <>
        {/* loading icon to help with re-rendering etc*/}
        {/* {console.log("user?", user.length)} */}
        {loading ? (
          <div className="AppLoading">
            <img src={logo} alt="Loading..." className="loading" />
          </div>
        ) : (
          <Router>
            <SideBar mockData={mockData} setSearchInput={setSearchInput} />
            <Right />

            <div>
              <AppAppBar
                contactInfo={contactInfo}
                setContactInfo={setContactInfo}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                count={count}
                header={header}
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
                  setHeader={setHeader}
                />
              </Route>
              {/* What Renders when open notes button is clicked */}
              <Route path="/second">
                <Project
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  setHeader={setHeader}
                />
              </Route>
              <Route path="/alerticket">
                <Alerticket
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  setHeader={setHeader}
                />
              </Route>
              <Route path="/report">
                <Report
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  setHeader={setHeader}
                />
              </Route>
              <Route exact path="/addresslookup">
                {/* Initial loading */}
                <Addresslookup setHeader={setHeader} />
              </Route>
              <Route path="/gctrackerdisplay">
                <Gctrackerdisplay
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  setHeader={setHeader}
                />
              </Route>
              <Route path="/details">
                <Details
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  setHeader={setHeader}
                />
              </Route>
              <Route path="/contact">
                <Contact
                  contactInfo={contactInfo}
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  setHeader={setHeader}
                />
              </Route>
              <Route path="/inbounddisplay">
                <Inboundcalldisplay
                  contactInfo={contactInfo}
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  setHeader={setHeader}
                />
              </Route>
              <Route path="/inboundcall">
                <Inboundcall
                  contactInfo={contactInfo}
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  setHeader={setHeader}
                />
              </Route>
              <Route path="/allsites">
                <Allsites
                  addSite={addSite}
                  addEmail={addEmail}
                  createDisp={createDisp}
                  setHeader={setHeader}
                />
              </Route>
              <Route path="/gctracker">
                <Gctracker
                  addTicket={addTicket}
                  message={message}
                  setMessage={setMessage}
                  setHeader={setHeader}
                />
              </Route>
              <Route path="/pcnalert">
                <Pcntracker
                  addTicket={addTicket}
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  setHeader={setHeader}
                />
              </Route>
              <Route path="/project">
                <Projectdisplay
                  addTicket={addTicket}
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  setHeader={setHeader}
                />
              </Route>
              <Route path="/troubled">
                <Troubledticket
                  addTicket={addTicket}
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  setHeader={setHeader}
                />
              </Route>
              <Route path="/rrsmatrix">
                <Rrsmatrixmain
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  setHeader={setHeader}
                />
              </Route>
              <Route path="/alertticketlookup">
                <Alertticketlookup />
              </Route>
              <Route path="/customeremail">
                <Customeremail />
              </Route>
              <Route exact path="/login">
                {/* Initial loading */}
                <Login />
              </Route>
              {/* <Route path="/login">
                <Login />
              </Route> */}
            </Switch>
          </Router>
        )}
      </>
    );
  }
};

export default App;
