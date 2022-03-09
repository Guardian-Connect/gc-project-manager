import React, { useEffect } from "react";
import Dispcards from "./Dispcards";
import AppAppBar from "./modules/views/AppAppBar";
import { getSomething } from "../api";
const Start = ({
  setMessage,
  count,
  setCount,
  searchInput,
  setSearchInput,
}) => {
  let message = JSON.parse(sessionStorage.getItem("dispinf"));

  return (
    <div className="app">
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
            const company = client.company;
            if (company.includes(searchInput.toUpperCase())) {
              return true;
            }
          })
          .map((site) => (
            <div className="main" key={site.id}>
              <Dispcards site={site} setCount={setCount} count={count} />
            </div>
          ))}
      </h2>
    </div>
  );
};

export default Start;
