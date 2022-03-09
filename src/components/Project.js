import React, { useEffect, useState } from "react";
import Dispcards from "./Dispcards";
import AppAppBar from "./modules/views/AppAppBar";

const Project = ({ setMessage, searchInput, setSearchInput }) => {
  let test = [];
  const message = JSON.parse(sessionStorage.getItem("dispinfo"));
  const [loading, setLoading] = useState(true);
  // let countDis = JSON.parse(sessionStorage.getItem("disconnected")).length;
  // let countCon = JSON.parse(sessionStorage.getItem("connected")).length;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      {console.log(message)}
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
            <Dispcards site={site} />
          </div>
        ))}
    </div>
  );
};
export default Project;
