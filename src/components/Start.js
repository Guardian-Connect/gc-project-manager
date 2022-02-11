import React, { useEffect, useState } from "react";
import { getSomething } from "../api";
import { useHistory } from "react-router-dom";
import Dispcards from "./Dispcards";
import Header from "./Header";
import AppAppBar from "./modules/views/AppAppBar";
import { format } from "date-fns";
const Start = ({ message, setMessage }) => {
  let history = useHistory();
  const [searchInput, setSearchInput] = useState("");
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    getSomething()
      .then((response) => {
        setMessage(response.dispinfo);
        // console.log(response.dispinfo);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, []);

  return (
    <>
      <div id="header">
        <AppAppBar searchInput={searchInput} setSearchInput={setSearchInput} />
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
              const clientsGp = client.gp;
              if (clientsGp.includes(searchInput.toUpperCase())) {
                return true;
              }
            })
            .map((site) => (
              <div className="main" key={site.id}>
                <Dispcards site={site} />
              </div>
            ))}
        </h2>
      </div>
    </>
  );
};

export default Start;
