import React, { useEffect, useState } from "react";
import Dispcardz from "./Dispcardz";
import { getSomething } from "../api";
import Projectdisplaycontrols from "./Projectdisplaycontrols";
import { makeStyles } from "@mui/styles";

const Projectdisplay = ({ searchInput, setSearchInput }) => {
  const primary = "white";
  const secondary = "blue";
  const [filters, setFilters] = useState([]);
  const [tracker, setTracker] = useState([]);
  const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 226,
    },
  }));
  const classes = useStyles();
  useEffect(() => {
    getSomething().then((resp) => {
      setTracker(resp.dispinfo);
    });
  }, []);

  const handleClear = () => {
    setFilters([]);
    setSearchInput("");
  };
  const gp_names = [
    { name: "Majors", value: "MAJ0001" },
    { name: "Quick Gas", value: "QUI0003" },
    { name: "Quality Oil", value: "QUA0006" },
  ];

  const handleClickOne = (value) => {
    setFilters([...filters, (item) => item.gp_cust.includes(value)]);
  };

  const handleClickThree = (value) => {
    setFilters([...filters, (item) => item.quote.includes(value)]);
  };

  const handleClickFour = () => {
    setFilters([...filters, (item) => !item.notes.includes("X")]);
  };

  const handleClickSeven = (value) => {
    setFilters([...filters, (item) => item.phase.includes(value)]);
  };

  const applyFilters = (tracker) => {
    return tracker.filter((item) => {
      return filters.every((filter) => {
        return filter(item);
      });
    });
  };

  const filteredItems = applyFilters(tracker);

  return (
    <div className="apptrack">
      <Projectdisplaycontrols
        filters={filters}
        setFilters={setFilters}
        tracker={tracker}
        setTracker={setTracker}
        handleClear={handleClear}
        handleClickOne={handleClickOne}
        handleClickThree={handleClickThree}
        handleClickFour={handleClickFour}
        handleClickSeven={handleClickSeven}
      />
      {filteredItems
        .filter((client, index) => {
          const clientsId = client.gvr_id;
          if (clientsId.includes(searchInput.toLowerCase())) {
            return true;
          }
        })
        .map((site) => (
          <div key={site.id}>
            <Dispcardz site={site} />
          </div>
        ))}
    </div>
  );
};

export default Projectdisplay;
