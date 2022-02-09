import React, { useEffect, useState } from "react";
import { getSomething } from "../api";
import { useHistory } from "react-router-dom";
import Dispcards from "./Dispcards";
import Header from "./Header";
import AppAppBar from "./modules/views/AppAppBar";
import { Typography } from "@mui/material";
const Start = ({ message, setMessage }) => {
  let history = useHistory();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getSomething()
      .then((response) => {
        console.log(response.dispinfo);
        setMessage(response.dispinfo);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, []);

  function handleClick() {
    history.push("/second");
  }
  return (
    <>
      <div id="header">
        <AppAppBar searchInput={searchInput} setSearchInput={setSearchInput} />
        {/* <Header searchInput={searchInput} setSearchInput={setSearchInput} /> */}
      </div>
      <div className="App">
        <h2>
          {message
            .filter((client, index) => {
              const clientsAdd = client.address;
              if (clientsAdd.includes(searchInput.toLowerCase())) {
                return true;
              }
              const clientsId = client.gvrid;
              if (clientsId.includes(searchInput.toLowerCase())) {
                return true;
              }
            })
            .map((site) => (
              <div className="main" key={site.id}>
                <div className="info">
                  <Typography variant="h4">
                    <div>GVR ID - {site.gvrid}</div>
                    <div>GP Customer - {site.gp}</div>
                    <div>
                      Site Address - {site.address}, {site.city}, {site.state}
                    </div>
                    <div>Number of Dispensers - {site.totaldisp}</div>
                  </Typography>
                </div>
                <Dispcards site={site} />
              </div>
            ))}
        </h2>
      </div>
    </>
  );
};

export default Start;
