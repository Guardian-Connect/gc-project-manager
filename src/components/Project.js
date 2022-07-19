import React, { useEffect, useState } from "react";
import Dispcards from "./Dispcards";
import AppAppBar from "./modules/views/AppAppBar";
import { Typography } from "@mui/material";

const Project = ({ setMessage, searchInput, setSearchInput }) => {
  let test = [];
  const message = JSON.parse(sessionStorage.getItem("dispinfo"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
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
          //   const siteName = client.s_name.toUpperCase();
          //   if (siteName.includes(searchInput.toUpperCase())) {
          //     return true;
          //   }
        })
        .map((site) => (
          <div className="main" key={site.id}>
            {site.id === 5000000 ? (
              <div className="yellow">
                <Typography variant="h4" sx={{ width: "100%", flexShrink: 1 }}>
                  No Open Installs Found
                </Typography>
              </div>
            ) : (
              <Dispcards site={site} />
            )}
          </div>
        ))}
    </div>
  );
};
export default Project;
