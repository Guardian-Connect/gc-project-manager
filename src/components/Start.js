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
            // const siteName = client.s_name.toUpperCase();
            // if (siteName.includes(searchInput.toUpperCase())) {
            //   return true;
            // }
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
