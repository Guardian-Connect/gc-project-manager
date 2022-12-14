import React, { useEffect } from "react";
import AppAppBar from "./modules/views/AppAppBar";
import { getSomething } from "../api";
import { Typography, Card } from "@mui/material";
import Dispcardz from "./Dispcardz";
const Start = ({
  setMessage,
  count,
  setCount,
  searchInput,
  setSearchInput,
}) => {
  let message = JSON.parse(sessionStorage.getItem("dispinf"));

  return (
    <div className="appform">
      <h2>
        {message
          .filter((client, index) => {
            const clientsAdd = client.site_address;
            if (clientsAdd.includes(searchInput.toLowerCase())) {
              return true;
            }
            const clientsId = client.gvr_id;
            if (clientsId.includes(searchInput.toLowerCase())) {
              return true;
            }
            const clientsGp = client.gp_cust;
            if (clientsGp.includes(searchInput.toUpperCase())) {
              return true;
            }
            const company = client.cus_name;
            if (company.includes(searchInput.toUpperCase())) {
              return true;
            }
            const addId = client.add_id.toUpperCase();
            if (addId.includes(searchInput.toUpperCase())) {
              return true;
            }
          })
          .map((site) => (
            <div key={site.id}>
              <Dispcardz site={site} setCount={setCount} count={count} />
            </div>
          ))}
      </h2>
    </div>
  );
};

export default Start;
