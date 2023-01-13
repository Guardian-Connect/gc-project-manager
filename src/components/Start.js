import React, { useEffect, useState } from "react";
import AppAppBar from "./modules/views/AppAppBar";
import { getSomething } from "../api";
import { FormControl, Button } from "@mui/material";
import Dispcardz from "./Dispcardz";
const Start = ({ count, setCount, searchInput, setSearchInput }) => {
  const primary = "white";
  const secondary = "blue";
  const [message, setMessage] = useState([]);
  const [filters, setFilters] = useState([]);
  const [buttonOne, setButtonOne] = useState(primary);
  const [buttonTwo, setButtonTwo] = useState(primary);
  const [textOne, setTextOne] = useState(secondary);
  const [textTwo, setTextTwo] = useState(secondary);

  const handleClickOne = () => {
    setFilters([...filters, (item) => item.contractor.includes("Guardian")]);
    setButtonOne(secondary);
    setTextOne(primary);
  };

  const handleClickTwo = () => {
    setFilters([...filters, (item) => item.contractor.includes("Nexus")]);
    setButtonTwo(secondary);
    setTextTwo(primary);
  };

  const handleClear = () => {
    setFilters([]);
    setSearchInput("");
    setButtonOne(primary);
    setButtonTwo(primary);
    setTextOne(secondary);
    setTextTwo(secondary);
  };

  useEffect(async () => {
    await getSomething()
      .then((response) => {
        console.log(response);
        setMessage(response.dispinfo);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, []);

  const applyFilters = (message) => {
    return message.filter((item) => {
      return filters.every((filter) => {
        return filter(item);
      });
    });
  };

  const filteredItems = applyFilters(message);

  return (
    <div className="appform">
      <h2>
        <div className="stickytwo">
          <FormControl sx={{ width: "20%", m: 1 }}>
            <Button
              sx={{
                backgroundColor: buttonOne,
                border: "1px solid green",
                color: textOne,
              }}
              onClick={handleClickOne}
            >
              Guardian Connect
            </Button>
          </FormControl>
          <FormControl sx={{ width: "20%", m: 1 }}>
            <Button
              sx={{
                backgroundColor: buttonTwo,
                border: "1px solid green",
                color: textTwo,
              }}
              onClick={handleClickTwo}
            >
              Nexus Energy
            </Button>
          </FormControl>
          <FormControl sx={{ width: "15%", m: 1 }}>
            <Button
              sx={{
                backgroundColor: "white",
                "&:active": {
                  backgroundColor: "blue",
                },
                border: "1px solid green",
                color: "blue",
              }}
              onClick={handleClear}
            >
              Clear
            </Button>
          </FormControl>
        </div>
        {filteredItems
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
