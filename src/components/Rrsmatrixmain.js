import React, { useState, useEffect } from "react";
import Rrsmatrix from "./Rrsmatrix";
import { getSomething } from "../api";

const Rrsmatrixmain = ({ searchInput, setSearchInput }) => {
  const [message, setMessage] = useState([]);
  useEffect(async () => {
    await getSomething()
      .then((response) => {
        setMessage(response.rrsmatrix);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, []);
  return (
    <div className="apptrack">
      {/* {console.log(message)} */}
      {message
        .filter((client, index) => {
          //   const clientsAdd = client.site_address;
          //   if (clientsAdd.includes(searchInput.toLowerCase())) {
          //     return true;
          //   }
          //   const clientsId = client.gvr_id.toString();
          //   if (clientsId.includes(searchInput.toLowerCase())) {
          //     return true;
          //   }
          const clientsGp = client.gp_cust;
          if (clientsGp.includes(searchInput.toUpperCase())) {
            return true;
          }
          //   const company = client.cus_name;
          //   if (company.includes(searchInput.toUpperCase())) {
          //     return true;
          //   }
          //   const addId = client.add_id.toUpperCase();
          //   if (addId.includes(searchInput.toUpperCase())) {
          //     return true;
          //   }
        })
        .map((rrs) => (
          <div key={rrs.is}>
            {console.log(rrs)}
            <Rrsmatrix rrs={rrs} />
          </div>
        ))}
    </div>
  );
};

export default Rrsmatrixmain;
