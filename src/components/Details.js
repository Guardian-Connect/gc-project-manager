import React, { useEffect, useState } from "react";
import Dispcards from "./Dispcards";
import AppAppBar from "./modules/views/AppAppBar";
import { Typography } from "@mui/material";

const Details = ({ setMessage, searchInput, setSearchInput }) => {
  let test = [];
  const message = JSON.parse(sessionStorage.getItem("specinfo"));
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
          const siteName = client.s_name.toUpperCase();
          if (siteName.includes(searchInput.toUpperCase())) {
            return true;
          }
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
export default Details;
